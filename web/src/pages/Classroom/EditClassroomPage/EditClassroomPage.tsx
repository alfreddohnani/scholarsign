import EditClassroomCell from 'src/components/Classroom/EditClassroomCell'

type ClassroomPageProps = {
  id: number
}

const EditClassroomPage = ({ id }: ClassroomPageProps) => {
  return <EditClassroomCell id={id} />
}

export default EditClassroomPage
