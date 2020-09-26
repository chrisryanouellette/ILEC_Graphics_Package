'use strict';

// Enviorment for the graphic
const ENV = 'DEV';
// The index of data to show
let index = 0;

// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    return Promise.all([setTemplateStyles(), setTemplateText()])
    .then(() => {
        index++;
        return true;
    });
}

// Sets the templates styles
// @cg primaryColor
// @cg backgroundColor
// @cg textColor
// @cg position
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const lines = selectAll('svg polyline'),
                h1 = select('h1'),
                p = select('p'),
                tag = select('.tag-three');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            lines[0].style.stroke = templateInfo.style.primaryColor[i];
            lines[1].style.stroke = templateInfo.style.primaryColor[i];
            lines[2].style.stroke = templateInfo.style.backgroundColor[i];
            lines[3].style.stroke = templateInfo.style.backgroundColor[i];
            h1.style.color = templateInfo.style.textColor[i];
            p.style.color = templateInfo.style.textColor[i];

            switch(templateInfo.style.position[i]) {
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
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template styles.`, error});
        }
        return resolve();
    });
}

// Sets the templates Text
// @cg name
// @cg title
const setTemplateText = () => {
    return new Promise((resolve, reject) => {
        if(index <= templateInfo.text.name.length - 1) {
            const name = templateInfo.text.name[index],
                h1 = select('h1'),
                span = document.createElement('span'),
                p = select('p');
    
            h1.textContent = name.substring(0, name.indexOf(' '));
            span.textContent = name.substring(name.indexOf(' '));
            h1.appendChild(span);
            p.textContent = templateInfo.text.title[index];

            return resolve();
        } else {
            return reject({message: `${templateInfo.name} is out of names to display`});
        }
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]}),
                titleWidth = getElementStyleProp('h1', 'width'),
                subtitleWidth = getElementStyleProp('p', 'width'),
                maskWidth = subtitleWidth / titleWidth + .15;

            tl.set('h1', {y: '5vh'})
                .set('p', {y: '-2vh', opacity: 0})
                .set('#main-mask rect:last-of-type', {scaleX: maskWidth, transformOrigin: '50% 50%'})
                .set('.tag-three', {opacity: 1});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.name[index - 1]}]});

            tl.to(selectAll('.white'), 2, {strokeDashoffset: 0, ease: Power2.easeInOut})
                .to(selectAll('.color'), 2, {strokeDashoffset: 0, ease: Power2.easeInOut}, '-=1.5')
                .to('h1', .5, {y: 0}, '-=1')
                .to('p', .5, {y: 0,opacity: 1}, '-=.5');
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING IN.`, error});
        }
    });
}

const advanceTemplate = () => {
    return new Promise((resolve, reject) => {
        if(index > templateInfo.text.name.length - 1) 
            return reject({message: `${templateInfo.name} is out of names to show.`});
        logInfo({level: 0, status: 'advancing', 
            message: `${templateInfo.name} is ADVANCING to show ${templateInfo.text.name[index]} ${index + 1} of ${templateInfo.text.title.length}`
        });
        return animateTemplateOut()
            .then(setTemplateData)
            .then(animateTemplateIn)
            .then(res => resolve(res))
            .catch(error => reject({message: `${templateInfo.name} had an issue while advancing`, error}));
    });
}

const animateTemplateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve}),
                textWidth = getElementStyleProp('h1', ['width', 'margin', 'padding']),
                containerWidth = getElementStyleProp('.container', 'width');
            
            tl.set(['.container', 'svg'], {width: containerWidth})
                .to('h1', .5, {x: textWidth})
                .to('p', .5, {opacity: 0}, '-=.25')
                .set('h1', {opacity: 0});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (Out)`, error});
        }
    });
}


const animateTemplateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.name[index - 1]}]});

            const titleWidth = getElementStyleProp('h1', ['width', 'margin', 'padding']),
                subtitleWidth = getElementStyleProp('p', 'width'),
                maskWidth = subtitleWidth / titleWidth + .15;
            
            tl.to(['.container', 'svg'], .5, {width: titleWidth})
                .to('#main-mask rect:last-of-type', .5, {scaleX: maskWidth}, '-=.5')
                .set('h1', {x: `-${titleWidth}`, opacity: 1})
                .to('h1', .5, {x: 0})
                .to('p', .5, {opacity: 1}, '-=.25');
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (In)`, error});
        }
    }); 
}

const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]});

            tl.to('h1', .5, {y: '5vh', ease: Power2.easeIn})
                .to('p', .5, {y: '-2vh',opacity: 0, ease: Power2.easeIn}, '-=.5')
                .to(selectAll('.color'), 1, {strokeDashoffset: 600, ease: Power2.easeInOut}, '-=.5')
                .to(selectAll('.white'), 1, {strokeDashoffset: 600, ease: Power2.easeInOut}, '-=.75');
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING OUT.`, error});
        }
    });
}

// Custom Command - Reset - Resets the tag to the first one given on load
function reset() {
    if(templateInfo.text.name.length <= 1) 
        return logError({level: 0, error: `${templateInfo.name} does not have more than one name`});
    index = 0;
    if(tlprogress === 2) {
        return next();
    } else {
        select('.tag-three').style.opacity = 0;
        return setTemplateData()
            .then(setTemplateElements)
            .then(() => 
                logInfo({level: 0, message: `${templateInfo.name} has reset and is now showing ${templateInfo.text.name[index - 1]} [${index} of ${templateInfo.text.title.length}]`}))
    }   
}

// Custom Command - Previous Tag - Goes to the previous name if possible
function previousTag() {
    if(index > 1) {
        index = index - 2;
        tlprogress = 2;
        return next();
    } else if(templateInfo.text.name.length === 1) {
        return logError({level: 0, error: `${templateInfo.name} only has 1 name`});
    } else {
        return logError({level: 0, error: `${templateInfo.name} can not go back 1 name`});
    }
}

// Custom Command - Next Tag - Goes to the next name if possible
function nextTag() {
    return next();
}