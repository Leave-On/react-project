import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default  {
    title: 'pages/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args as object} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'type here',
    value: 'text'
};