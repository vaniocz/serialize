export declare function isPresent(obj: Object): boolean;
export declare function ifPresentGet<T, K>(presentResult: T, notPresentResult: K): (obj: Object) => T | K;
