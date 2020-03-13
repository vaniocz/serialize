import { Constructor } from '../type';
import { Serializer as ISerializer } from '../serializers';
/**
 * Defines a serializer for any serialization or deserialization of your field
 */
export declare function Type(): PropertyDecorator;
/**
 * Defines a serializer by passed parameter @param modelType
 * Try to find a serializer for your model type in {@link SerializersFactory}
 *
 * @throws {NoSerializerError} if serializer was missing
 * @param modelType Constructor of model wich registered as {@Model}
 */
export declare function Type<T extends Object>(modelType: Constructor<T>): PropertyDecorator;
/**
 * Defines your custom serializer for this field
 * It will be used for serialization and deserialization
 *
 * @param serializer Custom serializer for this field only!
 */
export declare function Type<T extends Object>(serializer: ISerializer<T>): PropertyDecorator;
