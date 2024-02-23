import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeleteClassroomMutationVariables,
  FindClassroomById,
} from 'types/graphql'

const DELETE_CLASSROOM_MUTATION = gql`
  mutation DeleteClassroomMutation($id: Int!) {
    deleteClassroom(id: $id) {
      id
    }
  }
`

interface Props {
  classroom: NonNullable<FindClassroomById['classroom']>
}

const Classroom = ({ classroom }: Props) => {
  const [deleteClassroom] = useMutation(DELETE_CLASSROOM_MUTATION, {
    onCompleted: () => {
      toast.success('Classroom deleted')
      navigate(routes.classrooms())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteClassroomMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete classroom ' + id + '?')) {
      deleteClassroom({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Classroom {classroom.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{classroom.id}</td>
            </tr>
            <tr>
              <th>Max size</th>
              <td>{classroom.maxSize}</td>
            </tr>
            <tr>
              <th>Student id</th>
              <td>{classroom.studentId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editClassroom({ id: classroom.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(classroom.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Classroom
