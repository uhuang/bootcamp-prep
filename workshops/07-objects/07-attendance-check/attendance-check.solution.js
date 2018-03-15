function attendanceCheck(day) {
  let presentStudents = [];

  // loop through the students in classRoom
  for (let i = 0; i < classRoom.length; i++) {

    // store each student object in a variable
    let studentObj = classRoom[i];

    // each object has one key, which is the name of the student
    let studentName = Object.keys(studentObj)[0];

    // the only value in studentObj is the array of attendance objects
    let attendanceObjs = studentObj[studentName];

    // loop through the array of attendance objects
    for (let j = 0; j < attendanceObjs.length; j++) {

      // store each attendance object in a variable
      let attendanceObj = attendanceObjs[j];

      // each attendance has one key, which is the name of a day of the week
      let dayName = Object.keys(attendanceObj)[0];

      // if the dayName is the same as the day parameter...
      // ...and the value in the attendanceObj is true...
      if (dayName === day && attendanceObj[dayName]){

        // ...the student was present on that day!
        presentStudents.push(studentName);
      }
    }
  }

  return presentStudents;
}
