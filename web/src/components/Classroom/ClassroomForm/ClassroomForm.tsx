import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditClassroomById, UpdateClassroomInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormClassroom = NonNullable<EditClassroomById['classroom']>

interface ClassroomFormProps {
  classroom?: EditClassroomById['classroom']
  onSave: (data: UpdateClassroomInput, id?: FormClassroom['id']) => void
  error: RWGqlError
  loading: boolean
}

const ClassroomForm = (props: ClassroomFormProps) => {
  const onSubmit = (data: FormClassroom) => {
    props.onSave(data, props?.classroom?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormClassroom> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="maxSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Max size
        </Label>

        <NumberField
          name="maxSize"
          defaultValue={props.classroom?.maxSize}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="maxSize" className="rw-field-error" />

        <Label
          name="studentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Student id
        </Label>

        <NumberField
          name="studentId"
          defaultValue={props.classroom?.studentId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="studentId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ClassroomForm
