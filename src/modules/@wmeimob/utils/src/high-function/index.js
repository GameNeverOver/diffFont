"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 延迟触发  多次提交，提交最后一次
 *
 * @param {() => void} fun
 * @param {number} [time=200]
 * @returns
 */
function debounce(fun, time = 200) {
    let st;
    return (...args) => {
        return new Promise(resolve => {
            clearTimeout(st);
            st = setTimeout(() => {
                resolve(fun.apply(this, args));
            }, time);
        });
    };
}
exports.debounce = debounce;
/**
 * 多少毫秒才能发送一次 限流
 *
 * @export
 * @param {number} [time=100]
 * @returns {MethodDecorator}
 */
function throttle(fun, time = 200) {
    let date = new Date();
    return (...args) => {
        return new Promise(resolve => {
            const now = new Date();
            if (now.getTime() - date.getTime() > time) {
                date = now;
                resolve(fun.apply(this, args));
            }
        });
    };
}
exports.throttle = throttle;
