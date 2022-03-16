import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from '.';

export default {
  component: Header,
  excludeStories: /.*Data$/,
  title: 'Header',
} as ComponentMeta<typeof Header>;

export const pagesData = [
  {
    href: '#facebook',
    text: 'Facebook',
  },
  {
    href: '#instagram',
    text: 'Instagram',
  },
];

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default: ComponentStory<typeof Header> = Template.bind({});
Default.args = {
  title: 'Meta',
};

export const WithPages: ComponentStory<typeof Header> = Template.bind({});
WithPages.args = {
  onOpen: action('onOpen'),
  pages: pagesData,
  title: 'Meta',
};
