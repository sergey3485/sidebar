import  * as React from 'react';
import { RiMenu2Line } from 'react-icons/ri';

import { navigationAnchors } from '../constants/anchors';
import { Sidebar } from '../sidebar';

export const ModalSidebar = (): JSX.Element => {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <div className="flex sm:hidden">
      <button className=" h-max flex items-center justify-center border-none cursor-pointer bg-inherit" onClick={() => setIsModalOpen(true)}>
        <RiMenu2Line />
      </button>

      {isModalOpen && (
        <>
          <div className="fixed top-0 left-0 w-full h-full opacity-50 z-20 bg-black" />
            <div className="fixed top-0 left-0 z-30">
              <Sidebar navigationItems={navigationAnchors} handler={() => setIsModalOpen(false)} />
            </div>
        </>
      )}
    </div>
  );
};