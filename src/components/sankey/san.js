import React from 'react';

const DemoSankeyLink = ({ sourceX, sourceY, targetX, targetY, linkWidth, linkColor }) => {
  return (
    <path
      d={`M${sourceX},${sourceY}L${targetX},${targetY}`}
      strokeWidth={linkWidth}
      stroke={linkColor}
      fill="none"
    />
  );
};

const DemoSankeyNode = ({ x, y, width, height, nodeColor, label }) => {
  console.log(label)
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={nodeColor} />
      <text x={x + width / 2} y={y + height / 2} textAnchor="middle" dominantBaseline="central" fill="#fff">
        {label}
      </text>
    </g>
  );
};


export { DemoSankeyLink, DemoSankeyNode };
