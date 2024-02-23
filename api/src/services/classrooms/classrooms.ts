import type {
  QueryResolvers,
  MutationResolvers,
  ClassroomRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const classrooms: QueryResolvers['classrooms'] = () => {
  return db.classroom.findMany()
}

export const classroom: QueryResolvers['classroom'] = ({ id }) => {
  return db.classroom.findUnique({
    where: { id },
  })
}

export const createClassroom: MutationResolvers['createClassroom'] = ({
  input,
}) => {
  return db.classroom.create({
    data: input,
  })
}

export const updateClassroom: MutationResolvers['updateClassroom'] = ({
  id,
  input,
}) => {
  return db.classroom.update({
    data: input,
    where: { id },
  })
}

export const deleteClassroom: MutationResolvers['deleteClassroom'] = ({
  id,
}) => {
  return db.classroom.delete({
    where: { id },
  })
}

export const Classroom: ClassroomRelationResolvers = {
  representative: (_obj, { root }) => {
    return db.classroom.findUnique({ where: { id: root?.id } }).representative()
  },
}
