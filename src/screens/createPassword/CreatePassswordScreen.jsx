import React from 'react'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
import LargeButton from '../../components/largeButton/LargeButton'
import Title from '../../components/title/Title'
import './createPassword.css'

const CreatePassswordScreen = () => {
  return (
    <>
    <Header /> 
    <div className='container'>
        <div id='createPassword'>
            <Title title="Create Password" />
            <p>Create password to secure your account</p>
            <Input label="Enter Password" placeH="Enter Password here" type="password" />
            <Input label="Renter Password" placeH="Renter password here" type="password" />
        </div>
        <LargeButton text="Submit" nav='/login'/>
    </div>
    </>
  )
}

export default CreatePassswordScreen