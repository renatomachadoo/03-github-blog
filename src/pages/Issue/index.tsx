import { IssueContainer, IssueHeader, IssueBody } from './styles'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { formatDistanceToNow } from 'date-fns'
import { pt } from 'date-fns/locale'

import Markdown from 'react-markdown'

import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'

import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../contexts/IssuesContexts'

interface IssueUser {
  login: string
}

interface Issue {
  id: number
  number: number
  title: string
  created_at: string
  body: string
  url: string
  comments: number
  user: IssueUser
}

export function Issue() {
  const { id } = useParams()
  const [issue, setIssue] = useState<Issue | undefined>()

  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  useEffect(() => {
    function getIssueByNumber() {
      const issueFound = issues.find((issue) => issue.number === Number(id))
      setIssue(issueFound)
    }
    getIssueByNumber()
  }, [id, issues])

  return (
    <IssueContainer>
      <IssueHeader>
        <div className="header">
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </Link>
          <a
            href={`https://github.com/renatomachadoo/03-github-blog/issues/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            Ver no github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h3>{issue?.title}</h3>
        <footer>
          <div>
            <FontAwesomeIcon size="lg" icon={faGithub} />
            <span>{issue?.user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faCalendarDay} />
            <span>
              {issue?.created_at &&
                formatDistanceToNow(new Date(issue?.created_at), {
                  locale: pt,
                })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faComment} />
            <span>
              {issue?.comments === 1
                ? issue.comments + ' Comentário'
                : issue?.comments + ' Comentários'}
            </span>
          </div>
        </footer>
      </IssueHeader>
      <IssueBody>
        <Markdown>{issue?.body}</Markdown>
      </IssueBody>
    </IssueContainer>
  )
}
