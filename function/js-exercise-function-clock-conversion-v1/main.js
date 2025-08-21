  /**
 * Konversi jam
 * @param {number} hour - jika hour < 1 = "Hour cannot be under 1"
 * @param {"minutes" | "seconds"} params - params untuk mengconvert detik | menit
 * @returns {number} convert hour berupa number
 */
  // TODO: answer here
  // function clockConversion
  function clockConversion(hour, params) {
    let minutes = 60
    let seconds = 3600

    if (hour<1) {
      return "Hour cannot be under 1"
    } else if (params == "minutes") {
      return hour *= minutes
    } else {
      return hour *= seconds
    }
  }

  // test case 
  console.log(clockConversion(-1, "minutes"))
  console.log(clockConversion(3, "minutes"))
  console.log(clockConversion(1, "seconds"))
  
  module.exports = clockConversion;