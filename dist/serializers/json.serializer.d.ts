import { Serializer } from './serializer';
export declare class JsonSerializer implements Serializer<any> {
    serialize(value: any): any;
    deserialize(json: any): any;
}
