'use strict';

const _ = (function() {
    function selectElement(elem, all) {
        let element;
        if(Array.isArray(elem) || all === true) {
            element = document.querySelectorAll(elem);
        } else {
            element  = document.querySelector(elem);
        }
        if(!element) throw new Error(elem + ' did not return an element');
        return element;
    }

    //  Checks for spaces in a value and if they are found, splits and adds each value together
    //  @param {string} value - The string to check for spaces or return as a number
    //  @return {number} - The sum of the value passed in.
    function addStyleValues(value, width, height) {
        if(value.indexOf(' ') !== -1) {
            const values = value.split(' ');
            value = values.reduce((acc, val, index) => {
                if(index % 2 !== 0 && !width) return acc;
                if(index % 2 === 0 && !height) return acc;
                acc = values.length === 2 ? acc + (Number(val)* 2) : acc + Number(val);
                return acc;
            }, 0);
            return value;
        } else {
            return Number(value);
        }
    }


    // Takes an element and returns the computed styles as a total or object of all the values
    // @param {string || DOM node} elem - The elemnt to get the style from
    // @param {string || array} attrs - The attribute/s that need to have their values computed
    // @param {object} direction - The direction to compute. width or height
    // @param {string} operation - The operation to perform on the attribute values
    function getElemComputedStyles({elem, attrs, direction, ops}) {
        if(!elem || !attrs) throw 'Missing element or attributes for getElemComputedStyles';
        if(typeof elem === 'string') elem = document.querySelector(elem);
        if(!direction) direction = {width: true, height: false};
        const compStyles = window.getComputedStyle(elem);
        try {
            if(Array.isArray(attrs)) {
                return attrs.reduce((acc, prop, i) => {
                    const rawValue = compStyles.getPropertyValue(prop).replace(/px/g, '');
                    const value = addStyleValues(rawValue, direction.width, direction.height);
                    if(isNaN(value)) throw new Error(`${prop} could not be used`);
                    const operation = Array.isArray(ops) && ops[i] 
                        ? ops[i] : ops; 
                    switch(operation) {
                        case 'add': 
                        default:
                            acc.total += value;
                            break;
                        case 'subtract':
                            acc.total -= value;
                            break;
                        case 'multiple':
                            acc.total *= value;
                            break;
                        case 'divide': 
                            acc.total /= value;
                            break;
                        case 'all':
                            acc[prop] = value
                            break;
                    }
                    return acc;
                }, {total: 0});
            } else {
                return addStyleValues(compStyles.getPropertyValue(attrs).replace(/px/g, ''), direction.width, direction.height);
            }
        } catch (error) {
            return console.error(error);
        }
    }

    return {
        select: selectElement,
        getStyles: getElemComputedStyles
    }
}());