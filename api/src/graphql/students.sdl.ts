export const schema = gql`
  type Student {
    id: Int!
    email: String!
    phone: String!
    firstName: String
    lastName: String
    dateOfBirth: DateTime!
    gender: String!
    profileImage: String!
    residency: String!
    status: String!
    courses: [Course]!
    Classroom: [Classroom]!
  }

  type Query {
    students: [Student!]! @requireAuth
    student(id: Int!): Student @requireAuth
  }

  input CreateStudentInput {
    email: String!
    phone: String!
    firstName: String
    lastName: String
    dateOfBirth: DateTime!
    gender: String!
    profileImage: String!
    residency: String!
    status: String!
  }

  input UpdateStudentInput {
    email: String
    phone: String
    firstName: String
    lastName: String
    dateOfBirth: DateTime
    gender: String
    profileImage: String
    residency: String
    status: String
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student! @requireAuth
    updateStudent(id: Int!, input: UpdateStudentInput!): Student! @requireAuth
    deleteStudent(id: Int!): Student! @requireAuth
  }
`
