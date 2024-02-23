import type { Course } from '@prisma/client'

import {
  courses,
  course,
  createCourse,
  updateCourse,
  deleteCourse,
} from './courses'
import type { StandardScenario } from './courses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('courses', () => {
  scenario('returns all courses', async (scenario: StandardScenario) => {
    const result = await courses()

    expect(result.length).toEqual(Object.keys(scenario.course).length)
  })

  scenario('returns a single course', async (scenario: StandardScenario) => {
    const result = await course({ id: scenario.course.one.id })

    expect(result).toEqual(scenario.course.one)
  })

  scenario('creates a course', async (scenario: StandardScenario) => {
    const result = await createCourse({
      input: {
        name: 'String',
        startDate: '2023-08-17T07:54:46.742Z',
        duration: 1725488,
        studentId: scenario.course.two.studentId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.startDate).toEqual(new Date('2023-08-17T07:54:46.742Z'))
    expect(result.duration).toEqual(1725488)
    expect(result.studentId).toEqual(scenario.course.two.studentId)
  })

  scenario('updates a course', async (scenario: StandardScenario) => {
    const original = (await course({ id: scenario.course.one.id })) as Course
    const result = await updateCourse({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a course', async (scenario: StandardScenario) => {
    const original = (await deleteCourse({
      id: scenario.course.one.id,
    })) as Course
    const result = await course({ id: original.id })

    expect(result).toEqual(null)
  })
})
