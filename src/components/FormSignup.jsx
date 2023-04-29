import React from "react"
import useForm from "../hooks/useForm"
import validate from "../helpers/validateUser"


const FormSignup = ({ submitForm }) => {

    const { values, handleChange, handleSubmit, errors } = useForm(submitForm, validate)

    return (
        <div className="form-content">
            <form
                className="form"
                onSubmit={handleSubmit}
            >
                <h1>Get started with us!</h1>
                <div className="form-inputs">
                    <label
                        htmlFor="username"
                        className="form-label"
                    >
                        username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-input"
                        placeholder="enter your username..."
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label
                        htmlFor="email"
                        className="form-label"
                    >
                        e-mail:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="enter your email..."
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                        password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-input"
                        placeholder="enter your password..."
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label
                        htmlFor="confirmPassword"
                        className="form-label"
                    >
                        confirm password:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="form-input"
                        placeholder="confirm password..."
                        value={values.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>
                <button
                    className="form-input-btn"
                    type="submit"
                >
                    sign up
                </button>
                <span
                    className="form-input-login"
                >
                    already have account?
                    login <a href="#">here</a>
                </span>
            </form>
        </div>

    )
}

export default FormSignup