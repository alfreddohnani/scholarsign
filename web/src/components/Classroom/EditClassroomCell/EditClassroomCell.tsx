import type { EditClassroomById, UpdateClassroomInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ClassroomForm from 'src/components/Classroom/ClassroomForm'

export const QUERY = gql`
  query EditClassroomById($id: Int!) {
    classroom: classroom(id: $id) {
      id
      maxSize
      studentId
    }
  }
`
const UPDATE_CLASSROOM_MUTATION = gql`
  mutation UpdateClassroomMutation($id: Int!, $input: UpdateClassroomInput!) {
    updateClassroom(id: $id, input: $input) {
      id
      maxSize
      studentId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ classroom }: CellSuccessProps<EditClassroomById>) => {
  const [updateClassroom, { loading, error }] = useMutation(
    UPDATE_CLASSROOM_MUTATION,
    {
      onCompleted: () => {
        toast.success('Classroom updated')
        navigate(routes.classrooms())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateClassroomInput,
    id: EditClassroomById['classroom']['id']
  ) => {
    updateClassroom({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Classroom {classroom?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ClassroomForm
          classroom={classroom}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
