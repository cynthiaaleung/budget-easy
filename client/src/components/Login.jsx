import { Fragment } from "react"

const Login = ({ setAuth }) => {
  return (
    <Fragment>
      <h1 className="text-center my-5">Login</h1>
      <form>
        <input 
          type="email" 
          name="email" 
          placeholder="email" 
          className="form-control my-3"/>
        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          className="form-control my-3"/>
        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </Fragment>
  )
}

export default Login;