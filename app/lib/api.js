import {api} from '../config/settings';

function request(uri, method = 'GET', body) {
    const endpoint = api + uri;
    return fetch(endpoint, {
        method,
        body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(x => x.json());
};

export {request}