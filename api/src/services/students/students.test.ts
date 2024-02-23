import type { Student } from '@prisma/client'

import {
  students,
  student,
  createStudent,
  updateStudent,
  deleteStudent,
} from './students'
import type { StandardScenario } from './students.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('students', () => {
  scenario('returns all students', async (scenario: StandardScenario) => {
    const result = await students()

    expect(result.length).toEqual(Object.keys(scenario.student).length)
  })

  scenario('returns a single student', async (scenario: StandardScenario) => {
    const result = await student({ id: scenario.student.one.id })

    expect(result).toEqual(scenario.student.one)
  })

  scenario('creates a student', async () => {
    const result = await createStudent({
      input: {
        email: 'String6649319',
        phone: 'String3300193',
        dateOfBirth: '2023-08-17T07:54:01.181Z',
        gender: 'String',
        profileImage: 'String',
        residency: 'String',
        status: 'String',
      },
    })

    expect(result.email).toEqual('String6649319')
    expect(result.phone).toEqual('String3300193')
    expect(result.dateOfBirth).toEqual(new Date('2023-08-17T07:54:01.181Z'))
    expect(result.gender).toEqual('String')
    expect(result.profileImage).toEqual('String')
    expect(result.residency).toEqual('String')
    expect(result.status).toEqual('String')
  })

  scenario('updates a student', async (scenario: StandardScenario) => {
    const original = (await student({ id: scenario.student.one.id })) as Student
    const result = await updateStudent({
      id: original.id,
      input: { email: 'String67840952' },
    })

    expect(result.email).toEqual('String67840952')
  })

  scenario('deletes a student', async (scenario: StandardScenario) => {
    const original = (await deleteStudent({
      id: scenario.student.one.id,
    })) as Student
    const result = await student({ id: original.id })

    expect(result).toEqual(null)
  })
})
