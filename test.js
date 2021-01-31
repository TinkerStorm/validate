import test from 'ava';
import validate from './index.js';

/* const errorRegex = /\w+ (.+) from \w+ is not of any type ([\w,]+|\((?:[\w, ]+)?\) => [^\n]+)+/; */

test('add(x: number, y: number) - Generic', t => {
	function add(x, y = 0) {
		validate('add', [
			['x', x, ['number']],
			['y', y, ['number']]
		]);

		return x + y;
	}

	t.throws(() => add('3', 4), {instanceOf: TypeError});
	t.assert(add(3, 4) === 7);
});

test('add(x: number, y: number | string = 0) - Of either type with default', t => {
	function add(x, y = 0) {
		validate('add', [
			['x', x, ['number']],
			['y', y, ['number', 'string']]
		]);

		return x + y;
	}

	t.assert(add(3) === 3);
	t.assert(add(3, '3') === '33');
});

test('add(x: int, y: int) - Custom int resolver', t => {
	function add(x, y) {
		validate('add', [
			['x', x, [() => Number.isInteger(x)]],
			['y', y, [() => Number.isInteger(y)]]
		]);

		return x + y;
	}

	t.throws(() => add(3.1, 4), {instanceOf: TypeError});
	t.assert(add(3, 4) === 7);
});

test.failing('add(x: number, y?: number) - Optional Argument', t => {
	function add(x, y) {
		validate('add', [
			['x', x, ['number']],
			['y', y, ['number'], {optional: true}]
		]);

		return x + (y || 1);
	}

	t.throws(() => add(3, '4'), {instanceOf: TypeError});
});
