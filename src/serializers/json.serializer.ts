import { Serializer } from './serializer';

export class JsonSerializer implements Serializer<any> {
  serialize(value: any): any {
    return value;
  }

  deserialize(json: any): any {
    return json;
  }
}
