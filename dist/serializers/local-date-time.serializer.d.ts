import { Serializer } from './serializer';
export declare class LocalDateTimeSerializer implements Serializer<Date> {
  serialize(dateTime: Date): string;
  deserialize(value: string): Date;
}
