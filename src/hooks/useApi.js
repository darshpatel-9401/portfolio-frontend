import { useEffect, useState } from 'react'
import { api } from '../lib/api'

// const { data, loading, error } = useApi('/skills')
const useApi = (path) => {
  const [state, setState] = useState({ data: null, loading: true, error: '' })

  useEffect(() => {
    let alive = true
    api(path)
      .then((data) => alive && setState({ data, loading: false, error: '' }))
      .catch((e) => alive && setState({ data: null, loading: false, error: e.message }))
    return () => { alive = false }
  }, [path])

  return state
}

export default useApi
