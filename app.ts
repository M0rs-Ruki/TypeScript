// primitive and reference type

// [], {}, () are reference type
// primitive type are number, string, boolean, null, undefined, symbol, bigint


// 12 // primitive
// harsh // primitive
// sharma // primitive
// 12.77 // primitive
// true // primitive
// [] // reference
// {} // reference
// "Apple" // primitive
// false // primitive
// () // reference

// let ale = 12; // primitive
// let a = true // primitive

/////////////////////////////////

// let a = 12;

// let arr = [1, 2, 3, 'mors', true];

// let arr2: number[] = [1, 2, 3, 4,];


// let arr: [string, number] = ['mors', 12]

// // enumerations
// enum UserRoals {
//     ADMIN = 'admin',
//     USER = 'user',
//     GUEST = 'guest',
// }

// UserRoals.ADMIN

// Any , Unknown, Void & More
// let a: number;
// a = 12;
// a = true; // error

// let a; // any
// a = 12;
// a = true;
// a = 'mors';
// no error

// let a: unknown;
// a = 12;
// a = true;
// a = 'mors';
// if (typeof a === 'string') {
//     a.toUpperCase();
// }

// function abcd(): void {
//     console.log('mors')
// }

// function abc(): string {
//     return 'mors'
// }

// function ab(): number {
//     return 238249849;
// }

// let a = null;
// let n: null;
// n = 12;
// let nu: string | null;
// nu = 'mors';
// nu = null;
// nu = 23;
// let and: undefined | number;
// and = 12;
// and = undefined;
// and = 'mors';


function abcd(): never {
    while (true) {
        console.log('mors')
    }
}
abcd();
console.log('Mors Code');