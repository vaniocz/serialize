import { Serializer } from '../serializers';
import { Constructor } from '../type';
export declare function Model(serializer?: Serializer<any>): (target: Constructor<Object>) => void;
