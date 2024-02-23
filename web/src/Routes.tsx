// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ScaffoldLayout} title="Classrooms" titleTo="classrooms" buttonLabel="New Classroom" buttonTo="newClassroom">
        <Route path="/classrooms/new" page={ClassroomNewClassroomPage} name="newClassroom" />
        <Route path="/classrooms/{id:Int}/edit" page={ClassroomEditClassroomPage} name="editClassroom" />
        <Route path="/classrooms/{id:Int}" page={ClassroomClassroomPage} name="classroom" />
        <Route path="/classrooms" page={ClassroomClassroomsPage} name="classrooms" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Courses" titleTo="courses" buttonLabel="New Course" buttonTo="newCourse">
        <Route path="/courses/new" page={CourseNewCoursePage} name="newCourse" />
        <Route path="/courses/{id:Int}/edit" page={CourseEditCoursePage} name="editCourse" />
        <Route path="/courses/{id:Int}" page={CourseCoursePage} name="course" />
        <Route path="/courses" page={CourseCoursesPage} name="courses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Students" titleTo="students" buttonLabel="New Student" buttonTo="newStudent">
        <Route path="/students/new" page={StudentNewStudentPage} name="newStudent" />
        <Route path="/students/{id:Int}/edit" page={StudentEditStudentPage} name="editStudent" />
        <Route path="/students/{id:Int}" page={StudentStudentPage} name="student" />
        <Route path="/students" page={StudentStudentsPage} name="students" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
