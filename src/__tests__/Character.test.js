import Character from "../character";


test('throw exception when name == null', () => {
    expect(() => new Character()).toThrow();
})

test('throw exception when name < 2', () => {
    expect(() => new Character('y')).toThrow();
})

test('throw exception when name > 10', () => {
    expect(() => new Character('abcdefghijklmno')).toThrow();
})

