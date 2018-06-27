function sum(num1, num2) {
    return num1 + num2;
}
it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
});
