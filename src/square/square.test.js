const square = require('./square');

describe('validateValue', () => {
    beforeEach(() => {

    }) // вызывается перед запуском каждого теста
    beforeAll(() => {

    }) // вызывается единожды перед запуском тестов
    test('Корректное значение', () => {
        // expect(square(2)).toBe(4);
        // expect(square(2)).toBeLessThan(5); //Определяет, что число меньше указанного
        // expect(square(2)).toBeGreaterThan(3); //Определяет, что число больше указанного
        const spyMathPow = jest.spyOn(Math, "pow") // создаем мок функции
        square(2)
        expect(spyMathPow).toBeCalledTimes(1) // проверяем сколько раз он вызвался
    });
    test('Корректное значение', () => {
        const spyMathPow = jest.spyOn(Math, "pow")
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    });
    afterEach(() => {
        jest.clearAllMocks() // после выполнения каждого теста затирает моки
    })
    afterAll(() => {

    })
    //Работают аналогично, но запускаются после тестов
})