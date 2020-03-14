import { Serializer } from './serializer';
import { Constructor } from '../type';
import { ModelMetadataSerializer } from './model-metadata.serializer';
/**
 * @deprecated Use {@link ModelMetadataSerializer} instead this one
 */
export declare class ModelSerializer<T extends Object> implements Serializer<T> {
    private metadataSerializer;
    constructor(constructor: Constructor<T>);
    serialize(modelForSerialization: T, additionalInfo: any): Object | null;
    deserialize(json: Object, additionalInfo: any): T | null;
}
export declare function model<T>(constructor: Constructor<T>): ModelMetadataSerializer<T>;
