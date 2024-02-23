import StudentCell from 'src/components/Student/StudentCell'

type StudentPageProps = {
  id: number
}

const StudentPage = ({ id }: StudentPageProps) => {
  return <StudentCell id={id} />
}

export default StudentPage
