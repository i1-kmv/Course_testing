const mapArrayToString = require('./mapArrayToString')

describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3'])
    });
    test('Добавление некорректных типов данных', () => {
        expect(mapArrayToString([1, 2, 3, null, undefined])).toEqual(['1', '2', '3'])
    });
    test('Добавление некорректных типов данных', () => {
        expect(mapArrayToString([1, 2, 3, null, undefined])).not.toEqual([1, 2, 3, null, undefined])
    });
    test('Пустой массив', () => {
        expect(mapArrayToString([])).toEqual([])
    });
})