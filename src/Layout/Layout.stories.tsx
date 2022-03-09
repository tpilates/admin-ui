import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useCallback, useState } from 'react';

import { pagesData } from '../Header/Header.stories';
import { itemsData } from '../Nav/Nav.stories';
import { WithInputs } from '../WhiteBoard/WhiteBoard.stories';
import Layout from '.';

export default {
  component: Layout,
  parameters: { layout: 'fullscreen' },
  title: 'Layout',
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => {
  const [pathname, setPathname] = useState('#apple');

  const onClickItem = useCallback((path: string) => {
    setPathname(path);
  }, []);

  return <Layout {...args} pathname={pathname} onClickItem={onClickItem} />;
};

export const Default = Template.bind({});
Default.args = {
  businessName: 'Meta',
  children: 'MAIN',
  headerPages: pagesData,
  headerTitle: 'Meta',
  navItems: itemsData,
  navTitle: <AlternateEmailIcon />,
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
};
