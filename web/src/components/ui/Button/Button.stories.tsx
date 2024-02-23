// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Button> = (args) => {
//   return <Button {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export const base = () => {
  return <Button>I am a button</Button>
}

export const primary = () => {
  return <Button intent="primary">I am a button</Button>
}

export const outlined = () => {
  return <Button intent="outlined">I am a button</Button>
}

export const loadingOutlined = () => {
  return (
    <Button loading intent="outlined">
      I am a button
    </Button>
  )
}

export const fullWidth = () => {
  return (
    <Button intent="primary" className="w-full">
      I am a button
    </Button>
  )
}

export const small = () => {
  return (
    <Button intent="primary" size="sm">
      I am a button
    </Button>
  )
}

export const loadingPrimary = () => {
  return (
    <Button loading intent="primary">
      I am a button
    </Button>
  )
}

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>
