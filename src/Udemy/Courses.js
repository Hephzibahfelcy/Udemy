import React,{Component} from 'react'
import Course from '../Udemy/Course'


const CoursesData=[
    {
        "image":"https://i.udemycdn.com/course/240x135/2365628_0b60_7.jpg",
        "title":"React, NodeJS, Express, MangoDB",
        "Author":"Maximillian",
        "Description":"Have an overall idea about React"
    },

    {
        "image":"https://i.udemycdn.com/course/240x135/2640372_5b44_3.jpg",
        "title":"Complete React Developer in 2020",
        "Author":"Andrei Neagoie",
        "Description":"Be a complete React Developer in 2020"
    },

    
    {
        "image":"https://i.udemycdn.com/course/240x135/1793828_7999.jpg",
        "title":"Docker Kubernetes: The Complete Guide",
        "Author":"Stephen Grider ",
        "Description":"Work together to Automate the MAnagement"
    }


]


const Courses = () =>
{
  let CoursesList = CoursesData.map(course =>{
return(
    <Course image={course.image} title={course.title} Author={course.Author} Description={course.Description}/>
 
);
})
return(
  <div>{CoursesList}
  
  </div>
)

}

export default Courses;