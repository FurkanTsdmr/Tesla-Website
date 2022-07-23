import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

function Login() {
    const [email, setEmail] = useState('')
    return (
        <div className='login'>
            <div className='login__header'>
                <div className='login__logo'>
                    <Link>
                        <img src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png' alt='' />
                    </Link>
                </div>
                <div className='login__language'>
                    <LanguageOutlinedIcon /><span>en-US</span>
                </div>
            </div>
            <div className="login__info">
                <h1>Sign In</h1>
                <form className='login__form'>
                    <label htmlFor="emai">Email Address</label>
                    <input
                        type="email"
                        id='email'
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default Login