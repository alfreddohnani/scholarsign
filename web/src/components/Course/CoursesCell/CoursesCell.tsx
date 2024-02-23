import type { FindCourses } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Courses from 'src/components/Course/Courses'

export const QUERY = gql`
  query FindCourses {
    courses {
      id
      name
      startDate
      duration
      studentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No courses yet. '}
      <Link to={routes.newCourse()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ courses }: CellSuccessProps<FindCourses>) => {
  return <Courses courses={courses} />
}
