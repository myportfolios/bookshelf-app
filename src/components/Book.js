import React from 'react'

export default function Book({ item }) {
  return (
    <li key={item.id} className=''>
      <span className='font-weight-bold pr-2'>{item.id}.</span> {item.title}
    </li>
  )
}
