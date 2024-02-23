export const schema = gql`
  type Course {
    id: Int!
    name: String!
    startDate: DateTime!
    duration: Int!
    students: Student!
    studentId: Int!
  }

  type Query {
    courses: [Course!]! @requireAuth
    course(id: Int!): Course @requireAuth
  }

  input CreateCourseInput {
    name: String!
    startDate: DateTime!
    duration: Int!
    studentId: Int!
  }

  input UpdateCourseInput {
    name: String
    startDate: DateTime
    duration: Int
    studentId: Int
  }

  type Mutation {
    createCourse(input: CreateCourseInput!): Course! @requireAuth
    updateCourse(id: Int!, input: UpdateCourseInput!): Course! @requireAuth
    deleteCourse(id: Int!): Course! @requireAuth
  }
`
