import type { Prisma, Classroom } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ClassroomCreateArgs>({
  classroom: {
    one: {
      data: {
        maxSize: 7373437,
        representative: {
          create: {
            email: 'String73917',
            phone: 'String6044653',
            dateOfBirth: '2023-08-17T07:56:46.312Z',
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
        maxSize: 1439764,
        representative: {
          create: {
            email: 'String915279',
            phone: 'String3329501',
            dateOfBirth: '2023-08-17T07:56:46.312Z',
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

export type StandardScenario = ScenarioData<Classroom, 'classroom'>
