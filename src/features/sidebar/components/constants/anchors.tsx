import * as React from 'react';
import TestIcon from '../icons/icon';

export interface ActiveIconProps {
  /**
   * The content.
   */
  children: React.ReactElement;
  active: boolean;
}

/**
 * The `ActiveLink` component is used send the `active` property to its child
 * if the current pathname matches the `href` prop.
 */
export const ActiveIcon = (props: ActiveIconProps) => {
  const {
    children,
    active,
  } = props;

  const child = React.Children.only(children);

  return (
    <>
      {React.cloneElement(child, {
        active: active,
      })}
    </>
  );
};

export interface AnchorData {
  link: string;
  icon: React.ReactNode;
  description: string;
}

export const navigationAnchors: AnchorData[] = [
  {
    link: '/',
    description: 'main',
    icon: <TestIcon fill="transparent" />
  },

  {
    link: '/',
    description: 'jackpot',
    icon: <TestIcon fill="transparent" />
  },

  {
    link: '/table',
    description: 'coin flip',
    icon: <TestIcon fill="transparent" />
  },

  {
    link: '/',
    description: 'mines',
    icon: <TestIcon fill="transparent" />
  },

  {
    link: '/',
    description: 'plinko',
    icon: <TestIcon fill="transparent" />
  },

  {
    link: '/',
    description: 'wheel',
    icon: <TestIcon fill="transparent" />
  },
];