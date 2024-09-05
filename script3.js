const schedule = [
    {
        day: "Monday",
        times: {
          morning: { subject: "Mathematics", teacher: "Mr. Lio" },
          afternoon: { subject: "Physics", teacher: "Mrs. Sulaimon" },
          evening: { subject: "Chemistry", teacher: "Mrs. Bello" }
        }
      },
      {
        day: "Tuesday",
        times: {
          morning: { subject: "English", teacher: "Ms. Zainub" },
          afternoon: { subject: "Biology", teacher: "Mr. Ramadan" },
          evening: { subject: "History", teacher: "Mrs. Joseph" }
        }
      },
      {
        day: "Wednesday",
        times: {
          morning: { subject: "Computer Science", teacher: "Mr. Alfred" },
          afternoon: { subject: "Geography", teacher: "Ms. Ifeoluwa" },
          evening: { subject: "Civic Education", teacher: "Ms. Opemiposi" }
        }
      },
      {
        day: "Thursday",
        times: {
          morning: { subject: "CCA", teacher: "Mr. Lateef" },
          afternoon: { subject: "Physical Education", teacher: "Ms. Ayoola" },
          evening: { subject: "Social Studies", teacher: "Mr. johnson" }
        }
      },
      {
        day: "Friday",
        times: {
          morning: { subject: "Economics", teacher: "Mr. David" },
          afternoon: { subject: "Sociology", teacher: "Mrs. Ayegbami" },
          evening: { subject: "Further Mathematics", teacher: "Mr. philip" }
        }
      }
];

function getSchedule(day, time) {
    for (let i = 0; i < schedule.length; i++) {
       
        if (schedule[i].day === day) {
         let times = schedule[i].times

         if (times[time]) {
            let subject = times[time].subject;
            let teacher = times[time].teacher;

            return "On " + day + ", in the " + time + ", the subject is " + subject + " and the teacher is " + teacher + ".";
         } else {
            return "Incorrect input."
         }
        }
    }
}


function displaySchedule() {
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const result = getSchedule(day, time);
    document.getElementById("result").innerText = result;
}
