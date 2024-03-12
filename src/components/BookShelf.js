import React, { useState, useEffect } from 'react'
import Books from './Books'
import { Pagination } from 'react-bootstrap'

import { fetchArtworks, fetchArtworkById } from '../apis'

export default function BookShelf() {
  const [books, setBooks] = useState([])
  const [activePage, setActivePage] = useState(1)
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBooks = await fetchArtworks(activePage)
      setBooks(fetchedBooks)
    }
    fetchData()
  }, [limit])

  const handlePageChange = async (pageNumber) => {
    setActivePage(pageNumber)
    const fetchedData = await fetchArtworks(pageNumber)
    setBooks(fetchedData)
  }
  console.log('books: ', books)
  return (
    <>
      <Books books={books} />
      <Pagination className='px-4'>
        {books?.data?.map((_, index) => {
          return (
            <Pagination.Item
              onClick={() => {
                handlePageChange(index + 1)
              }}
              key={index + 1}
              active={index + 1 === activePage}
            >
              {index + 1}
            </Pagination.Item>
          )
        })}
      </Pagination>
    </>
  )
}
