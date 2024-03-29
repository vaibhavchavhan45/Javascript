//destructuring of objects
const course = {
    courseName : "BE in Extc",
    courseDuration : "4yrs",
    courseInstructor : "Rohit sir"
}
console.log(course.courseName);
            //OR
const {courseInstructor} = course     //Extraxt the value of courseInstructor from course object
console.log(courseInstructor);
            //OR
const {courseDuration : time} = course //Extraxt the value of courseDuration from course object also change the key name courseDuration to time(destructuring of objects)
console.log(time);