import { ProfileContainer, Avatar } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface UserInfoProps {
  login: string
  company: string
  followers: number
  name: string
  html_url: string
  avatar_url: string
  bio: string
}

interface ProfileProps {
  userInfo: UserInfoProps | null
}

export function Profile({ userInfo }: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar src={userInfo?.avatar_url} />
      <main>
        <header>
          <h3>{userInfo?.name}</h3>
          <a target="_blank" href={userInfo?.html_url} rel="noreferrer">
            GITHUB
            <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>{userInfo?.bio || 'Este utilizador ainda não tem uma biografia'}</p>
        <footer>
          <div>
            <FontAwesomeIcon size="lg" icon={faGithub} />
            <span>{userInfo?.login}</span>
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faBuilding} />
            <span>{userInfo?.company || 'Nenhuma'}</span>
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faUserGroup} />
            <span>
              {userInfo?.followers === 1
                ? userInfo?.followers + ' seguidor'
                : userInfo?.followers + ' seguidores'}
            </span>
          </div>
        </footer>
      </main>
    </ProfileContainer>
  )
}
