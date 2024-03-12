import React, { useState, useEffect } from 'react'
import Books from './Books'
import { Pagination } from 'react-bootstrap'

import { fetchArtworks } from '../apis'
import { SearchComponent, FilterComponent } from '../components/common'

export default function BookShelf() {
  const [books, setBooks] = useState([])
  const [activePage, setActivePage] = useState(1)
  const [isSearched, setIsSearched] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBooks = await fetchArtworks(activePage)
      setBooks(fetchedBooks)
    }
    fetchData()
  }, [activePage])

  const handlePageChange = async (pageNumber) => {
    setActivePage(pageNumber)
  }

  const handleSearch = async (args) => {
    if (args.trim() === '') {
      // If the input field is empty, fetch the initial data again
      const fetchedBooks = await fetchArtworks(activePage)
      setBooks(fetchedBooks)
      setActivePage(1)
    } else {
      // If there's a search term, filter the books
      const filteredBooks = books.data.filter((item) => {
        const parts = item.title
          .split('\n')
          .map((part) => part.trim())
          .pop()
        return parts.toLowerCase().includes(args.toLowerCase())
      })

      if (filteredBooks.length > 0) {
        setBooks({ ...books, data: filteredBooks })
        setIsSearched(true)
      } else {
        setBooks({ ...books, data: [] })
      }

      setActivePage(1)
    }
  }

  const onFilter = (value) => {
    const filteredBooks = books.data.filter((item) => {
      const searchTerms = value
        .toLowerCase()
        .split(',')
        .map((term) => term.trim())

      return searchTerms.some((term) =>
        item?.category_titles?.[0]?.toLowerCase().includes(term)
      )
    })
    if (filteredBooks.length > 0) {
      setBooks({ ...books, data: filteredBooks })
    } else {
      setBooks({ ...books, data: [] })
    }
    setIsFiltered(true)
  }

  const onClearSearch = async () => {
    // Fetch initial data
    const fetchedBooks = await fetchArtworks(1)
    setBooks(fetchedBooks)
    setActivePage(1)
    setIsSearched(false)
    setIsFiltered(false)
  }
  const showResetBtnAndMsg = isSearched && isFiltered && !books?.data?.length
  return (
    <>
      <h1 className='display-1'>Book Shelf</h1>
      <SearchComponent onSearch={handleSearch} />
      <FilterComponent onFilter={onFilter} />
      {showResetBtnAndMsg && <span onClick={onClearSearch}>Clear search</span>}
      <Books books={books} />
      {showResetBtnAndMsg && <h5>No matching search or filter criteria</h5>}
      <Pagination className='px-4 justify-content-center mt-6'>
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

//Modern Art', 'Essentials'
/**
 * Prints and Drawings
 * Modern Art', 'Essentials
 * Contemporary Art
 * painting", "european painting
 * Painting and Sculpture of Europe", "Essentials
 */
