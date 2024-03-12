import React from 'react'
import Book from './Book'

export default function Books({ books }) {
  return books?.data?.map((item) => <Book item={item} />)
}
