import { Serializer } from './serializer';
export declare class DateSerializer<T extends Date> implements Serializer<T> {
  serialize: (model: T) => Object;
  deserialize: (json: Object) => T;
  /**
   * @param initializer Function for creating date from json, {@link Date} by default
   */
  constructor(initializer?: (json: Object) => T);
}
