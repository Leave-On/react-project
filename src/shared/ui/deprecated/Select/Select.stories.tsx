import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args as object} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Choose this',
    options: [
        { value: '123', content: '123' },
        { value: 'asdf', content: 'asdf' },
        { value: 'geese', content: 'geese' }
    ]
};
