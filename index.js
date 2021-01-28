/**
 * @typedef {Object} ValidateOptions
 * @prop {boolean?} inverse
 * @prop {boolean?} optional
 * @prop {boolean?} rest
 */

/**
 * @param {string} origin
 * @param {[string, any, any[], ValidateOptions][]} args
 */
export function validate(origin, args) {
	const error = (arg, value, types) => new TypeError(`${arg} (${value}) from ${origin} is not of any type ${types}`);

	/**
	 * @param {any} value
	 * @param {any} type
	 */
	const single = (value, type) => {
		if (typeof type === 'object') { return value instanceof type; } // type is a class constructor
		if (typeof type === 'function') { return type(value); } // type is a function predicate check
		return typeof value === type;
	};

	const multi = (values, types) => values.reduce((value, vAcc) =>
		types.reduce((type, tAcc) => single(value, type) || tAcc, false) || vAcc, false);

	const check = (value, types, options) => ((options ? options.rest : false)
		? multi(value, types)
		: types.reduce((acc, next) => single(value, next) || acc, false));

	const condition = (result, options) => !!result || (options.inverse && !result) || options.optional;

	for (const [name, value, types, options] of args) {
		[ // self argument validation
			['name', name, ['string']],
			['value', value, ['undefined'], { inverse: true }],
			['types', types, ['string', 'object', 'function'], { rest: true }],
			['options', options, ['object'], { optional: true }],
		].forEach(([n, v, t, opts = {}]) => {
			const result = check(v, t, opts);
			if (!condition(result, opts))
				throw error(n, v, t);
		});

		const result = check(value, types, options);

		if (!condition(result, options))
			throw error(name, value, types);
	}
}

export default validate;