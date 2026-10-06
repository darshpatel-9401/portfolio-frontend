import React from 'react'

// Shows "Loading...", an error, or an empty message. Shows the real content when there is data.
const LoadState = ({ loading, error, empty, emptyText = 'Nothing here yet.', children }) => {
  if (loading) return <p className='text-center text-gray-400'>Loading...</p>
  if (error) return <p className='text-center text-red-400' role='alert'>{error}</p>
  if (empty) return <p className='text-center text-gray-400'>{emptyText}</p>
  return children
}

export default LoadState
