import React, { HTMLAttributes, ReactElement } from 'react'

interface Props extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export default function Card({ width = 40, height = 40, color='#d5d5dc' }: Props): ReactElement {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none'>
      <rect x='1' y='7' width='38' height='25' rx='6' stroke={color} strokeWidth='2'/>
      <line y1='17' x2='40' y2='17' stroke={color} strokeWidth='2'/>
    </svg>
  )
}
