import { HeaderContainer } from "./styles"

import effectLeft from "../../assets/effect-l.svg"
import effectRight from "../../assets/effect-r.svg"
import logoGithubBlog from "../../assets/logo-github-blog.svg"

export function Header(){
    return (
        <HeaderContainer>
            <img className="effect-left" src={effectLeft} />
            <img className="logo" src={logoGithubBlog} />
            <img src={effectRight} />
        </HeaderContainer>
    )
}