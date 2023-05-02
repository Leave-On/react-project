import { Story } from '@storybook/react'
import 'app/styles/index.scss'
import { Suspense } from 'react'

export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
)