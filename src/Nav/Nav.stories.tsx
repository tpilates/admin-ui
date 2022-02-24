/* eslint-disable no-console */
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Nav from '.';

export default {
  component: Nav,
  title: 'Nav',
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

const items = [
  {
    icon: <AllInclusiveIcon />,
    path: '#',
    subItems: [
      { icon: <FacebookIcon />, path: '#', text: 'Facebook' },
      { icon: <InstagramIcon />, path: '#', text: 'Instagram' },
    ],
    text: 'Meta',
  },
  {
    icon: <AppleIcon />,
    path: '#',
    text: 'Apple',
  },
  {
    icon: <GoogleIcon />,
    path: '#',
    text: 'Google',
  },
];

export const PermanentNav = Template.bind({});
PermanentNav.args = {
  items,
  onClickItem: (path) => {
    console.log(path);
  },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const TemporaryNav = Template.bind({});
TemporaryNav.args = {
  items,
  onClickItem: (path) => {
    console.log(path);
  },
  open: true,
  title: 'ADMIN',
  width: 240,
};

export const NestedNav = Template.bind({});
NestedNav.args = {
  items: [
    {
      icon: <AllInclusiveIcon />,
      path: '#',
      subItems: [
        { icon: <FacebookIcon />, path: '#', text: 'Facebook' },
        { icon: <InstagramIcon />, path: '#', text: 'Instagram' },
      ],
      text: 'Meta',
    },
    {
      icon: <AppleIcon />,
      path: '#',
      text: 'Apple',
    },
    {
      icon: <GoogleIcon />,
      path: '#',
      subItems: items,
      text: 'Google',
    },
  ],
  onClickItem: (path) => {
    console.log(path);
  },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const ResponsiveNav = Template.bind({});
ResponsiveNav.args = {
  items,
  onClickItem: (path) => {
    console.log(path);
  },
  sx: { display: { md: 'block', xs: 'none' } },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};
