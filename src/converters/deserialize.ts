import { Constructor } from '../type';
import { SerializersFactory } from '../serializers';
import { ModelMetadataSerializer } from '../serializers/model-metadata.serializer';

/**
 * Convert json for type that you need with updated names
 *
 * @param json A plain JSON object that represents your model from server.
 *
 * @param constructor A model constructor for creation of object.
 *
 * @param profile An enum key of profile of the serialization for your model.
 *
 * @returns A deserialized model as an instance of your class.
 */
export function deserialize<T extends Object, E>(
  json: Object,
  constructor: Constructor<T>,
  profile: E
): T;
/**
 * Convert json for type that you need with updated names
 *
 * @param json A plain JSON object that represents your model from server.
 * @param constructor A model constructor for creation of object.
 *
 * @returns A deserialized model as an instance of your class.
 */
export function deserialize<T extends Object>(
  json: Object,
  constructor: Constructor<T>
): T;
/**
 * Syntax sugar for the default method just to more convenient programming in the functional style.
 *
 * @param constructor a class constructor of your model of JSON that you expect to receive.
 *
 * @returns A function for convenient pipe chaining
 */
export function deserialize<T extends Object>(
  constructor: Constructor<T>
): (json: Object) => T;

/**
 * Syntax sugar for the default method just to more convenient programming in the functional style.
 *
 * @param constructor a class constructor of your model of JSON that you expect to receive.
 * @param profile A Profile of the serialization for your model.
 *
 * @returns A function for convenient pipe chaining
 */
export function deserialize<T extends Object, E>(
    constructor: Constructor<T>,
    profile: E
): (json: Object) => T;
export function deserialize<T extends Object, E>(
  jsonOrConstructor: Object | Constructor<T>,
  constructorOrProfile?: Constructor<T> | E,
  profile?: E
): ((json: Object) => T) | T {
  if( (typeof jsonOrConstructor === 'function' && typeof constructorOrProfile === 'function') || typeof constructorOrProfile === 'string' || typeof constructorOrProfile === 'number') {
    throw new TypeError('Incorrect usage of the deserialize method! Please check the signature');
  }
  if (typeof jsonOrConstructor === 'function') {
    return (json: Object) =>
      deserialize(json, <Constructor<T>>(<any>jsonOrConstructor), constructorOrProfile);
  }
  const constructor = <Constructor<T>>constructorOrProfile;
  if (constructor === undefined) {
    throw new Error('Please provide a constructor');
  }
  if (SerializersFactory.instance.isSerializerPresent(constructor)) {
    const serializer = SerializersFactory.instance.getSerializer(constructor);
    if (serializer === undefined) {
      throw new Error(
        'Couldn\'t find a serializer for a type ' + constructor.name
      );
    }
    return <T>serializer.deserialize(jsonOrConstructor);
  } else {
    SerializersFactory.instance.registerSerializer(
      constructor,
      new ModelMetadataSerializer(constructor)
    );
    return deserialize(jsonOrConstructor, constructor);
  }
}
