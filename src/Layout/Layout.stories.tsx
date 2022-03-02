/* eslint-disable no-console */
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { pagesData } from '../Header/Header.stories';
import { itemsData } from '../Nav/Nav.stories';
import { WithInputs } from '../WhiteBoard/WhiteBoard.stories';
import Layout from '.';

export default {
  component: Layout,
  parameters: { layout: 'fullscreen' },
  title: 'Layout',
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  businessName: 'Meta',
  children: 'MAIN',
  headerPages: pagesData,
  headerTitle: 'Meta',
  navItems: itemsData,
  navTitle: <AlternateEmailIcon />,
  onClickItem: action('onCliickItem'),
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  businessName: 'Meta',
  children: 'MAIN',
  headerPages: pagesData,
  headerTitle: 'Meta',
  navItems: itemsData,
  navTitle: <AlternateEmailIcon />,
  navWidth: 320,
  onClickItem: action('onCliickItem'),
};

export const WithWhiteBoard = Template.bind({});
WithWhiteBoard.args = {
  businessName: 'Meta',
  children: <WithInputs {...WithInputs.args} />,
  headerPages: pagesData,
  headerTitle: 'Meta',
  navItems: itemsData,
  navTitle: <AlternateEmailIcon />,
  navWidth: 240,
  onClickItem: action('onCliickItem'),
};
