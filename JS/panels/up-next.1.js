'use strict';

// Enviorment for the graphic
const ENV = 'DEV';
// The index of data to show
let index = 0;

// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    //setTemplateStyles(), setTemplateText(), setTemplateAssets()
    return Promise.all([setTemplateStyles(), setTemplateText()])
    .then(() => {
        index = index + 3;
        return true;
    });
}

// Sets the templates styles
// @cg primaryColor
// @cg [n] secondaryColor
// @cg backgroundColor
// @cg textColor
// @cg position
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const main = select('.up-next-panel-one'),
                panel = select('.panel'),
                header = select('.header'),
                infoCons = selectAll('.info');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            panel.style.backgroundColor = templateInfo.style.backgroundColor[i];
            header.style.backgroundColor = templateInfo.style.secondaryColor
                ? templateInfo.style.secondaryColor[i]
                : adjustColor(templateInfo.style.textColor[i], {invert: true, lightDarkAmount: '30%'});
            panel.style.color = templateInfo.style.textColor[i];
            header.style.color = templateInfo.style.textColor[i];

            infoCons.forEach(div => div.style.backgroundColor = templateInfo.style.primaryColor[i]);

            switch(templateInfo.style.position[i]) {
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

            return resolve();
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while loading its styles`, error});
        }
    });
}

// Sets the templates Text
// @cg day - For every 3 elements, one day is displayed
// @cg title
// @cg time
const setTemplateText = () => {
    return new Promise((resolve, reject) => {
        try {
            const infoCons = [...selectAll('.info')],
                h1 = select('h1');
            const {startingIndex, endingIndex, multiplier} = getTemplateElementSpread(index, templateInfo.text.title.length, 3, null, {});
            let counter = 0;

            h1.textContent = templateInfo.text.day[multiplier]

            infoCons.forEach(div => {
                div.innerHTML = '';
                div.style.display = 'none';
            });

            for(let i = startingIndex; i < endingIndex; i++) {
                const div = infoCons[counter],
                    upper = document.createElement('div'),
                    lower = document.createElement('div'),
                    h2 = document.createElement('h2'),
                    p = document.createElement('p');

                div.id = i;
                div.style.display = 'block';

                h2.textContent = templateInfo.text.title[i];
                p.textContent = templateInfo.text.time[i];

                upper.appendChild(p);
                lower.appendChild(h2);
                div.appendChild(upper);
                div.appendChild(lower);

                counter++;
            }

            return resolve();
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while loading its styles`, error});
        }
    });
}

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]});
            const i = templateInfo.style.position[index] ? index - 1 : 0;
            const width = getElementStyleProp('.panel', 'width', null);

            tl.set(selectAll('p'), {y: '+=5vh'})
                .set(selectAll('h2'), {y: '-=10vh'})

            if(templateInfo.style.position[i] === 'right') {
                tl.set(selectAll('.info'), {margin: '.75em 0 .75em 1em'})
                    .set(['.panel', '.header'], {x: width})
                    .set(selectAll('.info'), {x: width});
            } else if(templateInfo.style.position[i] === 'center') {
                tl.set(selectAll('.info'), {margin: '.75em 1em'})
                    .set(['.panel', '.header'], {scaleX: 0})
                    .set([selectAll('.info')[0], selectAll('.info')[2]], {x: -width})
                    .set(selectAll('.info')[1], {x: width});
            } else {
                tl.set(selectAll('.info'), {margin: '.75em 1em .75em 0'})
                    .set(['.panel', '.header'], {x: -width})
                    .set(selectAll('.info'), {x: -width});
            }

            tl.set('.up-next-panel-one', {opacity: 1});

        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });  
}

// Animates the template in - Caspar cgPlay was called
const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index - 1]}]});
            const centered = select('.up-next-panel-one').style.alignItems === 'center'
                ? true : false;

            if(centered) {
                tl.to(['.panel', '.header'], 1, {scaleX: 1, ease: Power2.easeOut});
            } else {
                tl.staggerTo(['.panel', '.header'], 1, {x: 0, ease: Power2.easeOut}, {each: .15});
            }

            tl.staggerTo(selectAll('.info'), 1, {x: 0, ease: Power3.easeOut}, {each: .1}, .25)
                .to([selectAll('p'), selectAll('h2')], 1, {y: 0, ease: Power2.easeOut}, .5);
                

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
            .then(setTemplateText)
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
            const panelPos = select('.up-next-panel-one').style.alignItems;
            const width = getElementStyleProp('.panel', 'width', null),
                height = getElementStyleProp('.panel', 'height', null);

            tl.set('.panel', {height, width})
                .to(selectAll('p'), 1, {y: '+=5vh', ease: Power2.easeIn})
                .to(selectAll('h2'), 1, {y: '-=10vh', ease: Power2.easeIn}, 0)
                .to('h1', 1, {y: '-=5vh'}, 0)

            if(panelPos === 'center') {
                tl.to([selectAll('.info')[0], selectAll('.info')[2]], 1, {x: -width, ease: Power2.easeIn}, .5)
                    .to(selectAll('.info')[1], 1, {x: width, ease: Power2.easeIn}, .5);
            } else if(panelPos === 'flex-end') {
                tl.staggerTo(selectAll('.info'), 1, {x: width, ease: Power2.easeIn}, {each: .1, from: 'end'}, .5);
            } else {
                tl.staggerTo(selectAll('.info'), 1, {x: -width, ease: Power2.easeIn}, {each: .1, from: 'end'}, .5);
            }
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (Out)`, error});
        }
    });
}

// Function that resets the positions of the elements in the midle of an Advance chain
const resetTemplateElements = () => {
    return new Promise((resolve, reject) => {
        
    });
}

// Last function in animating the template to it's next state
const animateTemplateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.title[index - 3]}]});
            const rowGap = getElementStyleProp('.con', 'grid-row-gap', null);
            const height = getElementStyleProp('.info', ['height', 'padding'], {width: false, height: true}) + rowGap,
                totalHeight = [...selectAll('.info')].reduce((acc, div) => {
                    if(div.style.display !== 'none') acc += height;
                    return acc;
                }, rowGap);
            
            
            tl.to('.panel', 1, {height: totalHeight, ease: Power2.easeInOut})
                .staggerTo(selectAll('.info'), 1, {x: 0, ease: Power3.easeOut}, {each: .1}, .25)
                .to([selectAll('p'), selectAll('h2')], 1, {y: 0, ease: Power2.easeOut}, .5)
                .to('h1', 1, {y: 0, ease: Power2.easeOut}, .25)
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (In)`, error});
        }
    });
}

// Animates the template out - Caspar cgStop was called
const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]});
            const panelPos = select('.up-next-panel-one').style.alignItems;
            const width = getElementStyleProp('.panel', 'width', null);

            tl.to(selectAll('p'), 1, {y: '+=5vh', ease: Power2.easeIn})
                .to(selectAll('h2'), 1, {y: '-=10vh', ease: Power2.easeIn}, 0)

            if(panelPos === 'center') {
                tl.to([selectAll('.info')[0], selectAll('.info')[2]], 1, {x: -width, ease: Power2.easeIn}, .5)
                    .to(selectAll('.info')[1], 1, {x: width, ease: Power2.easeIn}, .5)
                    .staggerTo(['.panel', '.header'], 1, {scaleX: 0, ease: Power2.easeIn}, {each: .1}, .75)
            } else if(panelPos === 'flex-end') {
                tl.staggerTo(selectAll('.info'), 1, {x: width, ease: Power2.easeIn}, {each: .1, from: 'end'}, .5)
                    .staggerTo(['.panel', '.header'], 1, {x: width, ease: Power2.easeIn}, {each: .15}, .75);
            } else {
                tl.staggerTo(selectAll('.info'), 1, {x: -width, ease: Power2.easeIn}, {each: .1, from: 'end'}, .5)
                    .staggerTo(['.panel', '.header'], 1, {x: -width, ease: Power2.easeIn}, {each: .15, from: 'end'}, .75);
            }

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