'use strict';

class VideoWipeOne {
    constructor(transition) {
        this.name = 'wipe.1';
        if(transition.transitionIn.includes(this.name)) {
            this.shouldtransitionIn = true;
            this.name = transition.transitionIn.substring(0, transition.transitionIn.indexOf('.js'));
        }
        if(transition.transitionOut.includes(this.name)) {
            this.shouldtransitionOut = true;
            this.name = transition.transitionOut.substring(0, transition.transitionOut.indexOf('.js'));
        }
    }

    loadExternalResources() {
        return new Promise((resolve, reject) => {
            Promise.all(getCodeSnippet([
                {url: `${this.name}.html`, type: 'html'},
                {url: `${this.name}.css`, type: 'css'}
            ])).then(resolve).catch(error => reject(error));
        });
    }

    setTemplateElements() {
        return new Promise((resolve, reject) => {
            try {
                const tl = new TimelineMax({onComplete: resolve});
                const allCanvas = selectAll('.wipe-1 canvas'),
                    clipPaths = selectAll('.wipe-1 clipPath:not(#wipe-1-fourth-clip) rect');
                const width = Math.floor(1920 * .34);
                const color = templateInfo.style.primaryColor ? templateInfo.style.primaryColor[0] : '#A26AE5';

                tl.set(allCanvas, {x: -1920});
                clipPaths.forEach((path, i) => {
                    tl.set(path, {x: -Math.abs((i + 1) * width)});
                });
                tl.set(['.wipe-1 .stripe', '.wipe-1 .in'], {x: -300, fill: color})
                    .set('.wipe-1 .in', {display: 'block'})
                    .set('.wipe-1 .out', {display: 'none'})
                    .set('.wipe-1', {opacity: 1})
            } catch (error) {
                return reject({message: error});
            }
        });
    }

    transitionIn() {
        return new Promise((resolve, reject) => {
            try {
                const tl = new TimelineMax({onComplete: resolve});
                
                tl.staggerTo(selectAll('.wipe-1 canvas'), 2, {x: 0, ease: Power3.easeOut}, {each: .1, from: 'end'})
                    .staggerTo(selectAll('.wipe-1 clipPath:not(#wipe-1-fourth-clip) rect'), 2, {x: 0, ease: Power3.easeOut}, {each: .1, from: 'end'}, 0)
                    .to('.wipe-1 .stripe', 2, {x: 1920, ease: Power3.easeOut}, .5)
                    .to('.wipe-1 #wipe-1-fourth-clip .in', 2, {x: 1920, ease: Power3.easeOut}, .5)
                    .to('.wipe-1 #end-canvas', 2, {x: 0, ease: Power3.easeOut}, .5)
                    .to('video', 1, {opacity: 1, zIndex: 1}, '-=.5')
                    .set('.wipe-1', {opacity: 0})
                    
            } catch (error) {
                return reject({message: error});
            }
        });
    }

    transitionInFn() {
        return new Promise((resolve, reject) => {
            if(!this.shouldtransitionIn) return reject({message: `${this.name} was not set to animate in`});
            try {
                const vid = select('video');
                vid.addEventListener('play', function() {
                    const $this = this;
                    const allCanvas = [...selectAll('.wipe-1 .animate canvas')];
                    const contexts = allCanvas.map(can => can.getContext('2d'));
                    
                    contexts.forEach((con, i) => {
                        drawVideoOnCanvas($this, con, allCanvas[i], 1920, 1080);
                    });
                });
                vid.play();
                vid.loop = true;

                return this.setTemplateElements().then(this.transitionIn)
                     .then(resolve).catch(error => reject({message: `${templateInfo.name} could not animte it's wipe in`, error}));

            } catch (error) {
                return reject({message: `${templateInfo.name} had an issue setting it's animation in`, error});
            }
        });
    }

    resetTemplateElements() {
        return new Promise((resolve, reject) => {
            try {
                const tl = new TimelineMax({onComplete: resolve});
                const color = templateInfo.style.primaryColor ? templateInfo.style.primaryColor[0] : '#A26AE5';
                const clipPaths = selectAll('clipPath:not(#wipe-1-fourth-clip) rect');
                const allCanvas = [...selectAll('.wipe-1 .animate canvas')];
                const contexts = allCanvas.map(can => can.getContext('2d'));
                select('video').style.opacity = .99;
                    
                contexts.forEach((con, i) => {
                    drawVideoOnCanvas(select('video'), con,  allCanvas[i], 1920, 1080);
                });

                tl.set([allCanvas, clipPaths], {x: 0})
                    .set('.wipe-1 .stripe', {x: -300, fill: color})
                    .set('.wipe-1 .in', {display: 'none'})
                    .set('.wipe-1 .out', {display: 'block', x: 0})
                    .set('.wipe-1', {opacity: 1})
            } catch (error) {
                return reject({message: error});
            }
        });
    }

    transitionOut() {
        return new Promise((resolve, reject) => {
            try {
                const tl = new TimelineMax({onComplete: resolve});
                tl.to('video', 1, {opacity: 0})
                    .staggerTo(selectAll('.wipe-1 canvas'), 2, {x: 1920, ease: Power3.easeIn}, {each: .1}, 0)
                    .staggerTo(selectAll('.wipe-1 clipPath:not(#wipe-1-fourth-clip) rect'), 2, {x: 1920, ease: Power3.easeIn}, {each: .1}, 0)
                    .to('.wipe-1 .stripe', 2, {x: 1920, ease: Power3.easeIn}, .2)
                    .to('.wipe-1 #wipe-1-fourth-clip .out', 2, {x: 1920, ease: Power3.easeIn}, .5)
                    .to('.wipe-1 #end-canvas', 2, {x: 1920, ease: Power3.easeIn}, .5)
                    .set('video', {zIndex: -1})
                    .addCallback(() => {
                        select('video').pause();
                        select('video').currentTime = 0;
                    });
                    
            } catch (error) {
                return reject({message: error});
            }
        });
    }

    transitionOutFn() {
        return new Promise((resolve, reject) => {
            if(!this.shouldtransitionOut) return reject({message: `${this.name} was not set to animate out`});
            try {
                return this.resetTemplateElements().then(this.transitionOut)
                .then(resolve).catch(error => reject({message: `${templateInfo.name} could not animte it's wipe in`, error}));

            } catch (error) {
                return reject({message: `${templateInfo.name} had an issue setting it's animation in`, error});
            }
        });
    }
}

const initializeVideoWipeOne = () => {
    try {
        const wipe = new VideoWipeOne(templateInfo.style.transition);
        wipe.loadExternalResources().then(() => {
            if(wipe.shouldtransitionIn) templateInfo.style.transitionInFn = () => wipe.transitionInFn();
            if(wipe.shouldtransitionOut) templateInfo.style.transitionOutFn = () => wipe.transitionOutFn();
        })
        .catch(error => removeTemplate({error}));
    } catch (error) {
        return removeTemplate({error: `${templateInfo.name} was not able to load it's transition. ${error}`})
    }
}

initializeVideoWipeOne();