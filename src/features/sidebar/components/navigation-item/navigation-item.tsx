import * as React from 'react';

export interface NavigationItemProps {
  link: string;
  icon: React.ReactNode;
  description: string;
  active?: boolean;
}

export const NavigationItem = (props: NavigationItemProps): JSX.Element => {

  const {
    link,
    icon,
    description,
    active,
  } = props;
  return (
    <button className={`flex flex-col justify-center items-center border-none cursor-pointer bg-inherit mb-9 ${active ? 'text-yellow-400' : 'text-slate-400'}`}>
      <div className="flex items-center justify-center w-8 h-8 text-transparent">
        {icon}
      </div>

      <p className={`text-xl mt-1 ${active ? 'text-yellow-400' : 'text-slate-400'}`}>
        {description}
      </p>
    </button>
  );
};
