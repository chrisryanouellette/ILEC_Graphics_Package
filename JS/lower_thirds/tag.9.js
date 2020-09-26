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
// @cg secondaryColor
// @cg backgroundColor
// @cg textColor
// @cg position
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const backgrounds = selectAll('.bkg'),
                accents = selectAll('.accent'),
                h1 = select('h1'),
                p = select('p'),
                tag = select('.tag-nine');

            const i = templateInfo.style.primaryColor[index] ? index : 0;
            
            backgrounds[0].style.fill = templateInfo.style.primaryColor[i];
            backgrounds[1].style.fill = templateInfo.style.secondaryColor[i];
            accents[0].style.fill = templateInfo.style.backgroundColor[i];
            accents[1].style.fill = templateInfo.style.backgroundColor[i];
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
        } catch(error) {
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
            const h1 = select('h1'),
                p = select('p');

            h1.textContent = templateInfo.text.name[index];
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
                titleWidth = getElementStyleProp(selectAll('.text')[0], 'width', null),
                subTitleWidth = getElementStyleProp(selectAll('.text')[1], 'width', null);

            tl.set('svg:first-of-type', {minWidth: subTitleWidth + 100 + 'px'})
                .set(['svg:last-of-type .bkg', 'svg:last-of-type .accent'], {width: subTitleWidth})
                .set(selectAll('svg:first-of-type rect'), {scaleX: 0, transformOrigin: 'left center'})
                .set(selectAll('svg:last-of-type rect'), {scaleX: 0, transformOrigin: 'left center'})
                .set('.row-one.text', {x: -titleWidth + 10})
                .set('.row-two.text', {x: -subTitleWidth + 10})
                .set('.row-one.text h1', {x: titleWidth + 300})
                .set('.row-two.text p', {x: subTitleWidth + 300})
                .set('.tag-nine', {opacity: 1});
        } catch(error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.name[index - 1]}]});

            tl.to('svg:first-of-type .accent', 1, {scaleX: 1, ease: Power2.easeOut})
                .to('svg:first-of-type .bkg', 1.5, {scaleX: 1, ease: Power2.easeOut}, 0)
                .to(['.row-one.text', '.row-one.text h1'], 1.25, {x: 0}, 0)
                .to('svg:last-of-type .accent', 1, {scaleX: 1, ease: Power2.easeOut}, 0)
                .to('svg:last-of-type .bkg', 1.5, {scaleX: 1, ease: Power2.easeOut}, 0)
                .to(['.row-two.text', '.row-two.text p'], 1.25, {x: 0}, 0);
        } catch(error) {
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
        return animateOut()
            .then(setTemplateData)
            .then(setTemplateElements)
            .then(animateIn)
            .then(res => resolve(res))
            .catch(error => reject({message: `${templateInfo.name} had an issue while advancing`, error}));
    });
}

const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]}),
                titleWidth = getElementStyleProp(selectAll('.text')[0], 'width', null),
                subTitleWidth = getElementStyleProp(selectAll('.text')[1], 'width', null);

            tl.to('.row-one.text h1', 1, {x: titleWidth + 300})
                .to('.row-two.text p', 1, {x: subTitleWidth + 300}, 0)
                .to('.row-one.text', 1, {x: -titleWidth + 10}, 0)
                .to('.row-two.text', 1, {x: -subTitleWidth + 10}, 0)
                .to(['svg:first-of-type .bkg', 'svg:last-of-type .bkg'], 1.5, {scaleX: 0, ease: Power2.easeOut}, 0)
                .to(['svg:first-of-type .accent', 'svg:last-of-type .accent'], 1.75, {scaleX: 0, ease: Power2.easeOut}, 0);
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
        select('.tag-nine').style.opacity = 0;
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