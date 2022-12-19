import { sum, sumBoolean, sumSub } from './sum'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('...', () => {
    if (expect(sumBoolean(2, 1)).toEqual(true)) {

    } else (expect(sumBoolean(2, 1)).toEqual(false))
});

test('aosfkapsofi2', () => {
    expect(sumSub(2, 1)).toEqual(1);
});
