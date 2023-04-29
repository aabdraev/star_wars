export default function validateUser(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "username required"
    } else if (!/^[A-Za-z0-9]{3,16}$/i.test(values.username)) {
        errors.username = "username should be 3-16 characters and should not include any special character"
    }

    if (!values.email) {
        errors.email = "email required"
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9>-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = "email adress is invalid"
    }

    if (!values.password) {
        errors.password = "password required"
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/i.test(values.password)) {
        errors.password = "password should be 8-20 characters and include at least 1 letter, 1 number"
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "please confirm password"
    } else if (
        values.password !== values.confirmPassword
    ) {
        errors.confirmPassword = "passwords do not match"
    }

    return errors
}