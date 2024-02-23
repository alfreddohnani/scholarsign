import type { Prisma, Student } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StudentCreateArgs>({
  student: {
    one: {
      data: {
        email: 'String8588736',
        phone: 'String1027812',
        dateOfBirth: '2023-08-17T07:54:01.201Z',
        gender: 'String',
        profileImage: 'String',
        residency: 'String',
        status: 'String',
      },
    },
    two: {
      data: {
        email: 'String9889790',
        phone: 'String174508',
        dateOfBirth: '2023-08-17T07:54:01.201Z',
        gender: 'String',
        profileImage: 'String',
        residency: 'String',
        status: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Student, 'student'>
