import { parameters, track, init } from 'insights-js';

/**
 * Log a pageview Event to the Insights API
 * 
 * @returns {void}
 */
export const pageView = () : void => {
    event('page-view');
}

/**
 * Log an event to the Insights API
 * 
 * @param {string} eventName The name of the event to be tracked
 * @param {object} eventProperties The properties of the event to be tracked
 * 
 * @returns void
 */
export const event = (eventName: string, eventProperties: object = {}) => {

    const properties = {
        id: eventName,
        parameters: {
            ...eventProperties,
            locale: parameters.locale().value,
            screenType: parameters.screenType().value,
            referrer: parameters.referrer().value,
            path: parameters.path().value,
        }
    }

    // Don't track events in development
    if (process.env.NODE_ENV === 'development') {
        console.debug('[Insights] Event', properties)
        return;
    }
    init('HbSIygPWVvMzXFRP');
    track(properties);
}
