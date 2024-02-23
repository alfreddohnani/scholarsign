import type { Prisma, Course } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CourseCreateArgs>({
  course: {
    one: {
      data: {
        name: 'String',
        startDate: '2023-08-17T07:54:46.765Z',
        duration: 3503694,
        students: {
          create: {
            email: 'String5795110',
            phone: 'String7935363',
            dateOfBirth: '2023-08-17T07:54:46.765Z',
            gender: 'String',
            profileImage: 'String',
            residency: 'String',
            status: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        startDate: '2023-08-17T07:54:46.765Z',
        duration: 19613,
        students: {
          create: {
            email: 'String7686578',
            phone: 'String4384035',
            dateOfBirth: '2023-08-17T07:54:46.765Z',
            gender: 'String',
            profileImage: 'String',
            residency: 'String',
            status: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Course, 'course'>
