import { useState } from 'react';
import FormInput from './components/FormInput/FormInput';
import './styles/App.css';

function App() {

  const [userinfo, setUserinfo] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage: "username should be 3-16 characters and should not include any special character",
      label: "username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email should be a valid email address",
      label: "email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      label: "birthday"
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "password should 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "password",
      pattern: "^(?=.*[A-Za-z]])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm password",
      errorMessage: "passwords do not match",
      label: "confirm password",
      pattern: userinfo.password,
      required: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setUserinfo({ ...userinfo, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {
          inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={userinfo[input.name]}
              onChange={handleChange} />
          ))
        }
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;
