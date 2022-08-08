// instanceof
function myInstanceof(target, origin) {
    let proto = Object.getPrototypeOf(target);
    while (proto) {
        if (proto === origin.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}