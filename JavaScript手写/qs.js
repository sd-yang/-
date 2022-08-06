const parseQueryString = (url) => {
    if (!url || typeof url !== 'string') {
        throw new Error('Error')
    }
    let strData = url.split('?')[1];
    let result = {};
    strData.split('&').forEach(item => {
        let [key, value] = item.split('=');
        result[key] = value;
    });

    return result;
}