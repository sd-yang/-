function myInstanceof(source, target) {
    let proto = Object.getPrototypeOf(source);
    while(proto) {
        if (proto === target.prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}