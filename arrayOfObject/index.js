// contoh array of object
let cars = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date("2017-01-03"),
        capacity: 7,
    },
    {
        color: "red",
        type: "station wagon",
        registration: new Date("2018-03-03"),
        capacity: 5,
    }
];


// membuat array of object dari array multidimensional
let activities = [
    ["Study", 9],
    ["Eat", 1],
    ["Play Game", 2],
    ["Sleep", 8],
]

// menggunakan map, kemudian memasukkan ke dalam obj
let arrObj = activities.map(activity => {
    let obj = {}

    obj.name = activity[0]
    obj.duration = activity[1]

    return obj
});

console.log(arrObj)

// melakukan looping
cars.forEach(car => {
    car.size = "medium"
    console.log(car.type);
    console.log(car.size);
});

