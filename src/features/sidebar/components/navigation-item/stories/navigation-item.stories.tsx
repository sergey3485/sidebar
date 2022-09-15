import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { NavigationItem, NavigationItemProps } from '../navigation-item';
import { navigationAnchors } from '../../constants/anchors';


export default {
  title: 'feature/sidebar/navigation/NavigationItem',
  component: NavigationItem,
} as Meta;

const Template: Story<NavigationItemProps> = (args) => <NavigationItem {...args} />;

export const navigationItem = Template.bind({});

navigationItem.args = {
	link: navigationAnchors[0].link,
	icon: navigationAnchors[0].icon,
	description: navigationAnchors[0].description,
};

