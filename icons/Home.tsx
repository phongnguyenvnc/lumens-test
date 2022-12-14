import React, { HTMLAttributes, ReactElement } from 'react'

interface Props extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export default function Home({ width = 32, height = 32, color='#d5d5dc' }: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none'>
      <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Group' transform='translate(1.000000, 1.000000)' stroke={color} strokeWidth='2'>
          <path d='M12.3727,0.82033 L12.3727,0.82035 L12.3782,0.81642 C13.9142,-0.27214 16.0858,-0.27214 17.6218,0.81642 L17.6218,0.81644 L17.6273,0.82033 L28.281,8.2627 C29.3836,9.0339 30,10.2098 30,11.4454 L30,26.0148 C30,28.1362 28.1052,30 25.6541,30 L4.34588,30 C1.89475,30 0,28.1362 0,26.0148 L0,11.4454 C0,10.2098 0.61637,9.0339 1.71901,8.2627 L12.3727,0.82033 Z' id='Path'></path>
        </g>
      </g>
    </svg>
  )
}
