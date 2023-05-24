export function convertToCurrency(num, currency = 'EUR', locale = 'nl-NL') {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    });

    return formatter.format(num);
}


const add = (a,b) => a+b;

function parseStringAsHtml(
    content,
    selector
) {
    const domParser = new DOMParser();
    const parsed = domParser.parseFromString(content, 'text/html');

    return parsed.querySelector(selector);
}



function debounce(fn, wait, immediate) {
    let timeout;
    return function setDebounce(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) {
                fn.apply(this, args);
            }
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait || 200);

        if (callNow) {
            fn.apply(this, args);
        }
    };
}

function convertFormdataToJsonObject(formData) {
    const data = {};

    for (const [key, value] of formData.entries()) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const oldValue = data[key];
            if (!Array.isArray(data[key])) {
                data[key] = [];
                data[key].push(oldValue);
            }

            data[key].push(value);

            continue;
        }

        data[key] = value;
    }

    return data;
}