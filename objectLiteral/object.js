let john = ["John", 20, "USA"]
console.log(john[1])

let johnObj = {
    name: "John",
    age: 20,
    country: "USA"
}
console.log(johnObj.age)

for (const key in johnObj) {
    const element = johnObj[key];
    console.log(element)
}