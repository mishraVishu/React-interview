import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value,e.target.password.value);
    if(e.target.email.value && e.target.password.value){
      navigate("/posts");
    }
  }

  return (
    <div>
      <form className='form' onSubmit={(e) => {handleSubmit(e)}}>
        <input type="text" name="name" placeholder='Username'/>
        <input type="text" name="email" placeholder='Email'/>
        <input type="password" name="password" placeholder='Password'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp