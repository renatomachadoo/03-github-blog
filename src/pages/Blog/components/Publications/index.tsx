import { PublicationsContainer, Publication } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContexts'
import { useContextSelector } from 'use-context-selector'
import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'

export function Publications() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  return (
    <PublicationsContainer>
      {issues.map((issue) => {
        return (
          <Publication key={issue.id}>
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
