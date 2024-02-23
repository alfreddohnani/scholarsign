export const schema = gql`
  type Classroom {
    id: Int!
    maxSize: Int!
    representative: Student!
    studentId: Int!
  }

  type Query {
    classrooms: [Classroom!]! @requireAuth
    classroom(id: Int!): Classroom @requireAuth
  }

  input CreateClassroomInput {
    maxSize: Int!
    studentId: Int!
  }

  input UpdateClassroomInput {
    maxSize: Int
    studentId: Int
  }

  type Mutation {
    createClassroom(input: CreateClassroomInput!): Classroom! @requireAuth
    updateClassroom(id: Int!, input: UpdateClassroomInput!): Classroom!
      @requireAuth
    deleteClassroom(id: Int!): Classroom! @requireAuth
  }
`
