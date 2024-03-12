import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchArtworkById } from '../apis'
import { useNavigate } from 'react-router-dom'
export default function BookDetail() {
  const [book, setBook] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const res = await fetchArtworkById(id)
      setBook(res?.data)
    }
    fetchData()
  }, [])
  const thumbnail = book?.thumbnail || {}
  const { alt_text, height, lqip, width } = thumbnail
  return (
    <div>
      <h2>Book Detail</h2>
      <span className='back-link cursor' onClick={() => navigate('/')}>
        <span>{'<--'} </span>back
      </span>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span>Title:</span> {book?.artist_title}
        </div>
        <div className='align-book-detail'>
          <span>Artist Display:</span> {book?.artist_display}
        </div>
        <div className='align-book-detail'>
          <span>Date:</span> {book?.date_display}
        </div>
        <div className='align-book-detail'>
          <span>Reference Number:</span> {book?.main_reference_number}
        </div>
        <div className='align-book-detail'>
          <Thumbnail src={lqip} alt={alt_text} width={300} height={300} />
        </div>
      </div>
    </div>
  )
}
export function Thumbnail({ altText, src, width = '100', height = '100' }) {
  return <img src={src} alt={altText} width={width} height={height} />
}

// title,artist_display,date_display,main_reference_number, thubnail, dimensions
