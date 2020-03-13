import { Constructor } from '../type';
import { Serializer } from './serializer';
export declare class SerializersFactory {
    private serializersMap;
    private constructor();
    static get instance(): SerializersFactory;
    getSerializer<T>(type: Constructor<T>): Serializer<T> | undefined;
    registerSerializer<T>(type: Constructor<T>, serializer: Serializer<T>): void;
    isSerializerPresent<T>(type: Constructor<T>): boolean;
}
