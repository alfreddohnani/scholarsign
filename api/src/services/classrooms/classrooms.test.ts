import type { Classroom } from '@prisma/client'

import {
  classrooms,
  classroom,
  createClassroom,
  updateClassroom,
  deleteClassroom,
} from './classrooms'
import type { StandardScenario } from './classrooms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('classrooms', () => {
  scenario('returns all classrooms', async (scenario: StandardScenario) => {
    const result = await classrooms()

    expect(result.length).toEqual(Object.keys(scenario.classroom).length)
  })

  scenario('returns a single classroom', async (scenario: StandardScenario) => {
    const result = await classroom({ id: scenario.classroom.one.id })

    expect(result).toEqual(scenario.classroom.one)
  })

  scenario('creates a classroom', async (scenario: StandardScenario) => {
    const result = await createClassroom({
      input: { maxSize: 7891612, studentId: scenario.classroom.two.studentId },
    })

    expect(result.maxSize).toEqual(7891612)
    expect(result.studentId).toEqual(scenario.classroom.two.studentId)
  })

  scenario('updates a classroom', async (scenario: StandardScenario) => {
    const original = (await classroom({
      id: scenario.classroom.one.id,
    })) as Classroom
    const result = await updateClassroom({
      id: original.id,
      input: { maxSize: 4253869 },
    })

    expect(result.maxSize).toEqual(4253869)
  })

  scenario('deletes a classroom', async (scenario: StandardScenario) => {
    const original = (await deleteClassroom({
      id: scenario.classroom.one.id,
    })) as Classroom
    const result = await classroom({ id: original.id })

    expect(result).toEqual(null)
  })
})
