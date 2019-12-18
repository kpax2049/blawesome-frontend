import React from 'react';

const ScrollPanel = props => {
  return (
    <div style={{ flex: 1, position: 'relative' }} {...props}>
      <div
        className="scroll-panel-inner"
        style={{
          background: props.backgroundcolor || null,
          position: 'absolute',
          overflow: props.overflow || 'auto',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'stretch',
          alignItems: 'stretch',
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
export default ScrollPanel;
