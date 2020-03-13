import { Constructor } from '../type';
/**
 * Convert json for type that you need with updated names
 *
 * @param json A plain JSON object that represents your model from server.
 * @param constructor A model constructor for creation of object.
 * @returns A deserialized model as an instance of your class.
 */
export declare function deserialize<T extends Object>(json: Object, constructor: Constructor<T>): T;
export declare function deserialize<T extends Object>(json: Object, constructor: Constructor<T>, additionalInfo?: any): T;
export declare function deserialize<T extends Object>(constructor: Constructor<T>): (json: Object) => T;
