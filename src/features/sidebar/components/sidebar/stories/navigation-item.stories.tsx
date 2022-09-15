import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Sidebar, SideBarProps } from '../sidebar';
import { navigationAnchors } from '../../constants/anchors';


export default {
  title: 'feature/sidebar/navigation/NavigationItem',
  component: Sidebar,
} as Meta;

const Template: Story<SideBarProps> = (args) => <Sidebar {...args} />;

export const sidebar = Template.bind({});

sidebar.args = {
  navigationItems: navigationAnchors,
};



