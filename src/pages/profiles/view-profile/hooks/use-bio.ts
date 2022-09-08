import { useQuery } from '@tanstack/react-query'

export const useBio = (id?: string) => {
  const { isLoading, data: bio } = useQuery(['bio', id], async () => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    const res = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text')
    return res.text()
  }, {
    enabled: !!id
  })

  return {
    isLoading, bio
  }
}
