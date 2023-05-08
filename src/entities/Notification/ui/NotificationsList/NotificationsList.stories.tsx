import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { NotificationsList } from './NotificationsList';

export default {
    title: 'entities/Notification/NotificationsList',
    component: NotificationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        withMock,
        StoreDecorator({})
    ]
} as ComponentMeta<typeof NotificationsList>;

const Template: ComponentStory<typeof NotificationsList> = (args) => <NotificationsList { ...args } />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Title',
                    description: 'You got this notification'

                },
                {
                    id: '2',
                    title: 'Title 2',
                    description: 'You got this notification'

                },
                {
                    id: '3',
                    title: 'Title 3',
                    description: 'You got this notification'

                }
            ],
        },
    ],
}
