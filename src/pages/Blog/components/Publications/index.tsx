import { PublicationsContainer, Publication } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContexts'
import { useContextSelector } from 'use-context-selector'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

export function Publications() {
  const navigate = useNavigate()

  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  function navigateToIssuePage(number: number) {
    navigate(`/issue/${number}`)
  }

  return (
    <PublicationsContainer>
      {issues.map((issue) => {
        return (
          <Publication
            onClick={() => navigateToIssuePage(issue.number)}
            key={issue.id}
          >
            <header>
              <span>{issue.title}</span>
              <small>
                {formatDistanceToNow(new Date(issue.created_at), {
                  locale: pt,
                })}
              </small>
            </header>
            <p>{issue.body}</p>
          </Publication>
        )
      })}
    </PublicationsContainer>
  )
}
