import React, {useState} from 'react'
import styled from 'styled-components'
import {AiFillCheckCircle} from 'react-icons/ai'
import {ImEyeBlocked, ImEye} from 'react-icons/im'

const Input = () => {
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const checkEmail = (e) => {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        // 형식에 맞는 경우 true 리턴
        console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
        setEmail(regExp.test(e.target.value));
    }
    const checkPassword = () => {
        setPassword(!password)
    }
    return (
        <Wrap>
            <div className='input-wrap'>
                <span>E-mail</span>
                <div className='email-wrap'>
                    <input
                        type="email"
                        placeholder='E-mail'
                        className='email'
                        onChange={checkEmail}/> {
                        email === false
                            ? <AiFillCheckCircle className='email-check-icon'/>
                            : <AiFillCheckCircle className='email-check-icons'/>
                    }
                </div>
                <span className='password-title'>Password</span>
                <div className='password-wrap'>
                    {password?(
                        <>
                        <input type="" placeholder="Password" className='password'/>
                                <ImEyeBlocked className='password-check-icons' onClick={checkPassword}/>
                        </>
                    ):(
                        <>
                        <input type="password" placeholder="Password" className='password'/>
                                <ImEye className='password-check-icon' onClick={checkPassword}/>
                        </>
                    )}
                </div>
            </div>
        </Wrap>
    )
}

export default Input;
const Wrap = styled.div `
    width: 30%;
    margin: 0 auto ;
    .input-wrap{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        padding:20px;
        border-radius: 5px;
        span{
            display: flex;
        }
        .password-title{
            margin-top: 20px;
        }
        .email-wrap{
            display: flex;
            position: relative;
            .email{
                width: 100%;
                height: 30px;
            }
            .email-check-icon{
                position: absolute;
                right: 5px;
                top: 10px;
                color: #f2f2f2;
            }
            .email-check-icons{
                position: absolute;
                right: 5px;
                top: 10px;
                color: black;
            }
        }
        .password-wrap{
            display: flex;
            position: relative;
            .password{
                width: 100%;
                height: 30px;
            }
            .password-check-icon{
                position: absolute;
                right: 5px;
                top: 10px;
                color: #D8D8D4;
                cursor: pointer;
            }
            .password-check-icons{
                position: absolute;
                right: 5px;
                top: 10px;
                color: black;
                cursor: pointer;
            }
        }
    }
`
