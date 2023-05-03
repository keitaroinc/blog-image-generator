import React from 'react';
import './assets/scss/style.scss';
import { CanvasWrapper, SideBar } from './components';

export const App = () => {
  return (
    <div className="row wrap g-0 vh-100">
      <div className="col-md-3 col-sm-4 d-flex flex-column flex-grow-1 overflow-auto bg-gray-light p-0">
        <SideBar />
      </div>
      <div className="col-md-9 col-sm-8">
        <CanvasWrapper />
      </div>
    </div>
  );
};