import type { FindStudents } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Students from 'src/components/Student/Students'

export const QUERY = gql`
  query FindStudents {
    students {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No students yet. '}
      <Link to={routes.newStudent()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ students }: CellSuccessProps<FindStudents>) => {
  return <Students students={students} />
}
