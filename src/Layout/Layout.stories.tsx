/* eslint-disable no-console */
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Layout from '.';

export default {
  component: Layout,
  parameters: { layout: 'fullscreen' },
  title: 'Layout',
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

const items = [
  {
    icon: <AllInclusiveIcon />,
    subItems: [
      { icon: <FacebookIcon />, text: 'Facebook' },
      { icon: <InstagramIcon />, text: 'Instagram' },
    ],
    text: 'Meta',
  },
  {
    icon: <AppleIcon />,
    path: '/',
    text: 'Apple',
  },
  {
    icon: <GoogleIcon />,
    path: '/',
    text: 'Google',
  },
];

const pages = [
  { path: '#', text: 'Facebook' },
  { path: '#', text: 'Instagram' },
];

export const Default = Template.bind({});
Default.args = {
  businessName: 'Meta',
  children: 'MAIN',
  headerPages: pages,
  headerTitle: 'Meta',
  navItems: items,
  navTitle: <AlternateEmailIcon />,
  onClickItem: (path) => {
    console.log(path);
  },
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  businessName: 'Meta',
  children: 'MAIN',
  headerPages: pages,
  headerTitle: 'Meta',
  navItems: items,
  navTitle: <AlternateEmailIcon />,
  navWidth: 320,
  onClickItem: (path) => {
    console.log(path);
  },
};
