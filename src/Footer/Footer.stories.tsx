import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer from '.';

export default {
  component: Footer,
  title: 'Footer',
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default: ComponentStory<typeof Footer> = Template.bind({});

export const WithCompany: ComponentStory<typeof Footer> = Template.bind({});
WithCompany.args = {
  businessName: 'Meta',
};

export const WithChildren: ComponentStory<typeof Footer> = Template.bind({});
WithChildren.args = {
  businessName: 'Meta',
  children: (
    <ol>
      <li>Facebook</li>
      <li>Instagram</li>
    </ol>
  ),
};
