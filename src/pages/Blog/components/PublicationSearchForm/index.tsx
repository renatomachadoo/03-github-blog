import { PublicationSearchFormContainer } from './styles'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Type of each input of form
const searchFormSchema = z.object({
  query: z.string(),
})

// Creating new complex type with input types
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function PublicationSearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    console.log(data.query)
  }

  return (
    <PublicationSearchFormContainer
      onSubmit={handleSubmit(handleSearchTransactions)}
    >
      <div>
        <span>Publicações</span>
        <small>6 publicações</small>
      </div>
      <input
        type="text"
        placeholder="Busque por publicações"
        {...register('query')}
      />
    </PublicationSearchFormContainer>
  )
}
