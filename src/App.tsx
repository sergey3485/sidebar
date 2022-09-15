import React from 'react';
import './App.css';

import { Sidebar } from './features/sidebar/components/sidebar';
import { navigationAnchors } from './features/sidebar/components/constants/anchors';
import { ModalSidebar } from './features/sidebar/components/modal-sidebar';

function App() {
  return (
    <div className="flex w-full min-h-screen">
      <div className="hidden sm:flex">
        <Sidebar navigationItems={navigationAnchors} />
      </div>
      <ModalSidebar />

      <div className="flex">
        112123412241235235321234321
      </div>
    </div>
  );
}

export default App;
