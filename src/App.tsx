import React from 'react';

import './assets/scss/style.scss';
import { CanvasWrapper, SideBar } from './components';

export const App = () => {
  return (
    <div className="container-fluid image-generator-layout">
      <div className="row wrap">
        <div className="col-md-3 col-sm-4 scrollable">
          <SideBar />
        </div>
        <div className="col-md-9 col-sm-8 fixed">
          <CanvasWrapper />
        </div>
      </div>
    </div>
  );
};
