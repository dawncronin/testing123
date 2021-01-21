import React from 'react'

import FormInput from './form-input.component'
import CustomButton from './custom-button.component'

import { signInWithGoogle, auth } from '../firebase/firebase.utils'
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state

        try {
            //sign in if the user originally signed up with email and password (not google)
            await auth.signInWithEmailAndPassword(email, password)
            
            this.setState({email: '', password: ''})

        } catch (error) {
            console.timeLog(error)
        }

    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({[name]: value})

    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an accout</h2>
                <span> Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email'
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange}
                        label='Email'
                    />

                    <FormInput 
                        type='password'
                        name="password" 
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange}
                        label="password"
                    />


                    <CustomButton type="submit" onClick={this.handleSubmit}> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn