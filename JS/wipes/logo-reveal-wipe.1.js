'use strict';

// Enviorment for the graphic
const ENV = 'DEV';
// The index of data to show
let index = 0;

const logoPush = new TimelineMax({paused: true, yoyo: false, repeat: 0}).set('.logo', {scale: 1}).to('.logo-con', 10, {scale: .75, ease: Power2.easeInOut});

const loopingLines = new TimelineMax({paused: true, repeat: -1})
    .staggerTo(selectAll('.line'), 2, {strokeDasharray: '80 100', ease: Power3.easeOut}, {each: .5, from: 2})
    .staggerTo(selectAll('.line'), 2, {strokeDashoffset: '-80', ease: Power3.easeInOut}, {each: .5, from: 2}, .15);

// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    //setTemplateStyles(), setTemplateText(), setTemplateAssets()
    return Promise.all([setTemplateStyles(), setTemplateText(),  setTemplateAssets()])
    .then(() => {
        index++;
        return true;
    });
}

// Sets the templates styles
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const logoAccent = select('.logo-accent'),
                background = select('.background-rect'),
                backgroundPattern = select('#background-pattern circle'),
                line = select('#angled-line'),
                subtitle = select('p');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            const invertedBackgroundColor = adjustColor(templateInfo.style.backgroundColor[i], {lightDarkAmount: '10%', invert: true});

            logoAccent.style.fill = templateInfo.style.primaryColor[i];
            background.style.fill = templateInfo.style.backgroundColor[i];
            backgroundPattern.style.fill = invertedBackgroundColor;
            line.style.stroke = templateInfo.style.textColor[i];
            subtitle.style.fill = templateInfo.style.textColor[i];

            return resolve();
                
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while loading its styles`, error});
        }
    });
}

// Sets the templates Text
const setTemplateText = () => {
    return new Promise((resolve, reject) => {
        try {
            const p = select('p');
            const i = templateInfo.text.subtitle[index] ? index : 0;
            p.textContent = templateInfo.text.subtitle[i];
            return resolve();
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue setting its text`, error});
        }
    });
}

// Creates and adds all the nessecary medai assets to the template
const setTemplateAssets = () => {
    return new Promise((resolve, reject) => {
        const arr = addAssetSources(['.background-image', '.logo'], [...templateInfo.asset.backgroundImage, ...templateInfo.asset.logo]);
        Promise.all(arr).then(resolve).catch(error => reject(error));
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]});

            templateInfo.playoutInfo.duration !== undefined 
                ? logoPush.duration(templateInfo.playoutInfo.duration + 5)
                : logoPush.yoyo(true).repeat(-1);

            tl.set(['.background', '.logo', '.logo-accent', 'p'], {x: -1920})
                .set(selectAll('.line'), {strokeDasharray: '0 100', strokeDashoffset: '0'})
                .set('.logo-reveal-one', {opacity: 1});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });  
}

// Animates the template in - Caspar cgPlay was called
const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.subtitle[index - 1]}]});
            logoPush.play();
            loopingLines.play();
            tl.staggerTo(['.logo-accent', '.background'], 2, {x: 0, ease: Power3.easeInOut}, {each: .15})
                .staggerTo(['.logo', 'p'], 2, {x: 0, ease: Power2.easeInOut}, {each: .1}, .15)
                .to('.lines', 1, {opacity: 1}, .5)
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING IN.`, error});
        }
    });
}

// Retrun a promise cahin of all functions needed to advance the template
// Caspar cgNext was called
const advanceTemplate = () => {
    return new Promise((resolve, reject) => {
        return reject({message: 'Logo Reveal 1 does not have a adavance faature but, check back soon!'});
    });
}

// Animates the template out - Caspar cgStop was called
const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]});

            tl.to('.lines', 1, {opacity: 0})
                .staggerTo(['.logo', 'p'], 2, {x: 1920, ease: Power2.easeInOut}, {each: .1, from: 'end'}, 0)
                .staggerTo(['.logo-accent', '.background'], 2, {x: 1920, ease: Power3.easeInOut}, {each: .15, from: 'end'}, .15)
                .addCallback(() => {
                    loopingLines.paused(true);
                    logoPush.restart().paused(true);
                });
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING OUT.`, error});
        }
    });
}