'use strict';

// Enviorment for the graphic
const ENV = 'DEV';


// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    return Promise.all([setTemplateStyles(), setTemplateText()])
    .then(() => {
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
            const texts = selectAll('svg > text'),
                p = select('p'),
                background = select('svg > rect'),
                main = select('.title-one');

            texts.forEach(e => e.style.fill = templateInfo.style.textColor[0]);
            p.style.color = templateInfo.style.textColor[0];
            background.style.fill = templateInfo.style.primaryColor[0];

            switch(templateInfo.style.position[0]) {
                case 'left': 
                    main.style.alignItems = 'flex-start';
                    break;
                case 'center':
                    main.style.alignItems = 'center';
                    break; 
                case 'right': 
                    main.style.alignItems = 'flex-end';
                    break;
                default: 
                    main.style.alignItems = 'flex-start';
                    break;
            }
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template styles.`, error});
        }
        return resolve();
    });
}

// Sets the templates Text
// @cg
const setTemplateText = () => {
    return new Promise((resolve, reject) => {
        try {
            const texts = selectAll('svg text'),
                h1 = select('h1'),
                p = select('p');

            texts.forEach(element => {
                element.textContent = templateInfo.text.title[0]
            });
            h1.textContent = templateInfo.text.title[0];
            p.textContent = templateInfo.text.subtitle[0];
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error when setting its text.`}, error);
        }
        return resolve();
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]}),
                width = getElementStyleProp('h1', ['width', 'padding'], {width: true}),
                height = getElementStyleProp('h1', 'height', null);

            
            tl.set(['svg', selectAll('svg rect')], {width})
                .set('svg #text-mask rect', {x: width + 10})
                .set('svg #text-mask text', {x: -width})
                .set(selectAll('svg .split-text-mask'), {x: 0})
                .set(selectAll('.split-text')[0], {attr: {y: `-=${height / 2 }`}})
                .set(selectAll('.split-text')[1], {attr: {y: `-=${-height / 2 }`}})
                .set('p', {y: height})
                .set('.title-one', {opacity: 1});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[0], index: 1}]});

            const width = getElementStyleProp('h1', ['width', 'padding'], {width: true}),
                height = getElementStyleProp('h1', 'height', null);
                
            tl.to(selectAll('.split-text'), 1, {attr: {y: 75}, ease: Power2.easeOut})
                .to(['svg', 'p'], 1.5, {scale: .75, ease: Power4.easeInOut}, '-=.25')
                .to('svg #text-mask text', 1, {x: 0, ease: Power2.easeOut}, 1.35)
                .to('svg #text-mask rect', 1, {x: 0, ease: Power2.easeInOut}, 1.35)
                .to(selectAll('svg .split-text-mask rect'), 1, {x: -width, ease: Power2.easeInOut}, 1.35)
                .to('p', 1, {y: `-=${height + 20}`, ease: Power3.easeOut}, 1.3);
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING IN.`, error});
        }
    });
}

const advanceTemplate = () => {
    return Promise.reject({message: `${templateInfo.name} can not be advanced`});
}

const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index: 1}]}),
                width = getElementStyleProp('h1', ['width', 'padding'], {width: true}),
                height = getElementStyleProp('h1', 'height', null);

            tl.to('p', 1, {y: `+=${height + 20}`, ease: Power3.easeOut})
                .to('svg #text-mask text', 1, {x: -width, ease: Power2.easeOut}, 0)
                .to('svg #text-mask rect', 1, {x: width + 10, ease: Power2.easeInOut}, 0)
                .to(selectAll('svg .split-text-mask rect'), 1, {x: 0, ease: Power2.easeInOut}, 0)
                .to(['svg', 'p'], 1.5, {scale: 1, ease: Power4.easeInOut}, .25)
                .to(selectAll('.split-text')[0], 1, {attr: {y: `-=${height / 2 }`}}, 1.5)
                .to(selectAll('.split-text')[1], 1, {attr: {y: `-=${-height / 2 }`}}, 1.5);
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING OUT.`, error});
        }
    });
}