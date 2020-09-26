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
        {attr: {cx: '-10%'}}, 
        {attr: {cx: '110%'}, ease: SlowMo.ease.config(.5, .5, false)}, 
        {each: .5});

const movingBkg = new TimelineMax({yoyo: true, repeat: -1, paused: true})
    .to('.angled-background-rect', 10, {x: '-=200', ease: Power2.easeInOut});
    
    

// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    return Promise.all([setTemplateStyles(), setTemplateText(), setTemplateAssets()])
    .then(() => {
        index++;
        return true;
    });
}

// Sets the templates styles
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const h1 = select('h1'),
                h2 = select('h2'),
                p = select('p'),
                titleRect = select('.title-rect'),
                videoRect = select('.main-video-wipe-bkg'),
                backgroundRect = select('.background-color-rect');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            h1.style.color = templateInfo.style.textColor[i];
            h2.style.color = templateInfo.style.textColor[i];
            p.style.color = templateInfo.style.textColor[i];

            titleRect.style.fill = templateInfo.style.primaryColor[i];
            videoRect.style.fill = templateInfo.style.primaryColor[i];
            backgroundRect.style.fill = adjustColor(templateInfo.style.backgroundColor[i], {opacity: .75});

            return resolve();
        } catch(error) {
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

            h1.textContent = templateInfo.text.title[index];
            h2.textContent = templateInfo.text.day[index];
            p.textContent = templateInfo.text.time[index];

            return resolve();
        } catch(error) {
            return reject({message: `${templateInfo.name} had an issue setting its text`, error});
        }
    })
    
}

// Creates and adds all the nessecary medai assets to the template
const setTemplateAssets = () => {
    return new Promise((resolve, reject) => {
        const length = templateInfo.asset.comingUpVideo.length * 2;
        const main = select('.up-next-one');

        for(let i = 0; i < length; i++) {
            const video = document.createElement('video');
            if(i % 2 === 0) {
                if(i === 0) {
                    video.style.opacity = 1;
                } else {
                    video.style.opacity = 0;
                } 
                video.classList = 'abs background-video';
                main.insertBefore(video, select('.up-next-one > svg'));
            } else {
                if(i === 1) {
                    video.style.opacity = 1;
                    video.style.clipPath = 'url(#main-video-clip)';
                } else {
                    video.style.opacity = 0;
                }
                video.classList = 'abs main-video' 
                main.insertBefore(video, select('.up-next-one .text-con'));
            }
        }
        
        const arr = addAssetSources(selectAll('video'), [...templateInfo.asset.backgroundVideo, ...templateInfo.asset.comingUpVideo]);
        arr.push(...addAssetSources(select('.logo'), templateInfo.asset.eventLogo[0]))
        
        Promise.all(arr).then(resolve).catch(error => reject(error));
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]});
            const videos = [...selectAll('.main-video')];
            const currentVideo = videos[index - 1];
            const hiddenVideos = videos.filter((vid, i) => i !== index - 1)
            const width = getElementStyleProp('.text-con', ['width', 'padding'], {width: true, height: false});

            tl.set([selectAll('svg svg'), '.background-svg-group', '.background-video'], {opacity: 0})
                .set([selectAll('.main-video-wipe-bkg use'), selectAll('#main-video-clip use')], 
                    {x: -1920, opacity: 1})
                .set('use.angled-background-rect', {rotation: -45})
                .set(['.slider', '.loading-bar'], {x: -500})
                .set(currentVideo, {scale: 1, borderRadius: 0, x: 0, opacity: 1})
                .addCallback(() => currentVideo.style.clipPath = 'url(#main-video-clip)')
                .set(hiddenVideos, {scale: .5, x: 350, borderRadius: '25px', opacity: 0})
                .set(['h1', 'h2', 'p', '.title-rect'], {x: -width})
                .set('.logo', {y: '-20vh'})
                .set('.up-next-one', {opacity: 1});

        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const updateTemplateDuration = (adjustment) => {
    if(adjustment === undefined) adjustment = 0
    const videos = selectAll('.main-video'),
        backgroundVideos = selectAll('.background-video');
    
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

    backgroundVideos.forEach(video => video.loop = true);

    videos[index - 1].play();
    backgroundVideos[index - 1].play();
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
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index - 1]}]})
            const video = selectAll('.main-video')[index - 1];

            updateTemplateDuration(5);

            tl.staggerTo([
                select('.main-video-wipe-bkg use:nth-of-type(2)'), 
                select('#main-video-clip use:nth-of-type(2)')], 2, {x: 0, ease: Power3.easeOut}, .15)
                .staggerTo([
                    select('.main-video-wipe-bkg use:nth-of-type(1)'), 
                    select('#main-video-clip use:nth-of-type(1)')], 1.85, {x: 0, ease: Power3.easeOut}, .15, .15)
                .staggerTo([
                    select('.main-video-wipe-bkg use:nth-of-type(3)'), 
                    select('#main-video-clip use:nth-of-type(3)')], 1.75, {x: 0, ease: Power3.easeOut}, .15, .25)
                .to(['.slider', '.loading-bar'], 1, {x: 0, ease: Power2.easeOut}, .5)
                .addCallback(() => video.style.clipPath = 'none', 2)
                .set('.main-video-wipe-bkg', {opacity: 0}, 2)
                .set([selectAll('svg svg'), '.background-svg-group', selectAll('.background-video')[index - 1]], {opacity: 1}, 2)
                .to('.logo', 1.5, {y: 0, ease: Power2.easeOut}, 2)
                .to(video, .75, {scale: .5, borderRadius: '25px'}, 2)
                .to(video, 1, {x: '+=350', ease: Power2.easeInOut}, 2.5)
                .staggerTo(['h1', 'h2', 'p'], 1, {x: 0, ease: Power2.easeOut}, {each: .1}, 2.75)
                .to('.title-rect', 1, {x: 0, ease: Power2.easeOut}, 2.75)

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
            return reject({message: `${templateInfo.name} is out of names to show.`});
        logInfo({level: 0, status: 'advancing', 
            message: `${templateInfo.name} is ADVANCING to show ${templateInfo.text.title[index]} ${index + 1} of ${templateInfo.text.title.length}`
        });
        return animateTemplateOut()
            .then(setTemplateText)
            .then(setTemplateStyles)
            .then(() => {
                index++;
                return true;
            })
            .then(resetTemplateElements)
            .then(animateTemplateIn)
            .then(res => resolve(res))
            .catch(error => reject({message: `${templateInfo.name} had an issue while advancing`, error}));
    });
}

// First function in animating the template to it's next state
const animateTemplateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve});
            const height = getElementStyleProp('.text-con', 'height', null),
                width = getElementStyleProp('.text-con', ['width', 'padding'], {width: true, height: false});

            const videos = [...selectAll('.main-video')];

            const currentVideoIndex = videos.findIndex(vid => vid.style.opacity == 1);

            tl.addCallback(() => videos[currentVideoIndex].style.clipPath = 'url(#scaled-video-clip)')
                .staggerTo(['h1', 'h2', 'p'], .75, {y: -height, ease: Power2.easeIn}, {each: .1})
                .to('.title-rect', 1, {x: -width, ease: Power2.easeIn}, 0)
                .to('#scaled-video-clip rect', 1, {y: '-100%'}, 0)
                .to([selectAll('.square'), '.loading-bar-fill'], 1, {opacity: 0}, 0)
                
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

            const height = getElementStyleProp('.text-con', 'height', null);

            const videos = [...selectAll('.main-video')],   
                backgroundVideos = [...selectAll('.background-video')];

            const previousVideoIndex = videos.findIndex(vid => vid.style.opacity == 1),
                previousBkgVideoIndex = backgroundVideos.findIndex(vid => vid.style.zIndex == 0);

            videos.forEach(vid => vid.style.opacity = 0);
            videos[index - 1].style.opacity = 1;
            videos[index - 1].classList.remove('hidden'); 
            videos[previousVideoIndex].style.clipPath = 'none';
            videos[previousVideoIndex].pause();
            videos[previousVideoIndex].currentTime = 0;
            videos[index - 1].style.clipPath = 'url(#scaled-video-clip)';
            backgroundVideos[index - 1].style.zIndex = 0;
            backgroundVideos[previousBkgVideoIndex].style.zIndex = -1;
            tl.set(['h1', 'h2', 'p'], {y: height})
                .set('#scaled-video-clip rect', {y: '100%'});
                
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error resetting template elements.`, error});
        } 
    });
}

// Last function in animating the template to it's next state
const animateTemplateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index - 1]}]});
            const currentVideo = selectAll('.main-video')[index - 1],
                currentBkgVideo = selectAll('.background-video')[index - 1];

            updateTemplateDuration(2);

            tl.set(currentVideo, {opacity: 1})
                .staggerTo(['h1', 'h2', 'p'], .75, {y: 0, ease: Power2.easeOut}, {each: .1})
                .to(currentBkgVideo, 1, {opacity: 1})
                .to('.title-rect', 1, {x: 0, ease: Power2.easeOut}, 0)
                .to('#scaled-video-clip rect', 1, {y: '0%'}, 0)
                .addCallback(() => {
                    currentVideo.style.clipPath = 'none';
                    selectAll('.background-video').forEach((vid, i) => {
                        if(i === index - 1) return;
                        vid.style.opacity = 0;
                        vid.pause();
                        vid.currentTime = 0;
                    });
                });
                
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (In)`, error});
        }
    })
    
}

// Animates the template out - Caspar cgStop was called
const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]});
            const width = getElementStyleProp('.text-con', ['width', 'padding'], {width: true, height: false});
            const video = selectAll('.main-video')[index - 1];
            
            tl.staggerTo(['h1', 'h2', 'p'], 1, {x: -width, ease: Power2.easeOut}, {each: .1})
                .to('.title-rect', 1, {x: -width, ease: Power2.easeOut}, 0)
                .to('.logo', 1, {y: '-20vh'}, 0)
                .to(video, 1, {x: 0, ease: Power2.easeInOut}, 0)
                .to(video, .75, {scale: 1, borderRadius: 0}, .75)
                .set([selectAll('svg svg'), '.background-svg-group', selectAll('.background-video')], {opacity: 0})
                .set('.main-video-wipe-bkg', {opacity: 1})
                .staggerTo([
                    select('#main-video-clip use:nth-of-type(2)'), 
                    select('.main-video-wipe-bkg use:nth-of-type(2)')], 2, {x: 1920, ease: Power3.easeIn}, .15,  1.75)
                .staggerTo([
                    select('#main-video-clip use:nth-of-type(1)'), 
                    select('.main-video-wipe-bkg use:nth-of-type(1)')], 1.85, {x: 1920, ease: Power3.easeIn}, .15, 1.75)
                .staggerTo([
                    select('#main-video-clip use:nth-of-type(3)'), 
                    select('.main-video-wipe-bkg use:nth-of-type(3)')], 1.75, {x: 1920, ease: Power3.easeIn}, .15, 1.75)
                .addCallback(() => video.style.clipPath = 'url(#main-video-clip)', 1.9)
                .addCallback(() => {
                    loopingSlider.pause();
                    loadingBar.pause();
                    loopingSquares.pause();
                    loopingDots.pause();
                    movingBkg.pause();
                    selectAll('.main-video').forEach(vid => {
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
    index = 0;
    if(tlprogress === 2) {
        return next();
    } else {
        return setTemplateText()
            .then(setTemplateStyles)
            .then(() => {
                index++;
                return true;
            })
            .then(setTemplateElements)
            .then(() => {
                logInfo({
                    level: 0, 
                    message: `${templateInfo.name} has reset and is now showing ${templateInfo.text.title[index - 1]} [${index} of ${templateInfo.text.title.length}]`
                });
            });
    }
}

// Custom Command - Previous Tag - Goes to the previous name if possible
function previousVideo() {
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
function nextVideo() {
    return next();
}