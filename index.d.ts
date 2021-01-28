// Internal

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
