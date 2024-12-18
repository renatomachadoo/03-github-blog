import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Blog } from './pages/Blog'
import { Issue } from './pages/Issue'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/issue/:id" element={<Issue />} />
      </Route>
    </Routes>
  )
}
