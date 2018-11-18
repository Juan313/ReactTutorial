import * as types from "./actionTypes";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
// export function loadCoursesSuccess(courses) {
//   return { type: "LOAD_COURSES_SUCCESS", courses };
// }

// export function loadCourses() {
//   return function(dispatch) {
//     return CourseApi.getAllCourses()
//       .then(courses => {
//         dispatch(loadCoursesSuccess(courses));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }
