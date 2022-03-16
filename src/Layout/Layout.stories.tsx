import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { useCallback, useState } from 'react';

import { pagesData } from '../Header/Header.stories';
import { itemsData, listsData } from '../Nav/Nav.stories';
import type { LinkHandler } from '../types';
import { WithInputs } from '../WhiteBoard/WhiteBoard.stories';
import Layout from '.';

export default {
  component: Layout,
  parameters: { layout: 'fullscreen' },
  title: 'Layout',
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => {
  const [pathname, setPathname] = useState('#apple');

  const onChange = useCallback<LinkHandler>((href) => {
    setPathname(href);
  }, []);

  return <Layout {...args} pathname={pathname} onChange={onChange} />;
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

export const WithLists = Template.bind({});
WithLists.args = {
  businessName: 'Meta',
  children: <WithInputs {...WithInputs.args} />,
  headerPages: pagesData,
  headerTitle: 'Meta',
  navLists: listsData,
  navTitle: <AlternateEmailIcon />,
  navWidth: 240,
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
