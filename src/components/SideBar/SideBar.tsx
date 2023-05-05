import { CanvasBackground, CanvasGradient, CanvasIcon, CanvasHeadline, CanvasLogo } from '../';

import keitaroLogo from '../../assets/svg/keitaro-logo-full-color.svg';

export const SideBar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div data-testid="Sidebar" className={className}>
      <div className="bg-gray-light sticky-top shadow shadow-lg d-flex justify-content-center flex-column align-items-center py-5 mb-2">
        <img className="sidebar-logo mb-2" src={keitaroLogo} alt="Keitaro Logo" />
        <p className="mb-0 bg-white py-1 px-2 fs-6 fw-bold">
          Blog Image Generator
        </p>
      </div>
      <CanvasHeadline />
      <CanvasIcon />
      <CanvasBackground />
      <CanvasLogo />
      <CanvasGradient />
    </div>
  );
};
