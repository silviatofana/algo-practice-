// function timeConversion(s) {
//    // Write your code here
//
//    let amPM = s.charAt(8)
//    let militaryHour = '';
//
//    if (amPM == 'A') {
//        if (s.substring(0,2) == '12')
//           militaryHour = '00';
//        else {
//           militaryHour = s.substring(0, 2)
//        }
//    } else { // PM
//       if (s.substring(0,2) == '12') {
//           militaryHour = s.substring(0,2)
//       } else {
//           console.log(parseInt(s.substring(0,2), 10) + 12)
//           militaryHour = parseInt(s.substring(0,2), 10) + 12;
//       }
//    }
//    console.log(militaryHour + s.substring(2,8))
//    return militaryHour + s.substring(2, 8)
// }

function timeConversion(s) {
    // Write your code here
    // if hour is 12am, return 00
    // if hour is between 1am to 11:59am, return 1 to 11:59


    // if time is 12pm, return 12
    // if hour is between 1pm to 11:59pm, return 1 + 12 to 11:59 + 12

    //  Military Hour
    let militaryHour;
    let hour = s.substring(0, 2);
    let amPM = s.charAt(8)

    if (amPM === 'A') {
        if (hour === '12') {
            militaryHour = '00';
        } else {
            militaryHour = hour
        }
    } else {
        if (hour === '12') {
            militaryHour = '12';
        } else {
            militaryHour = parseInt(hour, 10) + 12
        }
    }
    console.log(militaryHour + s.substring(2, 8))
    return militaryHour + s.substring(2, 8)
}

timeConversion('07:05:45PM')
timeConversion('12:00:00AM')
timeConversion('12:00:00PM')