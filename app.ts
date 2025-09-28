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


// what is Constructors ?
// Constructores are 
// special functions that are executed when an object is created from a class.
// They are used to initialize the object's properties.

// constructor -> 

// class bottleMaker {
//     constructor(public name: string, public price: number) {}
// }

// let haha = new bottleMaker('Milton', 1200)


// class humanMaker{
//     constructor(public brand: string, public price: number, public color: string) {}
// }

// const hii = new humanMaker('mors', 1200, 'black')


// class Music {
    // constructor(public name: string, public artist: string, public thubnail: string = 'some thubnail.jpg', public lenth: number) { }
// }

// or

// class Music {
//     public name;
//     public artist;
//     public thubnail;
//     public lenth;
//     constructor( name: string,  artist: string,  thubnail: string = 'some thubnail.jpg',  lenth: number) {
//         this.name = name;
//         this.artist = artist;
//         this.thubnail = thubnail;
//         this.lenth = lenth;
//     }
// }

// new Music('mor mor', 'mors', 'mors.jpg', 123)

// class BottleMaker{
//     private name = 'Mors';
// }

// class MatalBottleMaker extends BottleMaker {
//     public mateial = 'metal';
// }

// let b1 = new MatalBottleMaker()

// class BottleMaker{
//     protected name = 'Mors';
// }

// class MatalBottleMaker extends BottleMaker {
//     public mateial = 'metal';
//     // changeNmae() {this.name = 'Ruki';} // error on the private 
//     changeNmae() {this.name = 'Ruki';} // no errror on the line for protected
// }

// let b1 = new MatalBottleMaker()

// class User{
//     constructor(public readonly ncame: String) {}

//     changeName() {
//         this.name = 'Mors';
//     }   
// }

// let u1 = new User('ruki')
// u1.changeName()



// introduction to Functions

// function abcd(name: string, cd: (val: string) => void ): void {
// }
// abcd('mors', (val) => {
//     console.log(val);
// })

// function abcd(name: string, age: number, cd: (val: string) => void) {
//     cd(name);
// }

// abcd("mors", 20, (val) => {
//     console.log(val);
// })

// function acd(name: string, age: number, gender?: string) {

// }
// acd('mors', 20);
// acd('mors', 20, 'male');

// function abc(...args: number[]) {}

// abc(1,2,3,4,5,6,7,8,9,10)

// ts fnc signature
// function abc(a: string): void;
// function abc(a: string, b:number): number;

// function abc(a: any, b?: any) {
//     if (typeof a === 'string' && typeof b === undefined) {
//         console.log('hello jeee');    
//     }
//     if (typeof a === 'string' && typeof b === 'number') {
//         return 1324;
//     } else throw new Error('Something went wrong')

// }

// Generics
// Generic Functions
// Generic interfaces
// Generic classes


// function logger(a:string) {} // error
// function logger(a:any) {} // no help 


// function logger<T>(a:T) {}
// logger<string>('mors');
// logger<number>(12);
// logger<boolean>(true);



// function abc<T>(a: T, b: string) {}
// abc<number>(12, 'mors');
// abc<string>('mors', 'mors');
// abc<boolean>(true, 'mors');

// interface haha<T>{
//     name: string,
//     age: number,
//     key: T
// }

// function abc<T>(obj: haha<T>) {}

// abc({name: 'mors', age: 20, key: 12})
// abc({name: 'mors', age: 20, key: 'mors'})
// abc({name: 'mors', age: 20, key: true})
// abc({name: 'mors', age: 20, key: null})


// class BottleMaker<T>{
//     constructor(public name: string, public key: T) {}  
// }

// new BottleMaker('mors', 12)
// new BottleMaker('mors', 'mors')


// Modules
