'use strict';
// Enviorment for the graphic
const ENV = 'DEV';
// The index of data to show
let index = 0,
    revealed = false;

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
// @cg backgroundColor
// @cg textColor
// @cg position
const setTemplateStyles = () => {
    return new Promise((resolve, reject) => {
        try {
            const header = select('.header'),
                h1 = select('h1'),
                p = select('p'),
                ul = select('ul'),
                lines = select('#lines'),
                svgBackground = select('#svg-bkg'),
                backgroundFill = select('#bkg-fill'),
                main = select('.trivia-one');

            const i = templateInfo.style.primaryColor[index] ? index : 0;

            header.style.background = `linear-gradient(to left, ${templateInfo.style.primaryColor[i]}, ${templateInfo.style.secondaryColor[i]})`;
            lines.style.stroke = templateInfo.style.backgroundColor[i];
            lines.style.fill = templateInfo.style.backgroundColor[i];
            svgBackground.style.fill = templateInfo.style.backgroundColor[i];
            backgroundFill.style.fill = templateInfo.style.backgroundColor[i];


            h1.style.color = templateInfo.style.textColor[i];
            p.style.color = templateInfo.style.textColor[i];
            ul.style.color = templateInfo.style.textColor[i];

            switch(templateInfo.style.position[i]) {
                case 'left': 
                    main.style.margin = '0 auto 0 0';
                    break;
                case 'center':
                    main.style.margin = '0 auto';
                    break; 
                case 'right': 
                    main.style.margin = '0 0 0 auto';
                    break;
                default: 
                    main.style.margin = '0 auto 0 0';
                    break;
            }
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template styles.`, error});
        }
        return resolve();
    });
}

// Sets the templates Text
// @cg header
// @cg question
// @cg answers - An array of words separated with slashes /
// @cg answer 
const setTemplateText = () => {
    return new Promise((resolve, reject) => {
        try {
            const h1 = select('h1'),
                p = select('p'),
                ul = select('ul');

            h1.textContent = templateInfo.text.header[index];
            p.textContent = templateInfo.text.question[index];

            if(templateInfo.text.answers[index].includes('/')) {
                templateInfo.text.answers[index] = 
                    templateInfo.text.answers[index].split('/').map(item => item.trim());
            }

            ul.innerHTML = '';
            templateInfo.text.answers[index].forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = `${index + 1}. ${item.trim()}`;
                li.style.opacity = 0;
                ul.appendChild(li);
            });
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template styles.`, error});
        }
        return resolve();
    });
}

const setTemplateElements = (res) => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [res]});

            const height = getElementStyleProp('svg', 'height', null),
                headerHeight = getElementStyleProp('.header', 'height', null),
                contentHeight = getElementStyleProp('.content', 'height', null);


            tl.set('.body', {height})
                .set('#svg-bkg', {scale: '0 0', height: contentHeight, transformOrigin: 'center center'})
                .set('#bkg-fill', {opacity:0})
                .set('#lines', {opacity: 0, x: 50})
                .set('#line-group', {x: -50})
                .set('.header', {y: `+=${headerHeight}`, opacity: 0, scaleX: .98})
                .set(['p', ...selectAll('li')], {x: '-=20', opacity: 0})
                .set('mask use:last-of-type', {y: height - 115})
                .set('.lower-lines', {y: height - 15})
                .set('.trivia-one', {opacity: 1});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error setting template elements.`, error});
        }
    });
}

const animateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', info: templateInfo.text.question[index - 1]}]});

            tl.to('#svg-bkg', .75, {scaleY: 1,ease: Power1.easeInOut})
                .to('#svg-bkg', 1.25, {scaleX: 1,ease: Power2.easeInOut}, '-=.95')
                .to('#bkg-fill', .25, {opacity: 1})
                .set('.header', {opacity: 1}, '-=.35')
                .to('.header', .5, {y: 0, scaleX: 1}, '-=.35')
                .to('#lines', .5, {opacity: 1, x: 0}, '-=.5')
                .to('#line-group', .5, {x: 0}, '-=.5')
                .staggerTo(['p', ...selectAll('li')], 1, {x: 0, opacity: 1}, {each: .15});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING IN.`, error});
        }
    });
}

const advanceTemplate = () => {
    return new Promise((resolve, reject) => {
        if(index > templateInfo.text.question.length - 1) 
            return reject({message: `${templateInfo.name} is out of questions to show.`});
        logInfo({level: 0, status: 'advancing', 
            message: `${templateInfo.name} is ADVANCING to show ${templateInfo.text.question[index]} ${index + 1} of ${templateInfo.text.question.length}`
        });
        return animateTemplateOut()
            .then(setTemplateData)
            .then(animateIn)
            .then(res => resolve(res))
            .catch(error => reject({message: `${templateInfo.name} had an issue while advancing`, error}));
    });
}

const animateTemplateOut = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve});
            const height = getElementStyleProp('.content', 'height', null);

            tl.staggerTo(['p', ...selectAll('li')], 1, {x: 15, opacity: 0}, {each: .15})
                .set(['#svg-bkg', '.body'], {height});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (Out)`, error});
        }
    });
}

const animateTemplateIn = () => {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve});
            const height = getElementStyleProp('.content', 'height', null);

            tl.to(['#svg-bkg', '.body'], 1, {height})
                .to('mask use:last-of-type', 1, {y: height - 115}, 0)
                .to('.lower-lines', 1, {y: height - 15}, 0)
                .set(['p', ...selectAll('li')], {x: -15, opacity: 0})
                .staggerTo(['p', ...selectAll('li')], 1, {x: 0, opacity: 1}, {each: .15});
        } catch (error) {
            return reject({message: `${templateInfo.name} had an issue while ADVANCING (In)`, error});
        }
    });
}

const animateOut = () =>  {
    return new Promise((resolve, reject) => {
        try {
            const tl = new TimelineMax({onComplete: resolve, onCompleteParams: [{key: 'text', index}]}),
                headerHeight = getElementStyleProp('.header', 'height', null);

            tl.staggerTo(['p', ...selectAll('li')], 1, {x: 15, opacity: 0}, {each: .15})
                .to('#lines', .5, {opacity: 0, x: 50}, '-=.5')
                .to('#line-group', .5, {x: -50}, '-=.5')
                .to('.header', .5, {y: headerHeight + 10, scaleX: .98}, '-=.5')
                .set('.header', {opacity: 0})
                .to('#bkg-fill', .25, {opacity: 0}, '-=.5')
                .to('#svg-bkg', 1.25, {scaleY: 0,ease: Power1.easeInOut
                }, '-=.25')
                .to('#svg-bkg', .75, {scaleX: 0,ease: Power2.easeInOut}, '-=.95');
        } catch (error) {
            return reject({message: `${templateInfo.name} had an error while ANIMATING OUT.`, error});
        }
        
    });
}

function removeAnOption() {
    const elems = selectAll('li'),
        liElems = [];
    elems.forEach((elem, i) => 
        (!elem.classList.contains('strike')
        && templateInfo.text.answer[index - 1] !== templateInfo.text.answers[index - 1][i]) ? liElems.push(elem) : null);

    if(liElems.length === 0) return logError({level: 0, message: 'All options are removed. Answer is showing'});
    liElems.sort(() => Math.random() - 0.5);
    liElems[0].classList.add('strike');
    return logInfo({level: 0, message: `${templateInfo.name} removed ${liElems[0].textContent}`})
}

function revealAnswer() {
    const elems = selectAll('li'),
        liElems = [];
    elems.forEach((elem, i) => 
        (!elem.classList.contains('strike')
        && templateInfo.text.answer[index - 1] !== templateInfo.text.answers[index - 1][i]) 
            ? liElems.push(elem) : null);
    liElems.sort(() => Math.random() - 0.5);
    
    liElems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('strike');
        }, index * 300);
    });
    return logInfo({level: 0, message: `${templateInfo.name} is revelaing it's answer: ${templateInfo.text.answer[index - 1]}`});
}

function previousQuestion() {
    if(index > 1) {
        index  = index - 2;
        tlprogress = 2;
        return next();
    } else if(templateInfo.text.question.length === 1) {
        return logError({level: 0, error: `${templateInfo.name} only has 1 question`});
    } else {
        return logError({level: 0, error: `${templateInfo.name} can not go back 1 question`});
    }
}

function nextQuestion() {
    return next();
}