import { Fragment, useState } from "react"

const Register = ({ setAuth }) => {

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const { name, email, password } = inputs;

  const onChange = (e) => {
    // e.target.name -> select the unique "name" attribute of each input
    setInputs({...inputs, [e.target.name]: e.target.value});
  }

  const onSubmit = async(e) => {
    e.preventDefault();

    try {
      const body = { name, email, password }
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body) // body type has to match Content-Type in headers. Pass values saved in state
      })

      // the response is not JSON, so we need to parse it by using json()
      const parsedRes = await response.json()
      // store token into local storage
      localStorage.setItem("token", parsedRes.token);
      // set to true so will redirect to Dashboard page
      setAuth(true);

    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center my-5">Register</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="name" 
          className="form-control my-3"
          value={name}
          onChange={e => onChange(e)}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="email" 
          className="form-control my-3"
          value={email}
          onChange={e => onChange(e)}
        />
        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          className="form-control my-3"
          value={password}
          onChange={e => onChange(e)}
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
    </Fragment>
  )
}

export default Register;