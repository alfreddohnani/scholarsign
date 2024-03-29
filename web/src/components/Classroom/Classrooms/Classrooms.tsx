import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Classroom/ClassroomsCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeleteClassroomMutationVariables,
  FindClassrooms,
} from 'types/graphql'

const DELETE_CLASSROOM_MUTATION = gql`
  mutation DeleteClassroomMutation($id: Int!) {
    deleteClassroom(id: $id) {
      id
    }
  }
`

const ClassroomsList = ({ classrooms }: FindClassrooms) => {
  const [deleteClassroom] = useMutation(DELETE_CLASSROOM_MUTATION, {
    onCompleted: () => {
      toast.success('Classroom deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteClassroomMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete classroom ' + id + '?')) {
      deleteClassroom({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Max size</th>
            <th>Student id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {classrooms.map((classroom) => (
            <tr key={classroom.id}>
              <td>{truncate(classroom.id)}</td>
              <td>{truncate(classroom.maxSize)}</td>
              <td>{truncate(classroom.studentId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.classroom({ id: classroom.id })}
                    title={'Show classroom ' + classroom.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editClassroom({ id: classroom.id })}
                    title={'Edit classroom ' + classroom.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete classroom ' + classroom.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(classroom.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClassroomsList
