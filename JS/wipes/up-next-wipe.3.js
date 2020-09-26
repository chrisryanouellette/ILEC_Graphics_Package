'use strict';

// Enviorment for the graphic
const ENV = 'DEV';
// The index of data to show
let index = 0;

const loopingSlider = new TimelineMax({repeat: -1, paused: true})
    .to('.slider-fill', 2, {y: '+=62', ease: Power2.easeInOut})
    .to('.slider-fill', 2, {y: '-=62', ease: Power2.easeInOut});

const loadingBar = new TimelineMax({paused: true})
    .set('#loading-bar-mask path', {x: 0})
    .set('.loading-bar-fill', {opacity: 1})
    .to('#loading-bar-mask path', 10, {x: 160});

const loopingSquares = new TimelineMax({paused: true})
    .set(selectAll('.square'), {opacity: 1, strokeDasharray: '0 150'})
    .staggerTo(selectAll('.square'), 10, {strokeDasharray: '150 150'}, .15);


const loopingDots = new TimelineMax({paused: true, repeat: -1})
    .staggerFromTo(selectAll('.progress-dots circle:not(.placeholder)'), 5,
        {attr: {cy: '110%'}}, 
        {attr: {cy: '-10%'}, ease: SlowMo.ease.config(.5, .5, false)}, 
        {each: .5});

const movingBkg = new TimelineMax({yoyo: true, repeat: -1, paused: true})
    .to('.angled-background-rect', 10, {x: '-=200', ease: Power2.easeInOut});

// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    //setTemplateStyles(), setTemplateText(), setTemplateAssets()
    return setTemplateText()
    .then(() => Promise.all([setTemplateStyles(), setTemplateAssets()]))
    .then(() => {
        index = index + 3;
        return true;
    });
}

// Sets the templates styles
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const backgroundRect = select('.background-rect'),
                border = select('.border'),
                backgroundColorRect = select('.background-color-rect'),
                wipeAccent = select('.wipe-accent'),
                container = select('.con'),
                items = selectAll('.item');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            backgroundRect.style.fill = templateInfo.style.backgroundColor[i];
            border.style.stroke = templateInfo.style.textColor[i];
            backgroundColorRect.style.fill = adjustColor(templateInfo.style.primaryColor[i], {opacity: .5});
            container.style.color = templateInfo.style.textColor[i];
            wipeAccent.style.fill = templateInfo.style.secondaryColor 
                ? templateInfo.style.secondaryColor[i]
                : templateInfo.style.secondaryColor[i];

            items.forEach(item => item.querySelector('.video-con').style.borderBottom = `5px solid ${templateInfo.style.secondaryColor[i]}`)

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
            const h1 = select('h1'),
                content = select('.content');

            const {multiplier} = getTemplateElementSpread(index, templateInfo.text.title.length, 3, null, {});
            
            content.children.length && content.children.forEach(item => content.removeChild(item));
            h1.textContent = templateInfo.text.day[multiplier];

            for(let i = 0; i < templateInfo.text.title.length; i++) {
                const item = document.createElement('div'),
                    videoCon = document.createElement('div'),
                    h2 = document.createElement('h2'),
                    p = document.createElement('p');
                
                item.classList.add('item');
                item.style.display = 'none';

                videoCon.classList.add('video-con');

                h2.textContent = templateInfo.text.title[i];
                p.textContent = templateInfo.text.time[i];

                item.appendChild(videoCon);
                item.appendChild(p);
                item.appendChild(h2);

                content.appendChild(item);
            }

            return resolve();
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue setting its text`, error});
        }
    });
}

// Creates and adds all the nessecary medai assets to the template
const setTemplateAssets = () => {
    return new Promise((resolve, reject) => {
        const content = select('.content');

        for(let i = 0; i < templateInfo.asset.comingUpVideo.length; i++) {
            const video = document.createElement('video');
            content.children[i].querySelector('.video-con').appendChild(video);
        }
        
        const arr = addAssetSources(selectAll('video'), templateInfo.asset.comingUpVideo);
        Promise.all(arr).then(resolve).catch(error => reject(error));
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]});
            const {startingIndex, endingIndex} = getTemplateElementSpread(index - 3, templateInfo.text.title.length, 3, null, {});

            const items = selectAll('.item');
            items.forEach((item, i) => {
                if(i >= startingIndex && i < endingIndex) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            tl.set(['.background', '.wipe-accent', '.con'], {x: 1920})
                .set(selectAll('.video-con'), {x: 300})
                .set('h1', {y: '10vh'})
                .set('.logo', {y: -250})
                .set('use.angled-background-rect', {rotation: -45})
                .set([selectAll('p'), selectAll('h2')], {x: 100, opacity: 0})
                .set('.up-next-wipe-three', {opacity: 1});

        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });  
}

const updateTemplateDuration = (videos, adjustment) => {
    if(adjustment === undefined) adjustment = 0
    
    let duration = templateInfo.playoutInfo.duration;

    if(templateInfo.playoutInfo.autoComplete) {
        if(duration !== undefined) {
            videos.forEach(video => video.loop = true);
            loadingBar.duration(duration + 2);
            loopingSquares.duration(duration + 2);
        } else {
            templateInfo.playoutInfo.duration = videos[index - 1].duration - adjustment;
            duration = templateInfo.playoutInfo.duration;
            loadingBar.duration(duration + adjustment + 3);
            loopingSquares.duration(duration);                   
        }
    } else {
        videos.forEach(video => video.loop = true);
    }

    videos.forEach(vid => vid.play());
    loopingSlider.play();
    loadingBar.restart();
    loopingSquares.restart();
    loadingBar.play();
    loopingSquares.play();
    loopingDots.play();
    movingBkg.play();
}

// Animates the template in - Caspar cgPlay was called
const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index - 3]}]});

            const {startingIndex, endingIndex} = getTemplateElementSpread(index - 3, templateInfo.text.title.length, 3, null, {});
            const videos = [...selectAll('video')].filter((vid, i) => {
                if(i >=startingIndex && i < endingIndex) return true;
                return false; 
            });
            updateTemplateDuration(videos, 3);

            tl.to('.wipe-accent', 2, {x: 0, ease: Power2.easeOut})
                .to(['.background', '.con'], 1.75, {x: 0, ease: Power2.easeOut}, .25)
                .staggerTo(selectAll('.video-con'), 2, {x: 0, opacity: 1, ease: Power2.easeOut}, {each: .25}, 0)
                .to('h1', 1, {y: 0, ease: Power2.easeOut}, 1)
                .to('.logo', 2, {y: 0, ease: Power2.easeOut}, 1);

            for(let i = startingIndex; i < endingIndex; i++) {
                tl.staggerTo([selectAll('p')[i], selectAll('h2')[i]], 2, {x: 0, opacity: 1, ease: Power2.easeOut}, {each: .1}, 0)
            }

        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING IN.`, error});
        }
    });
}

// Retrun a promise cahin of all functions needed to advance the template
// Caspar cgNext was called
const advanceTemplate = () => {
    return new Promise((resolve, reject) => {
        if(index > templateInfo.text.title.length - 1) 
            return reject({message: `${templateInfo.name} is out of titles to show.`});
        logInfo({level: 0, status: 'advancing', 
            message: `${templateInfo.name} is ADVANCING to show ${templateInfo.text.title[index]} ${index + 1} of ${templateInfo.text.title.length}`
        });
        return animateTemplateOut()
            .then(resetTemplateElements)
            .then(animateTemplateIn)
            .then((res) => {
                index = index + 3;
                return res;
            })
            .then(res => resolve(res))
            .catch(error => reject({message: `${templateInfo.name} had an issue while advancing`, error}));
    });
}

// First function in animating the template to it's next state
const animateTemplateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve});
            const startingIndex = [...selectAll('.item')].findIndex(item => item.style.display === 'block');
            const {endingIndex} = getTemplateElementSpread(startingIndex, templateInfo.text.title.length, 3, null, {});
            tl.to('h1', 1, {y: 100, ease: Power2.easeIn})
                .staggerTo(selectAll('.video-con'), 1, {x: -200, opacity: 0, ease: Power2.easeIn}, {each: .1}, 0)
                .to([selectAll('.square'), '.loading-bar-fill'], 1, {opacity: 0}, 0)
            
            for(let i = startingIndex; i < endingIndex; i++) {
                tl.staggerTo([selectAll('p')[i], selectAll('h2')[i]], 1, {x: -200, opacity: 0, ease: Power2.easeIn}, {each: .1}, 0)
            }

            tl.addCallback(() => {
                const videos = selectAll('video');
                for(let i = startingIndex; i < endingIndex; i++) {
                    videos[i].pause();
                    videos[i].currentTime = 0;
                }
            });
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (Out)`, error});
        }
    });
}

// Function that resets the positions of the elements in the midle of an Advance chain
const resetTemplateElements = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve});
            const {startingIndex, endingIndex, multiplier} = getTemplateElementSpread(index, templateInfo.text.title.length, 3, null, {});
            const items = selectAll('.item');
            const h1 = select('h1');

            h1.textContent = templateInfo.text.day[multiplier];

            tl.set(selectAll('.video-con'), {x: 300})
            .set('h1', {y: '10vh'})
            .set([selectAll('p'), selectAll('h2')], {x: 100, opacity: 0});

            for(let i = 0; i < templateInfo.text.title.length; i++) {
                if(i >= startingIndex && i < endingIndex) {
                    tl.set(items[i], {display: 'block'});
                } else {
                    tl.set(items[i], {display: 'none'});
                }
            }
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error resetting template elements.`, error});
        }
    });
}

// Last function in animating the template to it's next state
const animateTemplateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index]}]});
            const {startingIndex, endingIndex} = getTemplateElementSpread(index, templateInfo.text.title.length, 3, null, {});
            const vidCons = [...selectAll('.video-con')].filter((vid, i) => i >= startingIndex && i < endingIndex);
            const videos = [...selectAll('video')].filter((vid, i) => {
                if(i >=startingIndex && i < endingIndex) return true;
                return false; 
            });
            updateTemplateDuration(videos, 2);

            tl.staggerTo(vidCons, 2, {x: 0, opacity: 1, ease: Power2.easeOut}, {each: .25}, 0)
                .to('h1', 1, {y: 0, ease: Power2.easeOut}, 0);

            for(let i = startingIndex; i < endingIndex; i++) {
                tl.staggerTo([selectAll('p')[i], selectAll('h2')[i]], 2, {x: 0, opacity: 1, ease: Power2.easeOut}, {each: .1}, 0)
            }
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (In)`, error});
        }
    });
}

// Animates the template out - Caspar cgStop was called
const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index - 3]}]});
            const {startingIndex, endingIndex} = getTemplateElementSpread(index - 3, templateInfo.text.title.length, 3, null, {});
            tl.to('.logo', 1, {y: -250, ease: Power2.easeIn})
                .to('h1', 1, {y: 100, ease: Power2.easeIn}, 0)
                .staggerTo(selectAll('.video-con'), 1, {x: -200, opacity: 0, ease: Power2.easeIn}, {each: .1}, 0)
                .to(['.background', '.con'], 1.5, {x: 1920, ease: Power2.easeIn}, .5)
                .to('.wipe-accent', 1.5, {x: 1920, ease: Power2.easeIn}, .6)

            for(let i = startingIndex; i < endingIndex; i++) {
                tl.staggerTo([selectAll('p')[i], selectAll('h2')[i]], 1, {x: -200, opacity: 0, ease: Power2.easeIn}, {each: .1}, 0)
            }

            tl.addCallback(() => {
                const videos = selectAll('video');
                loopingSlider.pause();
                loopingDots.pause();
                movingBkg.pause();
                videos.forEach(vid => {
                    vid.pause();
                    vid.currentTime = 0;
                });
            });
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING OUT.`, error});
        }
    });
}

// Custom Command - Reset - Resets the tag to the first one given on load
function reset() {
    if(templateInfo.text.title.length <= 1) 
        return logError({level: 0, error: `${templateInfo.name} does not have more than one title`});
    if(tlprogress === 2) {
        index = 0;
        return next();
    } else if(index > 3) {
        index = 3;
        return setTemplateElements()
            .then(() => {
                logInfo({
                    level: 0, 
                    message: `${templateInfo.name} has reset and is now showing ${templateInfo.text.title[index - 1]} [${index} of ${templateInfo.text.title.length}]`
                });
            });
    } else {
        return logError({level: 0, error: `${templateInfo.name} is already showing it's first videos`});
    }
}

// Custom Command - Previous Tag - Goes to the previous name if possible
function previousVideo() {
    if(index > 3) {
        index = index - 6;
        tlprogress = 2;
        return next();
    } else if(templateInfo.text.title.length === 1) {
        return logError({level: 0, error: `${templateInfo.name} only has 1 title`});
    } else {
        return logError({level: 0, error: `${templateInfo.name} can not go back 1 title`});
    }
}

// Custom Command - Next Tag - Goes to the next name if possible
function nextVideo() {
    return next();
}