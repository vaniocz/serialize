import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constructor, deserialize } from '..';

export function deserializeOperator<T extends object, R extends object>(modelClass: Constructor<R>): OperatorFunction<T, R> {
  return map((json: T) => deserialize(json, modelClass));
}

export function deserializeAllOperator<T extends object, R extends object>(modelClass: Constructor<R>): OperatorFunction<T[], R[]> {
  return map((json: T[]) => json.map(item => deserialize(item, modelClass)));
}
