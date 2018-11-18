import React, { PropTypes } from "react";
import CourseListRow from "./CourseListRow";

const CourseList = ({ courses }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => (
          // console.log("x is " + x);
          <CourseListRow key={course.id} course={course} />
        ))}
      </tbody>
    </table>
  );
};

// const CourseList = ({ courses }) => {
//   return (
//     <div>
//       {/* {[1, 2, 3].map(x => {
//         <CourseListRow key={x} />;
//       })} */}
//       {courses.map(course => {
//         // console.log("x is " + x);
//         return <CourseListRow key={course.id} course={course} />;
//       })}

//       <CourseListRow key={5} />
//       <CourseListRow key={6} />
//     </div>
//   );
// };
CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};
export default CourseList;
