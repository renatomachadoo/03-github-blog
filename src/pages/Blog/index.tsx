import { BlogContainer } from './styles'
import { Profile } from './components/Profile'
import { PublicationSearchForm } from './components/PublicationSearchForm'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <PublicationSearchForm />
    </BlogContainer>
  )
}
