'use strict';

// Enviorment for the graphic
const ENV = 'DEV';
// The index of data to show
let index = 0;

// Calls all the finctions that setup template
// @returns - Pomise resolving if all the setup succeeds
const setTemplateData = () => {
    return Promise.all([setTemplateStyles(), setTemplateText()])
    .then(() => {
        index++;
        return true;
    });
}

// Sets the templates styles
// @cg primaryColor
// @cg secondaryColor
// @cg textColor
// @cg position
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const accentSquares = selectAll('svg rect:first-of-type'),
                mainSquares = selectAll('svg rect:last-of-type'),
                h1 = select('h1'),
                tag = select('.tag-five');

            const i = templateInfo.style.primaryColor[index] ? index : 0;
            
            accentSquares[0].style.fill = templateInfo.style.primaryColor[i];
            accentSquares[1].style.fill = templateInfo.style.primaryColor[i];
            mainSquares[0].style.fill = templateInfo.style.secondaryColor[i];
            mainSquares[1].style.fill = templateInfo.style.secondaryColor[i];
            h1.style.color = templateInfo.style.textColor[i];

            switch(templateInfo.style.position[i]) {
                case 'center': 
                    tag.style.alignItems = 'center';
                    break;
                case 'right':
                    tag.style.alignItems = 'flex-end';
                    break;
                default:
                    tag.style.alignItems = 'flex-start';
                    break;
            }
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template styles.`, error});
        }
        return resolve();
    });
}

// Sets the templates Text
// @cg name
// @cg title
const setTemplateText = () => {
    return new Promise((resolve, reject) => {
        if(index <= templateInfo.text.name.length - 1) {
            const name = templateInfo.text.name[index],
                h1 = select('h1'),
                span = document.createElement('span'),
                p = select('p');
    
            h1.textContent = name.substring(0, name.indexOf(' '));
            span.textContent = name.substring(name.indexOf(' '));
            h1.appendChild(span);
            p.textContent = templateInfo.text.title[index];

            return resolve();
        } else {
            return reject({message: `${templateInfo.name} is out of names to display`});
        }
    });
};

// Sets the Elements initial state
const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]}),
                width = getElementStyleProp('h1', 'width');

            tl.set('.container', {width})
                .set(selectAll('.small-squares rect'), {
                    x: width,
                    scale: 1,
                    transformOrign: '0 0'
                })
                .set('h1', {x: `-${width}`})
                .set('p', {x: width, width})
                .set(selectAll('.large-squares rect'), {
                    x: 0,
                    scaleX: 0,
                })
                .set('.tag-five', {opacity: 1});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.name[index - 1]}]});
            const subtitleTl = new TimelineMax(),
                width = getElementStyleProp('h1', 'width');
            
            tl.staggerTo(selectAll('.large-squares rect'), 1, {scaleX: 1, ease: Power2.easeInOut,}, { each: .15 })
            .staggerTo(selectAll('.large-squares rect'), 1, 
                { x: width + 5,ease: Power2.easeInOut}, {each: .15}, '-=.5')
            .to(select('h1'), 1, {x: 0,ease: Power2.easeOut}, '-=.5');

            subtitleTl.staggerTo(selectAll('.small-squares rect'), 1, 
                {x: 0, ease: Power2.easeInOut}, { each: .15 })
            .to(select('p'), 1, {x: 0, ease: Power2.easeOut}, '-=.5');

            tl.add(subtitleTl, 0);
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING IN.`, error});
        }
    });
}

const advanceTemplate = () => {
    return new Promise((resolve, reject) => {
        if(index > templateInfo.text.name.length - 1) 
            return reject({message: `${templateInfo.name} is out of names to show.`});
        logInfo({level: 0, status: 'advancing', 
            message: `${templateInfo.name} is ADVANCING to show ${templateInfo.text.name[index]} ${index + 1} of ${templateInfo.text.title.length}`
        });
        return animateOut()
            .then(setTemplateData)
            .then(setTemplateElements)
            .then(animateIn)
            .then(res => resolve(res))
            .catch(error => reject({message: `${templateInfo.name} had an issue while advancing`, error}));
    });
    
}

const animateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]}),
                subtitleTl = new TimelineMax(),
                width = getElementStyleProp('h1', 'width');

            tl.set(selectAll('.large-squares rect'), {
                x: 0,
                scaleX: 0
            })
            .to(select('h1'), 1, {
                x: width
            })
            .staggerTo(selectAll('.large-squares rect'), 1, {
                scaleX: 1, 
                ease: Power2.easeInOut
            }, {each: .15}, '-=1')
            .staggerTo(selectAll('.large-squares rect'), 1, {
                x: width,
                ease: Power2.easeInOut
            }, {each: .15}, '-=.5')
            .set('.tag-five', {opacity: 0}, "+=.5");

            subtitleTl.to(select('p'), 1, {
                x: `-${width}`,
                ease: Power2.easeIn
            })
            .set(selectAll('.small-squares rect'), {transformOrign: 'left center'}, '-=1')
            .staggerTo(selectAll('.small-squares rect'), 1, {
                scaleX: 0
            }, {
                from: 'end',
                each: .15
            }, '-=.5');

            tl.add(subtitleTl, 0);
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING OUT.`, error});
        }
    });
}

// Custom Command - Reset - Resets the tag to the first one given on load
function reset() {
    if(templateInfo.text.name.length <= 1) 
        return logError({level: 0, error: `${templateInfo.name} does not have more than one name`});
    index = 0;
    if(tlprogress === 2) {
        return next();
    } else {
        select('.tag-five').style.opacity = 0;
        return setTemplateData()
            .then(setTemplateElements)
            .then(() => 
            logInfo({level: 0, message: `${templateInfo.name} has reset and is now showing ${templateInfo.text.name[index - 1]} [${index} of ${templateInfo.text.title.length}]`})
        );
    }   
}

// Custom Command - Previous Tag - Goes to the previous name if possible
function previousTag() {
    if(index > 1) {
        index = index - 2;
        tlprogress = 2;
        return next();
    } else if(templateInfo.text.name.length === 1) {
        return logError({level: 0, error: `${templateInfo.name} only has 1 name`});
    } else {
        return logError({level: 0, error: `${templateInfo.name} can not go back 1 name`});
    }
}

// Custom Command - Next Tag - Goes to the next name if possible
function nextTag() {
    return next();
}