import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Book({ item }) {
  const navigate = useNavigate()

  const goToBookDetailsPage = () => {
    navigate(`/book/${item?.id}`)
  }
  return (
    <li key={item.id} className='cursor' onClick={() => goToBookDetailsPage()}>
      <span className='font-weight-bold pr-2'>{item.id}.</span> {item.title}
    </li>
  )
}
