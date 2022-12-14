import React, { HTMLAttributes, ReactElement } from 'react'

interface Props extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export default function Portrait({ width = 9, height = 16, color='#171725' }: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none'>
      <path d='M7 14L1 8L7 2' stroke={color} strokeWidth='2' strokeLinecap='square' strokeLinejoin='round'/>
    </svg>


  )
}
