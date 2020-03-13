import { Serializer } from './serializer';
export declare class PrimitiveSerializer<T extends Number | String | Boolean> implements Serializer<T> {
  serialize: (model: T) => Object | null;
  deserialize: (json: Object) => T | null;
  constructor();
}
