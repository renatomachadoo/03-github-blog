import { BlogContainer } from './styles'
import { Profile } from './components/Profile'
import { PublicationSearchForm } from './components/PublicationSearchForm'
import { Publications } from './components/Publications'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface UserInfo {
  login: string
  company: string
  followers: number
  name: string
  html_url: string
  avatar_url: string
  bio: string
}

export function Blog() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  async function getUserInfo() {
    const response = await api.get('/users/renatomachadoo')
    setUserInfo(response.data)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <BlogContainer>
      <Profile userInfo={userInfo} />
      <PublicationSearchForm />
      <Publications />
    </BlogContainer>
  )
}
