import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import GlobalLayout from '../layout'
import Nothing from '../page/Nothing'
import Setting from '../page/Setting'
import Test from '../page/Test'
import About from '../page/About'
export const routes: RouteObject[] = [
  {
    element: <GlobalLayout />,
    children: [
      // { index: true, element: <Navigate to={'/champion_history'} /> },
      { path: 'about', element: <About /> },
      { index: true, path: 'setting', element: <Setting /> },
      { path: 'test', element: <Test /> },
      { path: 'nothing', element: <Nothing /> },
      { path: '*', element: <Navigate to={'/nothing'} replace /> }
    ]
  }
]
