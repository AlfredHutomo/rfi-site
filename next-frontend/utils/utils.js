export function checkValidURL(url) {
    if (
        url !== null &&
        !(url.startsWith('https://') || url.startsWith('http://'))
    ) {
        return url[0] === '/' ? url : '/' + url;
    } else if (
        url !== null &&
        (url.startsWith('https://') || url.startsWith('http://'))
    ) {
        return url;
    }
    return '/';
}
