import { Serializer } from './serializer';
import { Constructor } from '../type';
export declare class ModelMetadataSerializer<T> implements Serializer<T> {
    private modelConstructor;
    constructor(modelConstructor: Constructor<T>);
    deserialize(json: Object, additionalInfo?: any): T | null;
    private getFieldsMetadata;
    private setValueToModel;
    serialize(model: T, additionalInfo?: any): Object | null;
}
