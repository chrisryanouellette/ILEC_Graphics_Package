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
// @cg textColor
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const cubeFace = selectAll('.cube__face'),
                h1 = select('h1'),
                p = select('p');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            cubeFace[0].style.background = 
                `linear-gradient(to left, white 5px, rgba(0,0,0,0) 5px), linear-gradient(0, ${templateInfo.style.primaryColor[i]}, ${templateInfo.style.secondaryColor[i]})`;
            cubeFace[1].style.background = 
                `linear-gradient(to left, white 5px, rgba(0,0,0,0) 5px), linear-gradient(0, ${templateInfo.style.primaryColor[i]}, ${templateInfo.style.secondaryColor[i]})`;
            h1.style.color = templateInfo.style.textColor[i];
            p.style.color = templateInfo.style.textColor[i];

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
                width = getElementStyleProp('.cube', 'width', null);

            tl.set('.cube', {x: width, rotationY: '300deg'})
                .set('.scene', {opacity: 0})
                .set('h1, p', {opacity: 0})
                .set('.tag-six', {opacity: 1});
       } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
       }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.name[index - 1]}]});

            tl.to('.scene', .25, {opacity: 1})
                .to('.cube', 2, {x: 0, ease: CustomEase.create('custom', "M0,0,C0.192,0.098,0.262,0.374,0.304,0.522,0.353,0.698,0.396,0.834,0.456,0.9,0.528,0.979,0.734,1,1,1")}, 0)
                .to('.cube', 1.75, {rotationY: 0, ease: CustomEase.create('custom', "M0,0,C0.192,0.098,0.262,0.374,0.304,0.522,0.353,0.698,0.396,0.834,0.456,0.9,0.528,0.979,0.734,1,1,1")}, 0)
                .to(selectAll('h1, p'), .5, {opacity: 1}, 0);
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
            const tl = new TimelineMax({onComplete: resolve});

            tl.staggerTo(selectAll('.cube__face'), .5, {rotationX: '90deg', stagger: {amount: .25, ease: Power2.easeOut}})
                .to(selectAll('.cube__face'), .25, {opacity: 0}, .5);
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (Out)`, error});
        }
    });
}


const animateTemplateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.name[index - 1]}]});

            tl.set(selectAll('.cube__face'), {rotationX: '-90deg'})
                .to(selectAll('.cube__face'), .25, {opacity: 1})
                .staggerTo(selectAll('.cube__face'), .5, {rotationX: '0deg', stagger: {amount: .25, ease: Power2.easeiN}}, '-=.25');
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (In)`, error});
        }
    });
}

const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]}),
                width = getElementStyleProp('.cube', 'width', null);

            tl.to('.cube', 2, {x: width, ease: CustomEase.create('custom', "M0,0,C0.192,0.098,0.262,0.374,0.304,0.522,0.353,0.698,0.396,0.834,0.456,0.9,0.528,0.979,0.734,1,1,1")}, 0)
                .to('.cube', 1.75, {rotationY: '300deg', ease: CustomEase.create('custom', "M0,0,C0.192,0.098,0.262,0.374,0.304,0.522,0.353,0.698,0.396,0.834,0.456,0.9,0.528,0.979,0.734,1,1,1")}, 0)
                .to(selectAll('h1, p'), 1.5, {opacity: 0}, 0)
                .to('.scene', .5, {opacity: 0}, .75);
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
        select('.tag-six').style.opacity = 0;
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