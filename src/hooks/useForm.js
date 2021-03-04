import { useEffect, useState } from "react";

const useForm = (handleHobbies, validateForm) => {
  const initValues = {
    name: ''
  }
  
  const [values, setValues] = useState(initValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleChange = event => {
    const values = event.target.value
    setValues({
      ...values,
      name: values
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setErrors(validateForm(values))
    setIsSubmitting(true);
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      handleHobbies(values.name)
    }
  }, [errors])


  return {
    values,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useForm;