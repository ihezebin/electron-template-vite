import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import { routes } from './routes'

// https://reactrouter.com/en/6.21.1/route/route#index
const Router = () => {
  useEffect(() => {
    return () => {}
  }, [])

  return useRoutes(routes)
}
export default Router
