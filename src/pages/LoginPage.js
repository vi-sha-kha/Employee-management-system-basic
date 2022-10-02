


// import './App.css';
import {useForm} from "react-hook-form";
import {useState} from "react";
import { CheckPassword } from '../lib';

function Login() {
  const{register, handleSubmit, formState: { errors }}=useForm();
  const [userInfo, setUserInfo]=useState();
  const onSubmit=(data)=>{
    setUserInfo(data);
    console.log(data);
  }

  return (
    <div className="Container">
      {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" 
                   {...register('username', { required: true})} />
          </div>
          {/* <p>{errors.username?.message}</p> */}
          <error>
            {errors.username?.type === "required" && "Username is required"}
        </error>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email"
                   {...register('email', { required: true, pattern: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/})}  />
          </div>
          {/* <p>{errors.email?.message}</p> */}
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" && "Please enter a valid email"}
        </error>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password"  
            {...register('password', { required: true,  pattern: CheckPassword},)}/>
          </div>
        <error>
            {/* {errors.password?.type === "minLength" && "Password should contain atleast 8 characters"} */}
            {errors.password?.type === "required" && "Password is required"}
            {errors.password?.type === "pattern" && "Password must contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"}
        </error>
          <div class="con" m-10><button className="btn" style={{backgroundColor:"green"}}>Login</button></div>
        </div>
      </form>

    </div>
  );
}

export default Login;
