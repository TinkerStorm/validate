// Internal

/*
declare function error<Value>(origin: string, arg: string, value: Value, types: any[]): void
declare function signal<Value>(value: Value, type: any): boolean
declare function multi<Values>(values: Values, types: any[]): boolean
declare function check<Value>(value: Value, types: any[], options?: ValidateOptions): boolean
declare function condition<Value>(value: Value, result: boolean, options?: ValidateOptions): boolean
*/

// Exported

interface ValidateOptions {
	inverse?: boolean;
	optional?: boolean;
	rest?: boolean;
}

type ValidateArgs = [
	name: string,
	value: any,
	types: any[],
	options?: ValidateOptions
];

declare function validate(origin: string, args: ValidateArgs[]): void;

export {
	validate,
	ValidateOptions,
	ValidateArgs
};

export default validate;
