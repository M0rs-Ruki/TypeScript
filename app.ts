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


// function abcd(): never {
//     while (true) {
//         console.log('mors')
//     }
// }
// abcd();
// console.log('Mors Code');


// type Inference
// Understanding type inference
// Type annotations


// let a = 12; // inference

// let b: number; // annotations

// const abc = (a: number, b: string): number | string => {
//     return a + b;
// }


// Intetfaces and Type Aliases
// Definging interfaces
// Using interfaces to define object shapes
// Extending interfaces
// Type aliases
// Intersection Types


// function abc(a: number, b: string) {

// }

// interface User{
//     name: string,
//     email: string,
//     isActive: boolean,
// }

// function getDataOfUser(obj: User) {
//     obj.name,
//     obj.email,
//     obj.isActive
// }

// getDataOfUser({
//     name:'mors',
//     email: 'mors@gamil.com',
//     isActive: true,
// })


// interface User {
//     name: string,
//     email: string,
//     isActive: boolean,
// }

// interface Admin extends User {
//     admin: boolean,
// }

// function getUser(obj: Admin) {
//     obj.name,
//     obj.email,
//     obj.isActive,
//     obj.admin
// }

// interface abcd {name: string}
// interface abcd {age: number}
// function abcd(obj: abcd) {
//     obj.name,
//     obj.age
// }


// type num = number;
// let a: num;
// a = 12;
// a = 'mors'; // error

// type value = string | number;
// let a: value;
// a = 12;
// a = 'mors';
// a = true; // error



// Classes and Objects
// Classs definition
// Constructors
// Access modifiers (Publice, private, Protected)
// Readonly Properties
// Optinal Properties
// Getters and setters
// Static members
// Abstract classes and methods

// class Device {
//     name= 'acer';
//     price= 580000;
//     categry= 'laptop';
// }

// let d1 = new Device();
// let d2 = new Device();
// let d3 = new Device();


