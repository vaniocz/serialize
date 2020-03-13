import { OperatorFunction } from 'rxjs';
import { Constructor } from '..';
export declare function deserializeOperator<T extends object, R extends object>(modelClass: Constructor<R>): OperatorFunction<T, R>;
export declare function deserializeAllOperator<T extends object, R extends object>(modelClass: Constructor<R>): OperatorFunction<T[], R[]>;
