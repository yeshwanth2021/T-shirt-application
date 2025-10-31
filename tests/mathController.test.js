const { add, subtract, multiply, divide } = require('../controllers/mathController');

describe('Math Controller', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('adds decimals', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('subtracts positive and negative numbers', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('subtracts two negative numbers', () => {
      expect(subtract(-2, -3)).toBe(1);
    });

    test('subtracts decimals', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('multiplies positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('multiplies two negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    test('multiplies decimals', () => {
      expect(multiply(1.5, 2)).toBe(3);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('divides positive and negative numbers', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('divides two negative numbers', () => {
      expect(divide(-6, -3)).toBe(2);
    });

    test('divides decimals', () => {
      expect(divide(5, 2)).toBe(2.5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});
