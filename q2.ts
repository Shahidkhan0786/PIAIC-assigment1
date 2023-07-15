// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const Name:string = "shahid";

const titleCase = (name:string)=>{
    return Name.split('')[0].toUpperCase() + Name.slice(1).toLowerCase()
}

console.log(`in lowercase ${Name.toLocaleLowerCase()}`)
console.log(`in uppercase ${Name.toLocaleUpperCase()}`)
console.log("in titleCase "+ titleCase(Name))

