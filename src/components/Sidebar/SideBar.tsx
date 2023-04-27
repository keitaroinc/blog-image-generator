import './SideBar.scss';

export const SideBar = () => {
  return (
    <div className="side-bar-layout">
      <div className="side-bar-header text-center sticky-top">
        <img className="side-bar-logo" src={'keitaroLogo'} />
        <p className="side-bar-title">Blog Image Generator</p>
      </div>
    </div>
  );
};
