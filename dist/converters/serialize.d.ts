import 'reflect-metadata';
/**
 * Convert model to json with metadata names
 *
 * Fields that not are labeled as {@link Field} will be ignore
 *
 * @param model Serializable model that was convert to json
 * @returns Server object
 */
export declare function serialize<T>(
  model: T
): {
  [property: string]: any;
};
export declare function serialize<T, I>(
  model: T,
  additionalInfo: I
): {
  [property: string]: any;
};
