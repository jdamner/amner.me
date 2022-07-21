import { track, parameters, init } from 'insights-js';

const pageView = () => {
    event('page-view');
}

const event = (eventName, eventProperties = {}) => {
    init('HbSIygPWVvMzXFRP');
    track({
        id: eventName,
        parameters: {
            ...parameters,
            ...eventProperties,
        },
    });
}

export { pageView, event };