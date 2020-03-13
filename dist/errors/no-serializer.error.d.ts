export declare class NoSerializerError extends Error {
  fieldKey: string;
  name: string;
  constructor(fieldKey: string, message?: string);
}
