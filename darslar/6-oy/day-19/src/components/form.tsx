import { useForm } from "react-hook-form"

const Form = () => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm()
  const submit = (data: string)  =>{
    console.log(data);
    
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" name="name" placeholder="enter"/>
    </form>
  )
}

export default Form