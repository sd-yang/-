const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class myPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error);
        }
    }

    status = PENDING;
    reason = null;
    value = null;
    resolveCallbacks = [];
    rejectCallbacks = [];

    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
            while (this.resolveCallbacks.length) {
                this.resolveCallbacks.shift()(value);
            }
        }
    };

    reject = (value) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = value;
            while (this.rejectCallbacks.length) {
                this.rejectCallbacks.shift()(value);
            }
        }
    }

    then(onResolve, onReject) {
        onResolve = typeof onResolve === 'function' ? onResolve : (value) => value;
        onReject = typeof onReject === 'function' ? onReject : (reason) => { throw (reason) };
        const promise2 = new myPromise((resolve, reject) => {
            const fulfilledMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        let x = onResolve(this.value);
                        resolvePromise(x, promise2, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }

                });
            };
            const rejectedMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        let x = onReject(this.reason);
                        resolvePromise(x, promise2, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                })
            };
            if (this.status === FULFILLED) {
                fulfilledMicrotask();
            } else if (this.status === REJECTED) {
                rejectedMicrotask();
            } else {
                this.resolveCallbacks.push(fulfilledMicrotask);
                this.rejectCallbacks.push(rejectedMicrotask);
            }
        });
        return promise2;
    }

    static resolve(parameter) {
        if (parameter instanceof myPromise) {
            return parameter
        }

        return new myPromise((resolve) => {
            resolve(parameter)
        })
    }

    static reject(parameter) {
        return new myPromise((resolve, reject) => {
            reject(parameter);
        })
    }
}

function resolvePromise(x, promise, resolve, reject) {
    if (x === promise) {
        reject(new TypeError('Error 循环引用'));
    }
    if (x instanceof myPromise) {
        return x.then(resolve, reject);
    } else {
        return resolve(x);
    }
}
