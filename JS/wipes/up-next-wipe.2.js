'use strict';

// Enviorment for the graphic
const ENV = 'DEV';
// The index of data to show
let index = 0;

const loopingSlider = new TimelineMax({repeat: -1, paused: true})
    .to('.slider-fill', 2, {y: '+=62', ease: Power2.easeInOut})
    .to('.slider-fill', 2, {y: '-=62', ease: Power2.easeInOut});

const loopingDots = new TimelineMax({paused: true, repeat: -1})
    .staggerFromTo(selectAll('.progress-dots circle:not(.placeholder)'), 5,
        {attr: {cy: '110%'}}, 
        {attr: {cy: '-10%'}, ease: SlowMo.ease.config(.5, .5, false)}, 
        {each: .5});


// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    //setTemplateStyles(), setTemplateText(), setTemplateAssets()
    return Promise.all([setTemplateStyles(),setTemplateText(), setTemplateAssets()])
    .then(() => {
        index++;
        return true;
    });
}

// Sets the templates styles
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const wipe = select('.up-next-two'),
                nextP = select('.next-con p'),
                videoAccent = select('.video-accent'),
                nextBackground = select('.next-con'),
                background = select('.background-rect');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            wipe.style.color = templateInfo.style.textColor[i];
            videoAccent.style.fill = templateInfo.style.backgroundColor[i];
            nextBackground.style.backgroundColor = templateInfo.style.textColor[i];
            nextP.style.color = adjustColor(templateInfo.style.textColor[i], {invert: true, lightDarkAmount: '30%'})
            background.style.fill = templateInfo.style.primaryColor[i];

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
            const textCon = select('.text-con'),
                divs = selectAll('.text-con div');

            const {startingIndex, endingIndex} = getTemplateElementSpread(index, templateInfo.text.title.length, 3, null, {});

            divs.forEach(div => textCon.removeChild(div));

            for(let i = startingIndex; i < endingIndex; i++) {
                const div = document.createElement('div'),
                    h1 = document.createElement('h1'),
                    p = document.createElement('p');

                div.id = i;
                div.style.opacity = 0;

                h1.textContent = templateInfo.text.title[i];
                p.textContent = templateInfo.text.time[i];

                div.appendChild(p);
                div.appendChild(h1);
                textCon.appendChild(div);
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
        const main = select('.up-next-two');

        for(let i = 0; i < templateInfo.asset.comingUpVideo.length; i++) {
            const video = document.createElement('video');
            video.classList.add('abs');
            video.style.opacity = 0;
            main.insertBefore(video, select('img'));
        }

        const arr = addAssetSources(selectAll('video'), templateInfo.asset.comingUpVideo);
        arr.push(...addAssetSources(select('.logo'), templateInfo.asset.eventLogo[0]))
        
        Promise.all(arr).then(resolve).catch(error => reject(error));
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]});

            const i = (index > 3) ? index - ((index % 3) * 3) : index;

            const height = getElementStyleProp('.text-con', 'height', null),
                nextWidth = getElementStyleProp('.next-con', ['width', 'padding'], {width: true, height: false}),
                arrowPosition = (1920 / selectAll('.text-con div').length) * i - (1920 / selectAll('.text-con div').length / 2) - 100;

            //const arrowPosition = ((1920 / selectAll('.text-con div').length * i) - textConsPadding) / 2;
            const videos = [...selectAll('video')];
            const currentVideo = videos.splice(index - 1, 1);

            tl.set(selectAll('.text-con div'), {opacity: .5})
                .set(selectAll('.text-con div')[i - 1], {opacity: 1})
                .set([...selectAll('.text-con h1'), ...selectAll('.text-con p')], {y: height})
                .set('.arrow path', {x: arrowPosition, opacity: 0})
                .set('.progress-dots', {opacity: 0})
                .set('.background', {transformOrigin: 'center 100%', scaleY: 0})
                .set(currentVideo, {y: 1100, x:0, opacity: 1})
                .set(videos, {x: -1920})
                .set(['#main-video-clip rect', '.video-accent'], {y: 1080})
                .set('.next-con', {x: -nextWidth})
                .set('.next-con p', {x: nextWidth * 2})
                .set('.logo', {y: '-15vh'})
                .set('.up-next-two', {opacity: 1});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const updateTemplateDuration = (i, adjustment) => {
    if(adjustment === undefined) adjustment = 0
    const videos = selectAll('video');
    i = i !== null ? i : index - 1;
    
    let duration = templateInfo.playoutInfo.duration;

    if(templateInfo.playoutInfo.autoComplete) {
        if(duration !== undefined) {
            videos.forEach(video => video.loop = true);
        } else {
            templateInfo.playoutInfo.duration = videos[i].duration - adjustment;
            duration = templateInfo.playoutInfo.duration;               
        }
    } else {
        videos.forEach(video => video.loop = true);
    }

    videos[i].play();
    loopingSlider.play();
    loopingDots.play();
}

// Animates the template in - Caspar cgPlay was called
const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index - 1]}]})
            const video = selectAll('video')[index - 1];

            updateTemplateDuration(null, 4);

            tl.to('.video-accent', 2, {y: 0, ease: Power3.easeOut})
                .to([video, '#main-video-clip rect'], 1.75, {y: 0, ease: Power3.easeOut}, .25)
                .to('.background', 1, {scaleY: 1, ease: Power2.easeOut}, 0)
                .staggerTo([...selectAll('.text-con h1'), ...selectAll('.text-con p')], 1, {y: 0, ease: Power2.easeOut}, {each: .1}, .25)
                .to(['.arrow path', '.progress-dots'], 1, {opacity: 1}, .5)
                .staggerTo(['.next-con', '.next-con p'], 1, {x: 0, ease: Power3.easeOut}, {}, .5)
                .to('.logo', 1, {y: 0, ease: Power3.easeOut}, .5)
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
            .then(() => {
                let endingIndex = Number(selectAll('.text-con div')[0].id) + 3;
                if(endingIndex >= templateInfo.text.title.length) endingIndex = endingIndex - Math.abs(endingIndex - templateInfo.text.title.length)

                if(index === endingIndex || index < endingIndex - selectAll('.text-con div').length) {
                    return setTemplateText().then(resetTemplateElements)
                        .then(animateTemplateIn)
                }
                return {key: 'text', info: templateInfo.text.title[index]};
            })
            .then((res) => {
                index++;
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
            const {currentIndex, multiplier, elementTotal, shouldAdvance} = 
            getTemplateElementSpread(index, templateInfo.text.title.length, 3, Number(selectAll('.text-con div')[0].id) + 3, {
                elements: [...selectAll('.text-con div')],
                prop: 'opacity',
                value: 1
            });

            const currentVideo = selectAll('video')[currentIndex];
            const nextVideo = selectAll('video')[index];
            const divs = selectAll('.text-con div');

            let i = index + 1;
            i = (i > 3) ? i - (multiplier * 3) : i;
            
            const arrowPosition = (1920 / elementTotal) * i - (1920 / elementTotal / 2) - 100;
            
            if(!shouldAdvance) {
                updateTemplateDuration(index, 3);
                tl.set(nextVideo, {opacity: 1, zIndex: 0})
                    .set(currentVideo, {zIndex: -1})
                    .to('.arrow path', 1.5, {x: arrowPosition, ease: Power2.easeInOut})
                    .to(divs[currentIndex], 1, {opacity: .5}, .5)
                    .to(divs[i - 1], 1, {opacity: 1}, 1)
                    .to(nextVideo, 2, {x: 0, ease: Power2.easeOut}, 0)
                    .set(currentVideo, {opacity: 0, x: -1920, zIndex: 0, y: 0})
                    .addCallback(() => {
                        currentVideo.pause();
                        currentVideo.currentTime = 0;
                    });
            } else {
                updateTemplateDuration(index, 3);
                const height = getElementStyleProp('.text-con', 'height', null);

                tl.staggerTo([...selectAll('.text-con h1'), ...selectAll('.text-con p')], 1, {y: -height, ease: Power2.easeIn}, {each: .1});
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

            tl.set(selectAll('.text-con div'), {opacity: 0});
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
            const height = getElementStyleProp('.text-con', 'height', null);

            const currentIndex = [...selectAll('video')].findIndex(vid => vid.style.opacity == 1);
            const currentVideo = selectAll('video')[currentIndex];
            const nextVideo = selectAll('video')[index];

            let i = index + 1;
            i = (i > 3) ? i - ((i % 3) * 3) : i;
            
            const arrowPosition = (1920 / selectAll('.text-con div').length) * i - (1920 / selectAll('.text-con div').length / 2) - 100;

            tl.set(nextVideo, {opacity: 1, zIndex: 0})
                .set(currentVideo, {zIndex: -1})
                .set([...selectAll('.text-con h1'), ...selectAll('.text-con p')], {y: height})
                .set(selectAll('.text-con div'), {opacity: .5})
                .set(selectAll('.text-con div')[i - 1], {opacity: 1})
                .to('.arrow path', 1, {x: arrowPosition, ease: Power2.easeInOut})
                .staggerTo([...selectAll('.text-con h1'), ...selectAll('.text-con p')], 1, {y: 0, ease: Power2.easeOut}, {each: .1}, 0)
                .to(nextVideo, 2, {x: 0, ease: Power2.easeOut}, 0)
                .set(currentVideo, {opacity: 0, x: -1920, y: 0, zIndex: 0})
                .addCallback(() => {
                    currentVideo.pause();
                    currentVideo.currentTime = 0;
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

            const height = getElementStyleProp('.text-con', 'height', null),
                nextWidth = getElementStyleProp('.next-con', ['width', 'padding'], {width: true, height: false});
    
            const currentIndex = [...selectAll('video')].findIndex(vid => vid.style.opacity == 1);
        
            tl.staggerTo([...selectAll('.text-con h1'), ...selectAll('.text-con p')], 1, {y: -height, ease: Power2.easeIn}, {each: .1})
                .to(selectAll('video')[currentIndex], 2, {y: -1080, ease: Power2.easeIn, opacity: .99}, 0)
                .to(['#main-video-clip rect', '.video-accent'], 1.5, {y: -1080, ease: Power2.easeIn}, .5)
                .to('.next-con', 1, {x: -nextWidth, ease: Power2.easeIn}, 0)
                .to('.next-con p', 1, {x: nextWidth * 2, ease: Power2.easeIn}, 0)
                .to(['.progress-dots', '.arrow path'], .5, {opacity: 0}, 0)
                .to('.logo', 1, {y: '-15vh'}, 0)
                .to('.background', 1, {scaleY: 0, ease: Power3.easeIn}, .5)
                .set(selectAll('.text-con div'), {opacity: 0}, 1)
                .addCallback(() => {
                    loopingSlider.pause();
                    loopingDots.pause();
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