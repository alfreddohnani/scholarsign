import type { EditStudentById, UpdateStudentInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StudentForm from 'src/components/Student/StudentForm'

export const QUERY = gql`
  query EditStudentById($id: Int!) {
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
const UPDATE_STUDENT_MUTATION = gql`
  mutation UpdateStudentMutation($id: Int!, $input: UpdateStudentInput!) {
    updateStudent(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ student }: CellSuccessProps<EditStudentById>) => {
  const [updateStudent, { loading, error }] = useMutation(
    UPDATE_STUDENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Student updated')
        navigate(routes.students())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateStudentInput,
    id: EditStudentById['student']['id']
  ) => {
    updateStudent({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Student {student?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StudentForm
          student={student}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
