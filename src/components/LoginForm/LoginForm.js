import {useEffect, useState, useCallback, useMemo} from "react";
import {FormInput} from "./FormInput";

export const LoginForm = () => {
    const [user, setUser] = useState('')
    const [isUserError, setIsUserError] = useState(false)
    const [email, setEmail] = useState('')
    const [isEmailError, setIsEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [isPasswordError, setIsPasswordError] = useState(false)
    const [isFormError, setIsFormError] = useState(true)

    const [arr, setArr] = useState([1,2,3,4,5,6])

    const loginHandler = (e) => {
        e.preventDefault()

        // const payload = {
        //     user: user,
        //     email: email,
        //     password: password,
        // }
    }

    useEffect(() => {
        setIsUserError(!!(user.length && user.length < 4))
    }, [user]);

    useEffect(() => {
        setIsEmailError(!!(email.length && !String(email).toLowerCase().match(/^\S+@\S+\.\S+$/)))
    }, [email]);

    useEffect(() => {
        setIsPasswordError(!!(password.length && password.length < 8))
    }, [password]);

    useEffect(() => {
        setIsFormError(isUserError || isEmailError || isPasswordError || !user.length || !email.length || !password.length)
    }, [user, email, password, isUserError, isEmailError, isPasswordError]);

    const setUserValue = useCallback((value) => {
        setUser(value)
    }, [])
    const setEmailValue = useCallback((value) => {
        setEmail(value)
    }, [])
    const setPasswordValue = useCallback((value) => {
        setPassword(value)
    }, [])

    const changeArr = useCallback(() => {
        setArr([1,3,5,7,9])
    }, [])

    const totalSum = useMemo(() => {
        console.log('total sum recalc')
        return arr.reduce((acc, val) => acc + val, 0)
    }, [arr])

    return(
        <form action="" style={{width: '300px', height: '300px', border: '1px solid black', padding: '10px'}} onSubmit={loginHandler}>

            <h2 style={{marginTop: 0}}>Форма регистрации</h2>

            <FormInput
                name="name"
                type="text"
                value={user}
                setValue={setUserValue}
                isError={isUserError}
            />

            <FormInput
                name="email"
                type="email"
                value={email}
                setValue={setEmailValue}
                isError={isEmailError}
            />

            <FormInput
                name="password"
                type="password"
                value={password}
                setValue={setPasswordValue}
                isError={isPasswordError}
            />
            <div>
                <button
                    type="submit"
                    disabled={isFormError}
                >Зарегистрироваться</button>
            </div>

            <div>Сумма входного массива: {totalSum}</div>
            <button onClick={changeArr}>Изменить массив</button>
        </form>
    )
}