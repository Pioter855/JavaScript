const person = {
    name : 'Adam',
    age : 25,
    great() {
        console.log(`Cześc jestem ${this.name}`)
    }
}

const printName = ({ name }) => {
    console.log(name)
}

printName(person)