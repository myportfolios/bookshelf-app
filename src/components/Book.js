import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Thumbnail } from './BookDetail'

export default function Book({ item }) {
  const navigate = useNavigate()

  const goToBookDetailsPage = () => {
    navigate(`/book/${item?.id}`)
  }
  return (
    <ul className='list-group p-4'>
      <li
        key={item.id}
        className='cursor list-group-item'
        onClick={() => goToBookDetailsPage()}
      >
        <div>
          <Thumbnail
            src={item?.thumbnail?.lqip}
            alt={item?.thumbnail?.alt_text}
          />
          <span className='d-block'>{item.title}</span>
        </div>
      </li>
    </ul>
  )
}
