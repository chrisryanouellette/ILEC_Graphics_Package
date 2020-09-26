'use strict';
// Enviorment for the graphic
const ENV = 'DEV';
// The index of data to show
let index = 0;

const loopingInstragram = new TimelineMax({paused: true, repeat: -1, repeatDelay: 3})
    .set('.instagram .camera', {transformOrigin: 'center center'})
    .to('.instagram .camera', 1, {rotation: 360, ease: Power2.easeInOut})
    .to('.instagram .lens', 1, {scale: 0, ease: Power2.easeInOut}, 0)
    .to('.instagram .lens', 1, {scale: 1, ease: Power2.easeInOut}, 1)
    .to('.heart', 1, {stroke: 'white'}, .5)
    .to('.heart', 1, {stroke: '#FB1B51'}, 1.5);

// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    return Promise.all([setTemplateStyles(), setTemplateText(), setTemplateAssets()])
    .then(() => {
        return true;
    });
}

// Sets the templates styles
// {CG-Param} primaryColor
// {CG-Param} position
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const main = select('.instagram-one');

            const i = templateInfo.style.primaryColor[index] ? index : 0;
        
            switch(templateInfo.style.position[i]) {
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
// {CG-Param} username
const setTemplateText = () => {
    return new Promise((resolve, reject) => {
        try {
            const p = select('p');
            p.textContent = templateInfo.text.username[index];
        } catch (error) {
            return reject({message: `${templateInfo.name} is out of names to display`});
        }
        return resolve();
    });
}

// Creates and adds all the nessecary medai assets to the template
// {CG-Param} portraits - An Array of images to be used in the instagram graphic
const setTemplateAssets = () => {
    return new Promise((resolve, reject) => {
        const arr = addAssetSources(selectAll('img'), templateInfo.asset.portraits);
        
        Promise.all(arr).then(resolve).catch(error => reject(error));
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]});

            const handleHeight = getElementStyleProp('.handle', 'height', null),
                linesHeight = getElementStyleProp('.lines', 'height', null);

            tl.set(selectAll('.overflow'), {opacity: 0, zIndex: 0})
                .set('.container div:nth-of-type(5)', {
                    opacity: 1, 
                    transformOrigin: 'center 1em', 
                    scale: '0 0',
                    x: 0
                })
                .set('.container div:nth-of-type(5)', {className: '+=drop-shadow'})
                .set(['.bkg', '.handle'], {opacity: 0, backgroundColor: 'rgba(0,0,0,.25)',height: 'auto'})
                .set(['.instagram', '.heart', '.handle div', '.username'], {y: `+=${handleHeight}`, opacity: 1})
                .set('.handle div', {scale: 1})
                .set(selectAll('.line'), {y: `-=${linesHeight}`, opacity: 0})
                .set('.lines', {opacity: 1})
                .set('.instagram-one', {opacity: 1});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'asset', info: `Image ${index + 1}`, index: index + 1}]});

            tl.to('.container div:nth-of-type(5)', 1, {scale: 1, ease: Power2.easeOut})
                .to('.handle', .5, {opacity: 1}, .75)
                .staggerTo(['.instagram', '.handle div', '.heart'], .5, {y: 0}, {each: .15}, '-=.25')
                .set(selectAll('.line'), {opacity: 1}, 1)
                .staggerTo(selectAll('.line'), 1, {y: 0, ease: Power2.easeOut}, {each: -.15}, 1)
                .set('.bkg', {opacity: 1})
                .set(selectAll('.overflow'), {transformOrigin: 'center'})
                .addCallback(() => loopingInstragram.play());
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING IN.`, error});
        }
    });
}

const advanceTemplate = () => {
    return new Promise((resolve, reject) => {
        if(index >= templateInfo.asset.portraits.length - 1) 
            return reject({message: `${templateInfo.name} is out of images to show.`})
        logInfo({level: 0, status: 'advancing', 
            message: `${templateInfo.name} is ADVANCING to show Image ${index + 2} of ${templateInfo.asset.portraits.length}`
        });
        return advancePanel()
            .then(res => {index++; return resolve(res)})
            .catch(error => reject({message: `${templateInfo.name} had an issue while advancing`, error}));
    });
}

const advancePanel = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'asset', info: `Image ${index + 2}`, index: index + 2}]}),
                imgs = selectAll('.overflow');

            const height = getElementStyleProp('.overflow', 'height', null),
                width = getElementStyleProp('.overflow', 'width', null);
            const thirdHeight = (height / 3 - 5) / height,
                halfWidth = (width / 3 + 5);

            let origin = '';
            switch(index) {
                case 0:
                    origin = '0 0';
                    break;
                case 1:
                    origin = '0 center';
                    break;
                case 2:
                    origin = '0 100%';
                    break;
                default:
                    origin = '0 0';
                    break;
            }
            
            tl.set(imgs[imgs.length - index - 2], {opacity: 1, scale: .9})
                .set(imgs[imgs.length - index - 2], {className: '+=drop-shadow'})
                .to(imgs[imgs.length - index - 1], .5, {
                    x: -halfWidth, 
                    scale: thirdHeight, 
                    transformOrigin: origin
                }, 0)
                .to(imgs[imgs.length - index - 2], 1, {scale: 1}, '-=.5');
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING`, error});
        }
    });
}

const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
                const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'asset', index}]});

                const thirdWidth = getElementStyleProp('.overflow', 'width', null) / 3 + 10,
                    height = getElementStyleProp('.overflow', 'height', null) - getElementStyleProp('.handle', 'padding', {height: true}),
                    linesHeight = getElementStyleProp('.lines', 'height', null),
                    textScale = getElementStyleProp('.handle div', 'width', null) / select('.username').offsetWidth;


                const imgs = selectAll('.overflow');
                const visibleImgs = [];
                imgs.forEach((img, i) => i < index ? visibleImgs.push(imgs[imgs.length - 1 - i]) : null);

                tl.set(imgs[imgs.length - 1 - index], {zIndex: 10 ,transformOrigin: 'center'})
                    .set('.bkg', {opacity: 0})
                    .to('.handle', 1, {height, borderRadius: '10px'}, 0)
                    .to('.heart', .5, {opacity: 0}, '-=.5')
                    .to('.handle div', .5, {scale: textScale, transformOrigin: '0 center'}, '-=.5')
                    .staggerTo(selectAll('.line'), .5, {y: `-=${linesHeight}`, ease: Power2.easeOut}, {each: .15}, 0)
                    .set('.lines', {opacity: 0}, .5)
                    .staggerTo(visibleImgs, .5, {x: `+=${thirdWidth}`}, {each: .15}, 0)
                    .to(visibleImgs, .5, {opacity: 0}, '-=.75')
                    .to(imgs[imgs.length - 1 - index], .5, {scale: 0})
                    .to('.handle', .5, {backgroundColor: 'transparent'}, '-=.5')
                    .to('.instagram', 1, {opacity:0, ease:RoughEase.ease.config({points:15, strength:2, clamp:true})})
                    .to('.username', 1, {opacity:0, ease:RoughEase.ease.config({points:15, strength:2, clamp:true})}, '-=.75');
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING OUT.`, error});
        }
    });
}

