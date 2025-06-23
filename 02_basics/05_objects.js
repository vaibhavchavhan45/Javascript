//Destructuring of objects
const course = {
    courseName : "BE in Extc",
    courseDuration : "4yrs",
    courseInstructor : "Rohit sir"
}
console.log(course.courseName);
            //OR
const {courseInstructor} = course     //Extract the value of courseInstructor from course object
console.log(courseInstructor);
            //OR
const {courseDuration : time} = course // Extract the value of courseDuration from course object and store it in a variable named 'time' (object destructuring) but, original key of object(courseDuration) doesn't replaced by the new variable(time)
console.log(time);

//verifying the above comment is true or not
console.log(Objects.keys(course));
