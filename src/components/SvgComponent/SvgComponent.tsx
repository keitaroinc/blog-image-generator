import React from 'react';

interface SvgComponentProps {
  svgCode: string;
}

export const SvgComponent: React.FC<SvgComponentProps> = ({ svgCode }) => {
  const createMarkup = (code: string): { __html: string } => ({ __html: code });

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="100%" height="100%">
          <div dangerouslySetInnerHTML={createMarkup(svgCode)} />
        </foreignObject>
      </svg>
    </div>
  );
};