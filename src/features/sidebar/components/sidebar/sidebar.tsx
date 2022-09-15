import * as React from 'react';

import {  SiDiscord, SiTwitter, SiTelegram } from 'react-icons/si';
import { RiCloseLine } from 'react-icons/ri';

import { NavigationItem } from '../navigation-item';
import { AnchorData } from '../constants/anchors';

export interface SideBarProps {
  navigationItems: AnchorData[];
  handler?: () => void;
};

export const Sidebar = (props: SideBarProps): JSX.Element => {
  const {
    navigationItems,
    handler,
  } = props;

  return (
    <div className="flex  min-h-screen">
      { handler && (
        <button className="absolute right-0 border-none cursor-pointer bg-inherit sm:flex md:hidden" onClick={() => handler()}>
          <RiCloseLine fill="white" size="32px" />
        </button>
      )}
      <div className="flex flex-col items-center px-7 pt-24 bg-slate-700 min-h-screen">
        <ul className="flex flex-col items-center">
          {navigationItems.map((item) => (
            <li>
              <NavigationItem link={item.link} icon={item.icon} description={item.description} />
            </li>
          ))}
        </ul>

        <ul className="flex flex-col items-center mt-auto">
          <li className="mb-4 cursor-pointer">
            <a className="flex items-center justify-center w-8 h-8 fill-slate-400">
              <SiDiscord fill="fill-slate-400" size="32px"/>
            </a>
          </li>

          <li className="mb-4 cursor-pointer">
            <a className="flex items-center justify-center w-8 h-8 fill-slate-400">
              <SiTelegram fill="inherit" size="32px"/>
            </a>
          </li>

          <li className="mb-4 cursor-pointer">
            <a className="flex items-center justify-center w-8 h-8 fill-slate-400">
              <SiTwitter fill="fill-slate-400" size="32px" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};