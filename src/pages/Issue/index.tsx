import { IssueContainer, IssueHeader } from './styles'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Issue() {
  const { id } = useParams()

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
        <h3>JavaScript data types and data structures</h3>
        <footer>
          <div>
            <FontAwesomeIcon size="lg" icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faComment} />
            <span>5 Comentários</span>
          </div>
        </footer>
      </IssueHeader>
    </IssueContainer>
  )
}
