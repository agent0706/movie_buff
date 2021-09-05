import URLs from './urls.json';

const BASE_PATH  = "https://api.themoviedb.org/3";

const API_AUTH_TOKEN_V4 = "Bearer ";

const getFullUrl = (urlKey, urlConfig) => {

    const addParamsToUrl = (url) => {
        Object.entries(urlConfig).forEach(([key, value]) => {
            url = url.replace(`{${key}}`, value);
        });
        return url;
    };

    let url = URLs[urlKey] || '';
    url = addParamsToUrl(url);
    return BASE_PATH + url;
};

const getEncodedUrl = (url, params = {}) => {
    const query = Object.keys(params).map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    }).join('&');
    return query.length ? `${url}?${query}` : url;
};

export const makeGETRequest = async (urlKey, params = {}, urlConfig = {}) => {
    const url = getFullUrl(urlKey, urlConfig);
    const encodedUrl = getEncodedUrl(url, params);
    const promise = fetch(encodedUrl, {
        method: 'GET',
        mode: 'cors',
        headers: {
            content: 'application/json',
            Authorization: API_AUTH_TOKEN_V4
        }
    });
    return promise;
};

