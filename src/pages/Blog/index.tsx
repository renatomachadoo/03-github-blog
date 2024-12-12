import { BlogContainer } from './styles'
import { Profile } from './components/Profile'
import { PublicationSearchForm } from './components/PublicationSearchForm'
import { Publications } from './components/Publications'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <PublicationSearchForm />
      <Publications />
    </BlogContainer>
  )
}
