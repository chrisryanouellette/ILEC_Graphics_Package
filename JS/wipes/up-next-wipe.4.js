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
    return Promise.all([setTemplateStyles(), setTemplateText(), setTemplateAssets()])
    .then(() => {
        index = index + 3
        return true;
    });
}

// Sets the templates styles
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const backgroundColorRect = select('.background-color-rect'),
                backgroundGradient = selectAll('#linear-gradient stop'),
                wipeAccent = select('.wipe-accent'),
                border = select('.border'),
                container = select('.con');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            backgroundColorRect.style.fill = adjustColor(templateInfo.style.primaryColor[i], {opacity: .8});
            backgroundGradient[0].style.stopColor = templateInfo.style.secondaryColor[i];
            backgroundGradient[1].style.stopColor = templateInfo.style.secondaryColor[i];
            wipeAccent.style.fill = templateInfo.style.backgroundColor 
                ? templateInfo.style.backgroundColor[i]
                : templateInfo.style.secondaryColor[i];
            border.style.stroke = templateInfo.style.textColor[i];
            container.style.color = templateInfo.style.textColor[i];

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
                h2 = select('h2'),
                p = select('p');

            const {multiplier} = getTemplateElementSpread(index, templateInfo.asset.comingUpVideo.length, 3, null, {});

            h1.textContent = templateInfo.text.day[multiplier] 
                ? templateInfo.text.day[multiplier] 
                : 'NEXT';
            h2.textContent = templateInfo.text.title[multiplier];
            p.textContent = templateInfo.text.subtitle[multiplier];

            return resolve();
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue setting its text`, error});
        }
    });
}

// Creates and adds all the nessecary medai assets to the template
const setTemplateAssets = () => {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < templateInfo.asset.comingUpVideo.length; i++) {
            const video = document.createElement('video');
            video.style.display = 'none';
            select('.video-con').append(video);
        }

        const arr = addAssetSources(selectAll('video'), templateInfo.asset.comingUpVideo);
        arr.push(...addAssetSources([select('.logo'), select('image')], [templateInfo.asset.eventLogo[0], templateInfo.asset.backgroundImage[0]]));
        Promise.all(arr).then(resolve).catch(error => reject(error));
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]});

            const {startingIndex, endingIndex} = getTemplateElementSpread(index - 3, templateInfo.asset.comingUpVideo.length, 3, null, {});
            const videos = [...selectAll('video')].filter((vid, i) => {
                if(i >=startingIndex && i < endingIndex) return true;
                return false; 
            });

            if(videos.length === 3) {
                tl.set([videos[0], videos[2]], {scale: .9})
                    .set(videos[0], {x: 100})
                    .set(videos[2], {x: -100})
                    .set(videos[1], {zIndex: 1})
            } else if(videos.length === 2) {
                tl.set(videos, {margin: '0 1em'})
            }

            tl.set(['.main-mask-rect', '.wipe-accent'], {scaleY: 0})
                .set('use.angled-background-rect', {rotation: -45})
                .set(selectAll('video'), {display: 'none'})
                .set(videos, {display: 'block', y: 1000})
                .set('.text-con', {y: 200, overflow: 'visible'})
                .set(['h1', 'h2', 'p'], {y: 1920, scale: .5})
                .set('.logo', {y: -250})
                .set('.up-next-wipe-four', {opacity: 1})
            
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

            const {startingIndex, endingIndex} = getTemplateElementSpread(index - 3, templateInfo.asset.comingUpVideo.length, 3, null, {});
            const videos = [...selectAll('video')].filter((vid, i) => {
                if(i >=startingIndex && i < endingIndex) return true;
                return false; 
            });

            updateTemplateDuration(videos, 3);

            tl.to('.wipe-accent', 2, {scaleY: 1, ease: Power2.easeOut})
                .to('.main-mask-rect', 1.75, {scaleY: 1, ease: Power2.easeOut}, .25)
                .staggerTo(['h1', 'h2', 'p'], 2, {y: 0, scale: 1, ease: Power2.easeOut}, {each: .15}, .5)
                .staggerTo(videos, 2, {y: 0, ease: Power2.easeOut}, {each: .15, from: 'center'}, 2)
                .to('.text-con', 1, {y: 0, ease: Power1.easeInOut}, 2.5)
        } catch (error) {
            
        }
    });
}

// Retrun a promise cahin of all functions needed to advance the template
// Caspar cgNext was called
const advanceTemplate = () => {
    return new Promise((resolve, reject) => {
        if(index > templateInfo.asset.comingUpVideo.length - 1) 
            return reject({message: `${templateInfo.name} is out of titles to show.`});
        logInfo({level: 0, status: 'advancing', 
            message: `${templateInfo.name} is ADVANCING to show ${templateInfo.text.title[index]} ${index + 1} of ${templateInfo.text.title.length}`
        });
        return animateTemplateOut()
            .then(setTemplateText)
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
            let startingIndex = -1
            const visibleVideos = [...selectAll('video')].filter((item, i) => {
                if(item.style.display === 'block' && startingIndex === -1) startingIndex = i;
                return item.style.display === 'block';
            });
            const {endingIndex} = getTemplateElementSpread(startingIndex, templateInfo.asset.comingUpVideo.length, 3, null, {});
            const width = getElementStyleProp(selectAll('video')[startingIndex], 'width', null);
            const videos = [...selectAll('video')].filter((vid, i) => {
                if(i >=startingIndex && i < endingIndex) return true;
                return false; 
            });

            tl.set('.text-con', {overflow: 'hidden'})
                .staggerTo(['h1', 'h2', 'p'], 1, {y: -250, scale: 1, ease: Power2.easeIn}, {each: .15})
                .to([selectAll('.square'), '.loading-bar-fill'], 1, {opacity: 0}, 0);

            if(visibleVideos.length === 3) {
                tl.to(videos[0], 1, {x: width, ease: Power2.easeInOut}, 0)
                    .to(videos[2], 1, {x: -width, ease: Power2.easeInOut}, 0)
                    .to('.video-con', 1, {y: 1000, ease: Power2.easeIn}, .25);
            } else {
                tl.to(videos, 1, {y: 1000, ease: Power2.easeIn}, 0);
            }
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
            const {startingIndex, endingIndex} = getTemplateElementSpread(index, templateInfo.asset.comingUpVideo.length, 3, null, {});
            const videos = [...selectAll('video')].filter((vid, i) => {
                if(i >=startingIndex && i < endingIndex) return true;
                return false; 
            });
            tl.set('.video-con', {y: 0})
                .set(selectAll('video'), {display: 'none'})
                .set(videos, {display: 'block', y: 1000, x: 0})
                .set('.text-con', {y: 200, overflow: 'visible'})
                .set(['h1', 'h2', 'p'], {y: 1920, scale: .5})

            if(videos.length === 3) {
                tl.set([videos[0], videos[2]], {scale: .9})
                    .set(videos[0], {x: 100})
                    .set(videos[2], {x: -100})
                    .set(videos[1], {zIndex: 1})
            } else if(videos.length === 2) {
                tl.set(videos, {margin: '0 1em'})
            }

            tl.addCallback(() => {
                const videos = selectAll('video');
                for(let i = startingIndex; i < endingIndex; i++) {
                    videos[i].pause();
                    videos[i].currentTime = 0;
                }
            });
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
            const {startingIndex, endingIndex} = getTemplateElementSpread(index, templateInfo.asset.comingUpVideo.length, 3, null, {});
            const videos = [...selectAll('video')].filter((vid, i) => {
                if(i >=startingIndex && i < endingIndex) return true;
                return false; 
            });

            updateTemplateDuration(videos, 3);
            tl.staggerTo(['h1', 'h2', 'p'], 2, {y: 0, scale: 1, ease: Power2.easeOut}, {each: .15})
                .staggerTo(videos, 2, {y: 0, ease: Power2.easeOut}, {each: .15, from: 'center'}, 2)
                .to('.text-con', 1, {y: 0, ease: Power1.easeInOut}, 2.5)
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

            const {startingIndex, endingIndex} = getTemplateElementSpread(index - 3, templateInfo.asset.comingUpVideo.length, 3, null, {});
            const videos = [...selectAll('video')].filter((vid, i) => {
                if(i >=startingIndex && i < endingIndex) return true;
                return false; 
            });

            tl.set('.text-con', {overflow: 'hidden'})
                .staggerTo(videos, 1, {y: 1000, ease: Power2.easeIn}, {each: .15, from: 'center'})
                .staggerTo(['h1', 'h2', 'p'], 1, {y: -250, scale: 1, ease: Power2.easeIn}, {each: .15}, 0)
                .to('.main-mask-rect', 1, {scaleY: 0, ease: Power2.easeInOut}, .5)
                .to('.wipe-accent', .75, {scaleY: 0, ease: Power2.easeInOut}, .75);
                

            tl.addCallback(() => {
                loopingSlider.pause();
                loopingDots.pause();
                movingBkg.pause();
                const videos = selectAll('video');
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
        index = 0;
        return setTemplateText()
        .then(() => {
            index = index + 3;
            return true;
        })
        .then(setTemplateElements())
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