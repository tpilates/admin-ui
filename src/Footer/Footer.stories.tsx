import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer from '.';

export default {
  component: Footer,
  title: 'Footer',
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

export const WithCompany = Template.bind({});
WithCompany.args = {
  company: 'Meta',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: (
    <ol>
      <li>Facebook</li>
      <li>Instagram</li>
    </ol>
  ),
  company: 'Meta',
};
