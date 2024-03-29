import type { FindClassroomById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Classroom from 'src/components/Classroom/Classroom'

export const QUERY = gql`
  query FindClassroomById($id: Int!) {
    classroom: classroom(id: $id) {
      id
      maxSize
      studentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Classroom not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ classroom }: CellSuccessProps<FindClassroomById>) => {
  return <Classroom classroom={classroom} />
}
