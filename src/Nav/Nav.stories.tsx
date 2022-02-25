/* eslint-disable no-console */
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Nav from '.';

export default {
  component: Nav,
  excludeStories: /.*Data$/,
  title: 'Nav',
} as ComponentMeta<typeof Nav>;

export const itemsData = [
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

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const PermanentNav = Template.bind({});
PermanentNav.args = {
  items: itemsData,
  onClickItem: action('onClickItem'),
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const TemporaryNav = Template.bind({});
TemporaryNav.args = {
  items: itemsData,
  onClickItem: action('onClickItem'),
  open: true,
  title: 'ADMIN',
  width: 240,
};

export const NestedNav = Template.bind({});
NestedNav.args = {
  items: [
    ...itemsData,
    {
      icon: <TwitterIcon />,
      path: '#',
      subItems: itemsData,
      text: 'Twitter',
    },
  ],
  onClickItem: action('onClickItem'),
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const ResponsiveNav = Template.bind({});
ResponsiveNav.args = {
  items: itemsData,
  onClickItem: action('onClickItem'),
  sx: { display: { md: 'block', xs: 'none' } },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};
