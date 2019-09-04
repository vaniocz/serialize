import 'reflect-metadata';
import { SerializersFactory } from '../serializers';
import { ModelMetadataSerializer } from '../serializers/model-metadata.serializer';

/**
 * Convert model to json with metadata names
 *
 * Fields that not are marked as {@link Field} will be ignore
 *
 * @param model Serializable model that should be converted to JSON
 * @param profile optional profile for serialization of your model.
 * @returns Server object
 */
export function serialize<T, E>(model: T, profile: E): Object;
/**
 * Convert model to json with metadata names
 *
 * Fields that not are marked as {@link Field} will be ignore
 *
 * @param model Serializable model that should be converted to JSON
 * @returns Server object
 */
export function serialize<T>(model: T): Object;
export function serialize<T, E>(model: T, profile?: E): Object {
  const modelPrototype = Object.getPrototypeOf(model);
  const constructor = modelPrototype.constructor;
  if (SerializersFactory.instance.isSerializerPresent(constructor)) {
    const serializer = SerializersFactory.instance.getSerializer(constructor);
    if (serializer === undefined) {
      throw new Error('Couldn\'t find serializer for a type ' + constructor.name);
    }
    return serializer.serialize(model) || {};
  } else {
    SerializersFactory.instance.registerSerializer(constructor, new ModelMetadataSerializer(constructor));
    return serialize(model);
  }

}
