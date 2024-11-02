export function fun1() {
    console.log(1);
}

export function fun2() {
    console.log(2);
}

export function fun3() {
    console.log(3);
}

// not accessible without exporting, even when importing all with '*'
function fun4() {
    console.log(4);
}

export const lol = 'lol';