import { Input, Options } from 'csv-stringify';

declare function stringify(input: Input, options: Options): Promise<string>;

export = stringify;
