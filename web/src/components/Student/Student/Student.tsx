import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteStudentMutationVariables,
  FindStudentById,
} from 'types/graphql'

const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: Int!) {
    deleteStudent(id: $id) {
      id
    }
  }
`

interface Props {
  student: NonNullable<FindStudentById['student']>
}

const Student = ({ student }: Props) => {
  const [deleteStudent] = useMutation(DELETE_STUDENT_MUTATION, {
    onCompleted: () => {
      toast.success('Student deleted')
      navigate(routes.students())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStudentMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete student ' + id + '?')) {
      deleteStudent({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Student {student.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{student.id}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{student.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{student.phone}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{student.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{student.lastName}</td>
            </tr>
            <tr>
              <th>Date of birth</th>
              <td>{timeTag(student.dateOfBirth)}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{student.gender}</td>
            </tr>
            <tr>
              <th>Profile image</th>
              <td>{student.profileImage}</td>
            </tr>
            <tr>
              <th>Residency</th>
              <td>{student.residency}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{student.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStudent({ id: student.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(student.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Student
