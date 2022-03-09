import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AppleIcon from '@mui/icons-material/Apple';
import Battery60Icon from '@mui/icons-material/Battery60';
import Battery80Icon from '@mui/icons-material/Battery80';
import Battery90Icon from '@mui/icons-material/Battery90';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useCallback, useState } from 'react';

import Nav from '.';

export default {
  component: Nav,
  excludeStories: /.*Data$/,
  title: 'Nav',
} as ComponentMeta<typeof Nav>;

export const itemsData = [
  {
    icon: <AllInclusiveIcon />,
    path: '#meta',
    subItems: [
      { icon: <FacebookIcon />, path: '#meta/facebook', text: 'Facebook' },
      { icon: <InstagramIcon />, path: '#meta/instagram', text: 'Instagram' },
    ],
    text: 'Meta',
  },
  {
    icon: <AppleIcon />,
    path: '#apple',
    text: 'Apple',
  },
  {
    icon: <GoogleIcon />,
    path: '#google',
    text: 'Google',
  },
];

export const nestedItemsData = [
  {
    icon: <BatteryFullIcon />,
    path: '#battery',
    subItems: [
      { icon: <Battery90Icon />, path: '#battery/90', text: 'Battery90' },
      {
        icon: <Battery80Icon />,
        path: '#battery/80',
        subItems: [
          {
            icon: <Battery60Icon />,
            path: '#battery/80/60',
            text: 'Battery60',
          },
        ],
        text: 'Battery80',
      },
    ],
    text: 'BatteryFull',
  },
];

export const listsData = [
  { items: itemsData, subheader: 'A' },
  {
    items: nestedItemsData,
    subheader: 'B',
  },
];

const Template: ComponentStory<typeof Nav> = (args) => {
  const { pathname: argsPathname, ...props } = args;
  const [pathname, setPathname] = useState(argsPathname || '#meta/instagram');

  const onClickItem = useCallback((path: string) => {
    setPathname(path);
  }, []);

  return <Nav {...props} pathname={pathname} onClickItem={onClickItem} />;
};

export const PermanentNav = Template.bind({});
PermanentNav.args = {
  items: itemsData,
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const TemporaryNav = Template.bind({});
TemporaryNav.args = {
  items: itemsData,
  open: true,
  title: 'ADMIN',
  width: 240,
};

export const NestedNav = Template.bind({});
NestedNav.args = {
  items: nestedItemsData,
  pathname: '#battery/90',
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const NavWithLists = Template.bind({});
NavWithLists.args = {
  lists: listsData,
  pathname: '#battery/80/60',
  sx: { display: { md: 'block', xs: 'none' } },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const ResponsiveNav = Template.bind({});
ResponsiveNav.args = {
  items: itemsData,
  sx: { display: { md: 'block', xs: 'none' } },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};
