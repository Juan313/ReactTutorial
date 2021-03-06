import React, { PropTypes } from "react";
import * as courseActions from "../../actions/courseActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.state = {
    //   course: { title: "" }
    // };
    // this.onTitleChange = this.onTitleChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }

  // onTitleChange(event) {
  //   const course = this.state.course;
  //   course.title = event.target.value;
  //   this.setState({ course: course });
  // }

  // onClickSave() {
  //   // alert(`Saving ${this.state.course.title}`);
  //   // this.props.dispatch(courseActions.createCourse(this.state.course));
  //   this.props.actions.createCourse(this.state.course);
  // }
  // courseRow(course, index) {
  //   return <div key={index}> {course.title}</div>;
  // }
  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        {/* {this.props.courses.map(this.courseRow)} */}
        {/* <h2>Add courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" onClick={this.onClickSave} /> */}
        {/* <CourseList courses={courses} /> */}
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // determined by how it's named in the reducer
    // ownProps: component's own props; useful for accessing routing related props, injected by React Router
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
