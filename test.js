import test from 'ava';
import validate from './index.js';

test('add(x: number, y: number)', t => {
	function add(x, y = 0) {
		validate([
			['x', x, ['number']],
			['y', y, ['number']]
		]);

		return x + y;
	}

	t.throws(add('3', 4));
	t.assert(add(3, 4));
});

test('add(x: number, y: number | string = 0)', t => {
	function add(x, y = 0) {
		validate([
			['x', x, ['number']],
			['y', y, ['number', 'string']]
		]);

		return x + y;
	}

	t.assert(add(3) === 3);
	t.assert(add(3, '3') === 6);
});

test('add(x: int, y: int)', t => {
	function add(x, y) {
		validate('add', [
			['x', x, [() => Number.isInteger(x)]],
			['y', y, [() => Number.isInteger(y)]]
		]);

		return x + y;
	}

	t.throws(add(3.1, 4.9));
	t.assert(add(3, 4) === 7);
});
