// exporting whole class
// defining default since it's the main/only thing we will import from this file
// only ONE default export per file allowed
export default class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating!`);
    }
}

// can still export more than the default
export const TEST = 'test';