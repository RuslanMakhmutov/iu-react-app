import {useState} from "react";

export const Form = (props) => {
    const {buttonText} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(null)

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        if (e.target.value.length < 6) {
            setPasswordError('Пароль не должен быть короче 6 символов')
        } else {
            setPasswordError(null)
        }

        setPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()

        props.submitHandler({email, password})
    }

    return (
        <form onSubmit={submitHandler} className="form">
            <div>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={emailChangeHandler} />
            </div>
            <div>
                <label>Пароль</label>
                <input type="password" name="password" value={password} onChange={passwordChangeHandler} />
                {passwordError && <div className="error">{passwordError}</div>}
            </div>

            <div>
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    );
}