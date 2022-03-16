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

export const Default = Template.bind({});
Default.args = {
  onOpen: action('onOpen'),
  title: 'Meta',
};

export const WithPages = Template.bind({});
WithPages.args = {
  onOpen: action('onOpen'),
  pages: pagesData,
  title: 'Meta',
};
