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
// @cg textColor
// @cg position
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const h1 = select('h1'),
                h2 = select('h2'),
                p = select('.info p'),
                background = select('svg > rect'),
                next = select('.next-one');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            h1.style.color = templateInfo.style.textColor[i];
            h2.style.color = templateInfo.style.textColor[i];
            p.style.color = templateInfo.style.textColor[i];
            background.style.fill = templateInfo.style.primaryColor[i];

            switch(templateInfo.style.position[i]) {
                case 'center': 
                    next.style.alignItems = 'center';
                    break;
                case 'right':
                    next.style.alignItems = 'flex-end';
                    break;
                default:
                    next.style.alignItems = 'flex-start';
                    break;
            }
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template styles.`, error});
        }
        return resolve();
    });
}

// Sets the templates Text
// @cg [n] time - The header for the graphic
// {GG-Param} title
// @cg subtitle
// @cg [n] info - The additional data at the bottom of the graphic
const setTemplateText = () => {
    return new Promise((resolve, reject) => {
        if(index <= templateInfo.text.title.length - 1) {
            const header = select('#main-mask text'),
                h1 = select('h1'),
                hidden = select('.hidden'),
                h2 = select('h2'),
                info = select('.info p');

            header.textContent = 
            (templateInfo.text.time && templateInfo.text.time[index])
                ? templateInfo.text.header[index]
                : 'NEXT';
            h1.textContent = templateInfo.text.title[index];
            hidden.textContent = templateInfo.text.title[index];
            h2.textContent = templateInfo.text.subtitle[index];
            info.textContent = templateInfo.text.info[index];

            return resolve();
        } else {
            return reject({message: `${templateInfo.name} is out of texts to display`});
        }
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]}),
                width = getElementStyleProp('h1', 'width', null);

            tl.set(['svg', '#bkg', 'h1'], {width})
                .set(['#bkg', selectAll('svg .square')], {scaleX: 0, opacity: 1, transformOrigin: 'center center'})
                .set(selectAll('svg .square'), {x: width / 2 - 25})
                .set('text', {y: 100})
                .set('h1', {y: -100})
                .set('h2', {y: -75})
                .set('.info p', {y: -50})
                .set('.next-one', {opacity: 1});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index - 1]}]}),
                width = getElementStyleProp('h1', 'width', null);
            
            tl.to('#bkg', 1, {scaleX: 1, ease: Power3.easeOut})
                .to(selectAll('svg .square')[0], 1.5, {scaleX: 1, x: `-=${width / 2 + 25}`, ease: Power3.easeOut}, .35)
                .to(selectAll('svg .square')[1], 1.5, {scaleX: 1, x: `+=${width / 2 + 25}`, ease: Power3.easeOut}, .35)
                .to('h1', 1.5, {y: 0, ease: Power3.easeOut}, 0)
                .to('h2', 1.5, {y: 0, ease: Power3.easeOut}, .15)
                .to('.info p', 1, {y: 0, ease: Power3.easeOut}, .25)
                .to('svg text', 1, {y: 0, ease: Power3.easeOut}, .5)
                .set(selectAll('svg .square'), {opacity: 0});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING IN.`, error});
        }
    });
}

const advanceTemplate = () => {
    return new Promise((resolve, reject) => {
        if(index > templateInfo.text.title.length - 1) 
            return reject({message: `${templateInfo.name} is out of names to show.`});
        logInfo({level: 0, status: 'advancing', 
            message: `${templateInfo.name} is ADVANCING to show ${templateInfo.text.title[index]} ${index + 1} of ${templateInfo.text.title.length}`
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
            const tl = new TimelineMax({onComplete: resolve});
        
            tl.to('h1', 1, {y: 100, ease: Power3.easeIn}, 0)
                .to('h2', 1, { y: 75, ease: Power3.easeIn}, 0)
                .to('.info p', 1, {y: -50, ease: Power3.easeIn}, 0)
                .to('svg text', 1, {y: -100, ease: Power3.easeIn}, .25);
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (Out)`, error});
        }
    });
}

const animateTemplateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index - 1]}]}),
                width = getElementStyleProp('.hidden', 'width', null);
            
            tl.set(selectAll('svg .square')[1], {x: width + 25})
                .set('text', {y: 100})
                .set('h1', {y: -100})
                .set('h2', {y: -75})
                .set('.info p', {y: -50})
                .to(['svg', '#bkg', 'h1'], 1, {width, transformOrigin: 'center center'})
                .to('h1', 1.5, {y: 0, ease: Power3.easeOut}, 0)
                .to('h2', 1.5, {y: 0, ease: Power3.easeOut}, .15)
                .to('.info p', 1, {y: 0, ease: Power3.easeOut}, .25)
                .to('svg text', 1, {y: 0, ease: Power3.easeOut}, .5); 
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (In)`, error});
        }
    });
}

const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]}),
                width = getElementStyleProp('h1', 'width', null);
            
            tl.set(selectAll('svg .square'), {opacity: 1})
                .to('h1', 1, {y: 100, ease: Power3.easeIn})
                .to('h2', 1, { y: 75, ease: Power3.easeIn}, 0)
                .to('.info p', 1, {y: -50, ease: Power3.easeIn}, 0)
                .to('svg text', 1, {y: -100, ease: Power3.easeIn}, .25)
                .to(selectAll('svg .square'), 1, {scaleX: 0, x: width / 2 - 25, ease: Power3.easeIn}, 0)
                .to('#bkg', 1.25, {scaleX: 0, ease: Power2.easeIn, transformOrigin: 'center center'}, 0);
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING OUT.`, error});
        }

    });
}


// Custom Command - Reset - Resets the tag to the first one given on load
function reset() {
    if(templateInfo.text.title.length <= 1) 
        return logError({level: 0, error: `${templateInfo.name} does not have more than one title`});
    index = 0;
    if(tlprogress === 2) {
        return next();
    } else {
        return setTemplateData().then(() => 
            logInfo({level: 0, message: `${templateInfo.name} has reset and is now showing ${templateInfo.text.title[index - 1]} [${index} of ${templateInfo.text.title.length}]`}))
    }
    
}

// Custom Command - Previous Tag - Goes to the previous name if possible
function previousText() {
    if(index > 1) {
        index = index - 2;
        tlprogress = 2;
        return next();
    } else if(templateInfo.text.title.length === 1) {
        return logError({level: 0, error: `${templateInfo.name} only has 1 title`});
    } else {
        return logError({level: 0, error: `${templateInfo.name} can not go back 1 title`});
    }
}

// Custom Command - Next Tag - Goes to the next name if possible
function nextText() {
    return next();
}