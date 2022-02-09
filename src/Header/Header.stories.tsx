import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from '.';

export default {
  component: Header,
  title: 'Header',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLogo = Template.bind({});
WithLogo.args = { logo: 'Meta' };

export const WithPages = Template.bind({});
WithPages.args = {
  logo: 'Meta',
  pages: [
    { href: '#', value: 'Products' },
    { href: '#', value: 'Pricings' },
  ],
};

export const WithSrc = Template.bind({});
WithSrc.args = {
  logo: 'Meta',
  pages: [
    { href: '#', value: 'Products' },
    { href: '#', value: 'Pricings' },
  ],
  src: 'https://via.placeholder.com/160',
};
