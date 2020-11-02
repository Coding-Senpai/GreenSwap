import { useState } from 'react'

export function useForm<T>(callback: () => void, initialState: T) {
  const [values, setValues] = useState(initialState)

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSubmit = event => {
    event.preventDefault()
    callback()
  }

  return {
    onChange,
    onSubmit,
    values,
  }
}
