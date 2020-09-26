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
        }).catch(error => reject(error));
    });
}

// Set all gthe templates styles
function setUpStyles(style) {
    return new Promise((resolve, reject) => {
        const h1 = _.select('h1'),
            p = _.select('p'),
            nameBkg = _.select('.name-bkg'),
            subtitle = _.select('.subtitle'),
            tag = _.select('.tag-two');

        try {
            h1.style.color = style.textColor;
            p.style.color = style.textColor;
            nameBkg.style.stroke = style.primaryColor;
            subtitle.style.backgroundColor = style.primaryColor;

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
        const name = text[index].name,
            h1 = _.select('h1'),
            span = document.createElement('span'),
            p = _.select('p');
        try {
            h1.textContent = name.substring(0, name.indexOf(' '));
            span.textContent = name.substring(name.indexOf(' '));
            h1.appendChild(span);
            p.textContent = text[index].title;

            return resolve();
        } catch (error) {
            return reject(`Error setting template's texts: ${error.message}`);
        }
    });
}

// Sets the Elements initial state
ccg.setupAnimation = function() {
    return new Promise((resolve, reject) => {
        const tl = gsap.timeline({onComplete: resolve});
        try {
            const width = _.getStyles({elem: '.container', attrs: 'width'});
            tl.set('#main-clip rect:first-of-type', {x: `-${width / 2 + 10}`})
                .set('#main-clip rect:last-of-type', {x: width / 2 + 10})
                .set('h1', {y: '5vh'})
                .set('.subtitle', {y: '-5vh'})
                .set('#subtitle-clip rect', {
                    transformOrigin: 'center center',
                    scaleX: 0
                })
                .set('.tag-two', {opacity: 1});
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
            tl.to('#subtitle-clip rect', {scaleX: 1, ease: Power2.easeInOut})
                .to('.subtitle', {y: 0, duration: .5, ease: Power2.easeInOut}, '-=.25')
                .to(_.select('#main-clip rect', true), {x: 0, ease: Power2.easeInOut}, '-=.5')
                .to('h1', {y: 0, duration: .5, ease: Power2.easeOut}, '-=.5')
                .set(['.name-con', '.subtitle'], {"clip-path": 'none'});
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
        const tl = gsap.timeline({onComplete: resolve, defaults: {duration: .5}});
        try {
            const width = _.getStyles({elem: '.container', attrs: 'width'});
            tl.to('h1', {x: width})
                .to('p', {y: '3vh'}, 0)
                .set(['.container', '.name-bkg-clip', '.subtitle'], {width})
                .set('h1', {opacity: 0});
        } catch (error) {
            return reject(`Unable to Advance Out: ${error.message}`);
        }
    });
}

ccg.advanceData = function(data) {
    return new Promise((resolve, reject) => {
        setUpTexts(data.text)
        .then(() => {
            index++;
            return resolve();
        });
    });
}

ccg.advanceIn = function() {
    return new Promise((resolve, reject) => {
        const tl = gsap.timeline({onComplete: resolve, defaults: {duration: .5}});
        try {
            const width = _.getStyles({elem: 'h1', attrs: ['width', 'padding'], ops: 'add'}).total;
            tl.set('h1', {x: width * 2, opacity: 1})
                .to(['.container', '.name-bkg-clip', '.subtitle'], {width})
                .to('h1', {x: 0, ease: Power2.easeOut}, '-=.25')
                .to('p', {y: 0}, '-=.5');
        } catch (error) {
            return reject(`Unable to Advance In: ${error.message}`);
        }
    });
}

//  Animates the template out
ccg.animateOut = function() {
    return new Promise((resolve, reject) => {
        const tl = gsap.timeline({onComplete: resolve, defaults: {duration: .5}});
        try {
            const width = _.getStyles({elem: '.container', attrs: 'width'});
            tl.set(_.select('#main-clip rect', true), {attr: {width: '55%'}})
                .set('#subtitle-clip rect', {attr: {width: '110%'}, transformOrigin: 'center center'})
                .set('.name-con', {"clip-path": 'url(#main-clip)'})
                .set('.subtitle', {'clip-path': 'url(#subtitle-clip)'})
                .to('h1', {y: '5vh', duration: 1})
                .to('#main-clip rect:first-of-type', {x: `-${width / 2 + 10}`}, '-=.75')
                .to('#main-clip rect:last-of-type', {x: width / 2 + 10}, '-=.75')
                .to('.subtitle', {y: '-5vh'}, '-=.5')
                .to('#subtitle-clip rect', {scaleX: 0, duration: 1, ease: Power2.easeInOut}, '-=.25');
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