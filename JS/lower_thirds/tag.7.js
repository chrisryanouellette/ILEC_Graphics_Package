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
                bkg = select('.subtitle-bkg'),
                tag = select('.tag-seven');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            h1.style.color = templateInfo.style.textColor[i];
            bkg.style.fill = templateInfo.style.primaryColor[i];

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
        } catch(error) {
            return reject({message: `${templateInfo.name} had an issue whiel loading it's styles.`, error});
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
            const h1 = select('h1'),
                p = select('p'),
                text = select('svg text');

            h1.textContent = templateInfo.text.name[index];
            p.textContent = templateInfo.text.title[index];
            text.textContent = templateInfo.text.title[index];

            return resolve();
        } else {
            return reject({message: `${templateInfo.name} is out of tags to display`, error});
        }
    });   
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]}),
                width = getElementStyleProp('p', ['width', 'padding'], {width: true, height: false}),
                height = getElementStyleProp('p', 'height', null);

            tl.set('h1', {y: 50})
                .set('svg', {attr: {width}})
                .set('svg text', {y: height})
                .set('svg', {y: '15vh'})
                .set('.subtitle', {overflow: 'visible'})
                .set('.tag-seven', {opacity: 1});
        } catch(error) {
            return reject({message: `${templateInfo.name} had an issue while setting its elements.`, error});
        }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.name[index - 1]}]});

            tl.to('h1', .75, {y: 0, ease: Power1.easeOut})
                .to('svg', 1, {y: 0, ease: Power4.easeOut}, .25)
                .to('svg text', .5, {y: 0, ease: Power2.easeOut}, '-=.75');
        } catch(error) {
            return reject({message: `${templateInfo.name} had an issue while ANIMATING IN`, error});
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
            .then(setTemplateElements)
            .then(animateIn)
            .then(res => resolve(res))
            .catch(error => reject({message: `${templateInfo.name} had an issue while advancing`, error}));
    });
}

const animateTemplateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve}),
                height = getElementStyleProp('svg', 'height', null);

            tl.set('.subtitle', {overflow: 'hidden'})
                .to('h1', 1, {y: -75, ease: Power2.easeIn})
                .to('svg', .75, {y: -height - 5, ease: Power2.easeIn}, 0);
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (Out)`, error});
        }
    });
}

const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]}),
                height = getElementStyleProp('p', 'height', null);
        
            tl.to('svg', 1, {y: '15vh', ease: Power4.easeIn})
                .to('svg text', .5, {y: height, ease: Power2.easeIn}, '-=.75')
                .to('h1', 1, {y: 75, ease: Power2.easeIn}, .25);
        } catch(error) {
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
        select('.tag-seven').style.opacity = 0;
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