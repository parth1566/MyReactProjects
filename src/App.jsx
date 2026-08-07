import {useForm} from 'react-hook-form'

function App() {
  const{
    register,
    handleSubmit, 
    formState: {errors, isSubmitting},
  } = useForm();
 
  return (
    <>
      <div>
        <form >
          <div>
            <label>Username: </label>
            <input 
            {...register('userName',{
              required: "Username is required",
              minLength: {value: 3, message: "Min len should be 3"},
              maxLength: {value: 20, message: "Max len should be 20"},
              pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Letters only, no spaces"
            }})}/>
            <br />
            <button>Submit</button>
            {errors.userName && <p>{errors.userName.message}</p>}
          </div>
        </form>
      </div>
    </>
  )
}

export default App