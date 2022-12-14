import React, { HTMLAttributes, ReactElement } from 'react'

interface Props extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export default function ArrowRight({ width = 9, height = 16, color='#0062ff' }: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none'>
      <path d='M2 14L8 8L2 2' stroke={color} strokeWidth='2' strokeLinecap='square' strokeLinejoin='round'/>
    </svg>
  )
}
