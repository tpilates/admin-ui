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
    href: '#meta',
    icon: <AllInclusiveIcon />,
    subItems: [
      { href: '#meta/facebook', icon: <FacebookIcon />, text: 'Facebook' },
      { href: '#meta/instagram', icon: <InstagramIcon />, text: 'Instagram' },
    ],
    text: 'Meta',
  },
  {
    href: '#apple',
    icon: <AppleIcon />,
    text: 'Apple',
  },
  {
    href: '#google',
    icon: <GoogleIcon />,
    text: 'Google',
  },
];

export const nestedItemsData = [
  {
    href: '#battery',
    icon: <BatteryFullIcon />,
    subItems: [
      { href: '#battery/90', icon: <Battery90Icon />, text: 'Battery90' },
      {
        href: '#battery/80',
        icon: <Battery80Icon />,
        subItems: [
          {
            href: '#battery/80/60',
            icon: <Battery60Icon />,
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

  const onChange = useCallback((path: string) => {
    setPathname(path);
  }, []);

  return <Nav {...props} pathname={pathname} onChange={onChange} />;
};

export const PermanentNav: ComponentStory<typeof Nav> = Template.bind({});
PermanentNav.args = {
  items: itemsData,
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const TemporaryNav: ComponentStory<typeof Nav> = Template.bind({});
TemporaryNav.args = {
  items: itemsData,
  open: true,
  title: 'ADMIN',
  width: 240,
};

export const NestedNav: ComponentStory<typeof Nav> = Template.bind({});
NestedNav.args = {
  items: nestedItemsData,
  pathname: '#battery/90',
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const NavWithLists: ComponentStory<typeof Nav> = Template.bind({});
NavWithLists.args = {
  lists: listsData,
  pathname: '#battery/80/60',
  sx: { display: { md: 'block', xs: 'none' } },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};

export const ResponsiveNav: ComponentStory<typeof Nav> = Template.bind({});
ResponsiveNav.args = {
  items: itemsData,
  sx: { display: { md: 'block', xs: 'none' } },
  title: 'ADMIN',
  variant: 'permanent',
  width: 240,
};
