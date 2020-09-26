'use strict';
//  Enviorment for the graphic
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
// @cg textColor
// @cg position
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const largeCircle = selectAll('.large-circle')[1],
                smallCircle = selectAll('.small-circle')[1],
                h1 = select('h1'),
                p = select('p'),
                tag = select('.tag-eight');
            
            const i = templateInfo.style.primaryColor[index] ? index : 0;

            largeCircle.style.fill = templateInfo.style.primaryColor[i];
            smallCircle.style.fill = templateInfo.style.secondaryColor[i];
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

        } catch(e) {
            return reject({message: 'Error setting template styles.', error: e});
        }
        return resolve();
    });
}

// Sets the templates text elements
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
            return reject({message: `${templateInfo.name} is out of tags to display`});
        } 
    });
}

const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]});
       
            tl.set(selectAll('.large-circle, .small-circle, .large-alpha, .small-alpha'), 
                {scale: 0, transformOrigin: 'center center'})
                .set(['h1', 'p'], {y: -75})
                .set('.tag-eight', {opacity: 1});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.name[index - 1]}]});

            tl.to(selectAll('.large-circle'), 2, {scale: 1, ease: Power4.easeOut})
                .to(selectAll('.small-circle'), 1, {scale: 1, ease: Power2.easeOut}, 0)
                .staggerTo(['h1', 'p'], 1, {y: 0}, {amount: .15, ease: Power4.easeOut}, .25);
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
            .then(setTemplateElements)
            .then(animateIn)
            .then(res => resolve(res))
            .catch(error => reject({message: `${templateInfo.name} had an issue while advancing`, error}));
    });   
}

const animateTemplateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve});

            tl.to('.large-alpha', 1, {scale: 1.1, ease: Power4.easeIn}, 0)
                .to('.small-alpha', 1, {scale: 1.1, ease: Power2.easeIn}, 0)
                .staggerTo(['p', 'h1'], 1, {y: 50}, {amount: .15, ease: Power4.easeIn}, .5);
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (Out)`, error});
        }
    });
}

const animateOut = () => {
    return new Promise((resolve, reject) => {
       try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]});

            tl.staggerTo(['h1', 'p'], 1, {y: 50}, {amount: .15, ease: Power4.easeOut})
                .to(selectAll('.large-circle'), 1, {scale: 0, ease: Power4.easeIn}, .25)
                .to(selectAll('.small-circle'), 1, {scale: 0, ease: Power2.easeIn}, .25); 
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
        select('.tag-eight').style.opacity = 0;
        return setTemplateData()
            .then(setTemplateElements)
            .then(() => 
                logInfo({level: 0, message: `${templateInfo.name} has reset and is now showing ${templateInfo.text.name[index - 1]} [${index} of ${templateInfo.text.title.length}]`}))
    }   
}

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

function nextTag() {
    return next();
}