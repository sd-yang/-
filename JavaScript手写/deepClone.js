// 深拷贝
const deepClone = (data, map = new WeakMap()) => {
    if (typeof data !== 'object' || data === null) return data;
    if (data instanceof Date) return new Date(data);
    if (data instanceof RegExp) return new RegExp(data);
    if (map.has(data)) return map.get(data);
    let result = Array.isArray(data) ? [] : {};
    map.set(data, result);
    for (const key in data) {
        result[key] = deepClone(data[key], map);
    }
    return result;
}