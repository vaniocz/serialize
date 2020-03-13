import { Serializer } from './serializer';
export declare class LocalDateSerializer implements Serializer<Date> {
  serialize(date: Date): string;
  deserialize(value: string): Date;
}
