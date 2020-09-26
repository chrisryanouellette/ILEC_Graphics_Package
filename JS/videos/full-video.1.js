'use strict';

// Enviorment for the graphic
const ENV = 'DEV';
// The index of data to show
let index = 0;

// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    //setTemplateStyles(), setTemplateText(), setTemplateAssets()
    return Promise.all([setTemplateAssets()])
    .then(() => {
        index++;
        return true;
    });
}

// Creates and adds all the nessecary medai assets to the template
// @cg [n] transitionIn
// @cg [n] transitionOut
const setTemplateAssets = () => {
    return new Promise((resolve, reject) => {
        const arr = [];
        const files = Object.keys(templateInfo.style).length 
            && Object.keys(templateInfo.style).reduce((acc, key) => {
                if(key !== 'transitionIn' && key !== 'transitionOut') return acc;
                const fixedSource = templateInfo.style[key][0].indexOf('.html') 
                    ? templateInfo.style[key][0].replace('.html', '.js')
                    : templateInfo.style[key][0];
                const url = fixSourceUrl(fixedSource, 'js');
                if(!templateInfo.style.transition) templateInfo.style.transition = {};
                if(templateInfo.style[key].length && !acc.includes(url)) {
                    acc.push(url);
                }
                templateInfo.style.transition[key] = fixedSource;
                return acc;
            }, []);
        if(files.length) {
            files.push(fixSourceUrl('https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js', 0));
        }

        files.forEach(url => {
            arr.push(new Promise((subresolve, subreject) => {
                const script = document.createElement('script');
                select('body').append(script);
                script.onload = function() {return subresolve()}
                script.src = url;
                return setTimeout(() => subreject({message: 'Unable to load transitions.'}), 1000);
            }));
        });
        arr.push(...addAssetSources(select('video'), templateInfo.asset.video));
        Promise.all(arr).then(resolve).catch(error => reject(error));
    });
}

// Animates the template in - Caspar cgPlay was called
const animateIn = () => {
    return new Promise((resolve, reject) => {
        const video = select('video');
        if(typeof templateInfo.style.transitionInFn !== 'function') {
            video.style.opacity = 1;
            video.play();
            return resolve();
        } else {
            return templateInfo.style.transitionInFn().then(() => {
                templateInfo.playoutInfo.duration = (video.duration - video.currentTime) % 60 - 3;
                return resolve();
            }).catch(error => reject(error));
        }
    });
}

// Animates the template out - Caspar cgStop was called
const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const video = select('video');
            if(typeof templateInfo.style.transitionOutFn !== 'function') {
                video.style.opacity = 0;
                video.pause();
                video.currentTime = 0;
                return resolve();
            } else {
                return templateInfo.style.transitionOutFn().then(resolve).catch(error => reject(error));
            }
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING OUT.`, error});
        }
    });
}