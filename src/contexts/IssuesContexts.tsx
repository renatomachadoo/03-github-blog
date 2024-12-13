import { ReactNode, useState, useCallback, useEffect } from 'react'

import { createContext } from 'use-context-selector'

import { api } from '../lib/axios'

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

interface IssueContextType {
  issues: Issue[]
  issuesAmount: number
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const issuesAmount = issues.length

  const fetchIssues = useCallback(async (query?: string) => {
    let fetchUrl = '/search/issues?q=repo:renatomachadoo/03-github-blog'

    if (query) {
      fetchUrl = `/search/issues?q=${query}%20repo:renatomachadoo/03-github-blog`
    }

    const response = await api.get(fetchUrl)
    if (response.data) {
      setIssues(response.data.items)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        issuesAmount,
        fetchIssues,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
