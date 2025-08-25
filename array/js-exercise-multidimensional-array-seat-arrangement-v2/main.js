function travelSeat(passengers, seatColumn) {
    let result = []
    let seat = []

    if (seatColumn <= 0) {
        return "Invalid number"
    } else if (passengers.length === 0) {
        return "Oops! tickets not sold!"
    } 

    passengers.sort()
    passengers.forEach(penumpang => {
        seat.push(penumpang)
        if(seat.length == seatColumn) {
            result.push(seat)
            seat = []
        }
    });

    let seatAvaliable = seatColumn - seat.length
    // console.log(seatAvaliable)
    if (seat.length < seatColumn && seat.length > 0) {
        for (let i = 0; i < seatAvaliable; i++) {
            seat.push("Seat available")
        }
        result.push(seat)
    }
    // console.log(seat)
    return result; // TODO: replace this
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 2));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat