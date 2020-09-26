'use strict';

// The index of data to show
let index = 0;

ccg.initalizeDevelopmentEnviorment('/DEV/dev.js');

ccg.defineData({
    text: [{
        name: {type: 'string', required: true},
        title: 'string'
    }],
    style: {
        primaryColor: {type: 'string', required: true},
        backgroundColor: {type: 'string', required: true},
        textColor: {type: 'string', required: true},
        position: 'string'
    }
});


// Promise that waits for all the template style and text data to be set
ccg.updateElementData = function(data) {
    return new Promise((resolve, reject) => {
        Promise.all([setUpStyles(data.style), setUpTexts(data.text)])
        .then(() => {
            index++;
            return resolve();
        })
        .catch(error => reject(error));
    });
}


// Set all gthe templates styles
function setUpStyles(style) {
    return new Promise((resolve, reject) => {
        const mainSquare = _.select('.main-square'),
            accentSquare = _.select('.accent-square'),
            rightSquare = _.select('.right-square'),
            title = _.select('.title'),
            tag = _.select('.tag-one');

        try {
            mainSquare.style.fill = style.primaryColor;
            rightSquare.style.backgroundColor = style.primaryColor;
            accentSquare.style.fill = style.backgroundColor;
            title.style.color = style.textColor;
    
            switch(style.position) {
                case 'center': 
                    tag.style.alignItems = 'center';
                    break;
                case 'right':
                    tag.style.alignItems = 'flex-end';
                    break;
                default:
                    tag.style.alignItems = 'flex-start';
                    break;
            }
            return resolve();
        } catch (error) {
            return reject(`Error setting template's styles: ${error.message}`);
        }
    });
}

// Sets all the templates element's text
function setUpTexts(text) {
    return new Promise((resolve, reject) => {
        const name = text[index].name;

        const textNode = _.select('.name'),
            hiddenName = _.select('.sizing p'),
            subtitleNode = _.select('.title'),
            tspan = document.createElementNS('http://www.w3.org/2000/svg','tspan');

        try {
            tspan.textContent = name.substring(name.indexOf(' '));
            textNode.textContent = name.substring(0, name.indexOf(' ') + 1);
            textNode.appendChild(tspan);
            hiddenName.textContent = name;
            subtitleNode.textContent = text[index].title;

            return resolve();
        } catch (error) {
            return reject(`Error setting template's texts: ${error.message}`);
        }
    });
}

// Sets the Elements initial state
ccg.setupAnimation = function() {
   return new Promise((resolve, reject) => {
        const tl = gsap.timeline({onComplete: resolve})
        try {
            const height = _.getStyles({elem: '.container', attrs: 'height'});
            const width = _.getStyles({elem: '.sizing', attrs: 'width'});

            tl.set('.container', {height})
                .set('main svg', {width})
                .set('.right-square', {x: width, opacity: 0})
                .set('.accent-square', {x: width, scaleX: 1,transformOrigin: '100% 50%'})
                .set('.main-square', {x: width + 5})
                .set('.name', {x: width, attr: {x: '50%'}})
                .set('.title', {y: '-5vh', opacity: 0})
                .set('#main-mask rect', {attr: {width: '100%'}})
                .set('.tag-one', {opacity: 1});
        } catch (error) {
            return reject(`Unable to setup animation: ${error.message}`);
        }
   });
}

//  Animates the template in
ccg.animateIn = function() {
   return new Promise((resolve, reject) => {
    const tl = gsap.timeline({onComplete: resolve, defaults: {duration: 1}});
        try {
            tl.to('.right-square', {x: 0, opacity: 1, ease: Power2.easeOut})
                .to('.accent-square', {x: 0, ease: Power2.easeOut}, '-=.75')
                .to(['.main-square', '.name'], {x: 0,ease: Power2.easeOut}, '-=.75')
                .set('.title', {opacity: 1}, '-=.5')
                .to('.title', {y: 0, duration: .5}, '-=.5')
                .to('.accent-square', {scaleX: 0, ease: Power2.easeOut}, '-=.55');
        } catch (error) {
            return reject(`Unable to Animate In: ${error.message}`);
        }
   });
}

ccg.shouldAdvance = function({data, playoutInfo}) {
    if(index <= data.text.length - 1) {
        return true;
    } else {
        if(playoutInfo.autoComplete) return {error: true, solution: window.stop};
        return {error: true, message: 'Graphic is out of tags'};
    }
}

ccg.advanceOut = function() {
    return new Promise((resolve, reject) => {
        const tl = gsap.timeline({onComplete: resolve, defaults: {duration: 1}});
        try {
            const width = _.getStyles({elem: '.sizing', attrs: 'width'});

            tl.to('.title', {y: '-3vh', opacity: 0, duration: .5, ease: Power2.easeIn})
                .to('.main-square', {x: width, ease: Power2.easeIn}, '-=.5')
                .to('.name', {x: `-${width}`, ease: Power2.easeIn }, '-=1')
                .set('#main-mask rect', {fill: 'black'}, 1.5);
        } catch (error) {
            return reject(`Unable to Advance Out: ${error.message}`);
        }
    });
}

const resetTemplateElements = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = gsap.timeline({onComplete: resolve}),
                width = _.getStyles({elem: '.sizing', attrs: 'width'});

            tl.invalidate();
            tl.to('main svg', {width, duration: 1})
                .set('.main-square', {x: width})
                .set(['.name', '#main-mask rect'], {attr: {x: 0, width: 0}})
                .set('.name', {x: width, attr: {x: '50%'}})
                .set('#main-mask rect', {attr: {width: '100%'}});

        } catch (error) {
            return reject(`Unable to Reset Elements: ${error.message}`);
        } 
    });
}

ccg.advanceData = function(data) {
    return new Promise((resolve, reject) => {
        setUpTexts(data.text)
        .then(resetTemplateElements)
        .then(() => {
            index++;
            return resolve();
        });
    });
}


ccg.advanceIn = function() {
    return new Promise((resolve, reject) => {
        const tl = gsap.timeline({onComplete: resolve, defaults: {duration: 1}});
        try {
            tl.set('#main-mask rect', {fill: 'white'})
                .to(['.main-square', '.name'], {x: 0, ease: Power2.easeOut}, 0)
                .to('.title', {y: 0, opacity: 1, duration: .5, ease: Power2.easeOut}, '-=.5');
        } catch (error) {
            return reject(`Unable to Advance In: ${error.message}`);
        }
    });
}

//  Animates the template out
ccg.animateOut = function() {
    return new Promise((resolve, reject) => {
        const tl = gsap.timeline({onComplete: resolve, defaults: {duration: 1}});
        try {
            const width = _.getStyles({elem: '.sizing', attrs: 'width'});

            tl.to('.title', {y: '-3vh', opacity: 0, duration: .5, ease: Power2.easeIn})
                .to('.main-square', { x: `-${width + 10}`, ease: Power2.easeIn}, .25)
                .to('.name', {x: width, ease: Power2.easeIn}, .25)
                .to('.right-square', { x: `-${width + 10}`, opacity: 0, ease: Power2.easeIn}, .25);
        } catch (error) {
            return reject(`Unable to Animate Out: ${error.message}`);
        }
    });
}

ccg.registerCC('reset', function() {
    return new Promise((resolve, reject) => {
        const data = ccg.data();
        if(data.text.length <= 1) return reject('There is only one tag');
        if(index === 1) return reject('Already on the first tag');
        index = 0;
        if(ccg.progress() === 2) {
            resolve();
            return next();
        } else {
            document.querySelector('.tag').style.opacity = 0;
            return ccg.updateElementData(data)
                .then(ccg.setupAnimation)
                .then(resolve);
        }   
    });
});

ccg.registerCC('previousTag', function() {
    const data = ccg.data();
    if(index > 1) {
        index = index - 2;
        return next();
    } else if(data.text.length === 1) {
        return logError(`${data.localName} only has 1 name`);
    } else {
        return logError( `${data.localName} can not go back one name`);
    }
});

ccg.registerCC('nextTag', next);