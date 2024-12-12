import { ProfileContainer, Avatar } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar src="https://thumbs.dreamstime.com/b/logotipo-de-benfica-125014289.jpg" />
      <main>
        <header>
          <h3>Cameron Williamson</h3>
          <a target="_blank" href="youtube.com">
            GITHUB
            <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam vero
          ullam, veniam similique commodi earum autem eaque ipsam, ipsa sint
          corrupti pariatur expedita cumque quidem non modi. Cum, dignissimos
          deleniti.
        </p>
        <footer>
          <div>
            <FontAwesomeIcon size="lg" icon={faGithub} />
            <span>Renato Machado</span>
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon size="lg" icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </footer>
      </main>
    </ProfileContainer>
  )
}
