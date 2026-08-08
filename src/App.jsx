import {useForm} from 'react-hook-form'

function App() {
  const{
    register,
    handleSubmit, 
    watch,
    reset,
    formState: {errors, isSubmitting},
  } = useForm();

  async function onSubmit(data) {
    await new Promise ((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  }
 
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Username: </label>
            <input 
            {...register('userName',{
              required: "Username is required!",
              minLength: {value: 3, message: "Min len should be 3"},
              maxLength: {value: 20, message: "Max len should be 20"},
              pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Letters only, no spaces"
            }})}/>
            <br />
            <br />
            <label>Password:</label>
            <input type='password'
            {...register('password', {
              required: "Password is required",
              minLength: {value: 6, message: "Min len should be 6"}
            })}/>
            <br />
            <br />
            <label>Confirm Password:</label>
            <input type='password'
            {...register('confirmPassword', {
              required: "Confirm Password is required",
              validate: (value) => value === watch("password") || "Passwords do not match"
            })}/>
            <br />
            <br />
            <label>Email:</label>
            <input type="eMail"
            {...register('eMail', {
              required: "Email is required",
              pattern: {value: /^\S+@\S+\.\S+$/}
            })}/>
            <br />
            <br />
            <button disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            {errors.userName && <p>{errors.userName.message}</p>}
            {errors.password && <p>{errors.password.message}</p>}
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            {errors.eMail && <p>{errors.eMail.message}</p>}
          </div>
        </form>
      </div>
    </>
  )
}

export default App