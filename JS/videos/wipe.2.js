'use strict';

class VideoWipeTwo {
    constructor(transition) {
        this.name = 'wipe.2';
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
                select('#wipe-2-accent-rect').style.fill = templateInfo.style.primaryColor 
                    ? templateInfo.style.primaryColor[0] : '#A26AE5';
                tl.set([selectAll('.wipe-2 canvas'), selectAll('.wipe-2 clipPath rect'), selectAll('.wipe-2 use')], {y: 1080})
                    .set('.wipe-2', {opacity: 1});
            } catch (error) {
                return reject({message: error});
            }
        });
    }

    transitionIn() {
        return new Promise((resolve, reject) => {
            try {
                const tl = new TimelineMax({onComplete: resolve});

                tl.staggerTo(selectAll('.wipe-2 use'), 1.25, {y:0, ease: Power3.easeInOut}, {each:.1,from:'center'})
                    .staggerTo(selectAll('.wipe-2 canvas'), 1, {y:0, ease: Power3.easeInOut}, {each: .1, from:'center'}, .25)
                    .staggerTo(selectAll('.wipe-2 clipPath rect'), 1, {y:0, ease: Power3.easeInOuts}, {each: .1, from:'center'}, '-=1')
                    .to('video', 1, {opacity: 1,zIndex: 1}, '-=.25')
                    .set('.wipe-2', {opacity: 0})
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
                    const allCanvas = [...selectAll('.wipe-2 .animate canvas')];
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
                const allCanvas = [...selectAll('.animate canvas')];
                const contexts = allCanvas.map(can => can.getContext('2d'));
                
                select('video').style.opacity = .99;
                contexts.forEach((con, i) => {
                    drawVideoOnCanvas(select('video'), con,  allCanvas[i], 1920, 1080);
                });

                select('#wipe-2-accent-rect').style.fill = templateInfo.style.primaryColor 
                    ? templateInfo.style.primaryColor[0] : '#A26AE5';
                tl.set([selectAll('.wipe-2 canvas'), selectAll('.wipe-2 clipPath rect'), selectAll('.wipe-2 use')], {y: 0})
                    .set('.wipe-2', {opacity: 1});
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
                    .staggerTo(selectAll('.wipe-2 canvas'), 1.25, {y:-1920, ease: Power3.easeIn}, {each: .1, from:'center'}, .5)
                    .staggerTo(selectAll('.wipe-2 clipPath rect'), 1.25, {y:-1920, ease: Power3.easeIn}, {each: .1, from:'center'}, '-=1.25')
                    .staggerTo(selectAll('.wipe-2 use'), 1, {y:-1920, ease: Power3.easeIn}, {each:.1,from:'center'}, '-=1.5')
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

const initializeVideoWipeTwo = () => {
    try {
        const wipe = new VideoWipeTwo(templateInfo.style.transition);
        wipe.loadExternalResources().then(() => {
            if(wipe.shouldtransitionIn) templateInfo.style.transitionInFn = () => wipe.transitionInFn();
            if(wipe.shouldtransitionOut) templateInfo.style.transitionOutFn = () => wipe.transitionOutFn();
        })
        .catch(error => removeTemplate({error}));
    } catch (error) {
        return removeTemplate({error: `${templateInfo.name} was not able to load it's transition. ${error}`})
    }
}

initializeVideoWipeTwo();