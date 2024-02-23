import type { FindStudentById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Student from 'src/components/Student/Student'

export const QUERY = gql`
  query FindStudentById($id: Int!) {
    student: student(id: $id) {
      id
      email
      phone
      firstName
      lastName
      dateOfBirth
      gender
      profileImage
      residency
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Student not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ student }: CellSuccessProps<FindStudentById>) => {
  return <Student student={student} />
}
