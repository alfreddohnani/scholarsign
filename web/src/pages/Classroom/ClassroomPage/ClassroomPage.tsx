import ClassroomCell from 'src/components/Classroom/ClassroomCell'

type ClassroomPageProps = {
  id: number
}

const ClassroomPage = ({ id }: ClassroomPageProps) => {
  return <ClassroomCell id={id} />
}

export default ClassroomPage
