export declare type Constructor<T extends Object> = new (...args: any[]) => T;
export declare function isConstructor<T>(candidate: any): candidate is Constructor<T>;
