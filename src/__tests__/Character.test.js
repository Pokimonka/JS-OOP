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

test('Character level Up with health == 0', () => {
    const ch = new Character('Test');
    // const correct = {
    //     attack: 0,
    //     defence: 0,
    //     health: 100, 
    //     level: 1,
    //     name: 'Test',
    //     type: 'Character'
    // };
    // expect(ch).toEqual(correct);
    ch.health = 0;
    expect(ch.levelUp).toThrow();
})