import { PublicationSearchFormContainer } from './styles'

import { useContextSelector } from 'use-context-selector'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IssuesContext } from '../../../../contexts/IssuesContexts'

// Type of each input of form
const searchFormSchema = z.object({
  query: z.string(),
})

// Creating new complex type with input types
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function PublicationSearchForm() {
  const { issuesAmount, fetchIssues } = useContextSelector(
    IssuesContext,
    (context) => ({
      issuesAmount: context.issuesAmount,
      fetchIssues: context.fetchIssues,
    }),
  )

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    fetchIssues(data.query)
  }

  return (
    <PublicationSearchFormContainer
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <div>
        <span>Publicações</span>
        <small>
          {issuesAmount === 1
            ? issuesAmount + ' publicação'
            : issuesAmount + ' publicações'}
        </small>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </PublicationSearchFormContainer>
  )
}
