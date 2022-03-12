import React from 'react'
import { Form } from 'react-bootstrap'
import Header from '../../components/header/Header'
import Input from '../../components/input/Input'
import LargeButton from '../../components/largeButton/LargeButton'
import './register.css'

const Register = () => {
//     const select = document.querySelector('.select');
// const optionBox = document.querySelector('.options');
// const options = [...document.querySelectorAll('.options .item')];

// let activeOption = 0; // default should be 0

// select.onfocus = () => {
//     select.classList.add('focus');
// }

// select.onblur = () => {
//     select.classList.remove('focus');
// }

// window.onclick = (e) => {
//     if(!e.target.className.includes('select')){
//         select.classList.remove('active');
//         optionBox.classList.remove('active');
//     } else{
//         select.classList.toggle('active');
//         optionBox.classList.toggle('active');
//     }
// }

// options.forEach((item, i) => {
//     item.onmousemove = () => {
//         hoverOptions(i);
//     }
// })

// const hoverOptions = (i) => {
//     options[activeOption].classList.remove('active');
//     options[i].classList.add('active');
//     activeOption = i;
//     setValue();
// }

// window.onkeydown = (e) => {
//     if(select.className.includes('active') || select.className.includes('focus')){
//         if(e.key === 'ArrowDown' && activeOption < options.length - 1){
//             e.preventDefault();
//             hoverOptions(activeOption + 1);
//         } else if(e.key === 'ArrowUp' && activeOption > 0){
//             e.preventDefault();
//             hoverOptions(activeOption - 1);
//         } else if(e.key === 'Enter'){
//             e.preventDefault();
//             select.classList.remove('active');
//             optionBox.classList.remove('active');
//         }
//     }
// }

// const setValue = () => {
//     select.innerHTML = select.value = options[activeOption].innerHTML;
// }

// setValue();
  return (
    <div>
         <Header /> 
    <div className='container' id='register'>
        <div className='register_container'>
            <h3>Register yourself on the network</h3>
            <div className='register_info'>
              <h5>We provide access to top companies, a community of experts, and resources that can help accelerate your career.</h5>
              <div className='in_register'>
                <span className='btn_linkedin'> <span>in</span> Sign In with Linkedin </span>
                <p>By clicking Sign in with linkedin, you agree to let Topptalent store your Linkedin Profile</p>
                <span className='or'>Or</span>
              </div>
              <div className="nrl_register">
              {/* <button class="select" name="select" value="options">options</button>
                    <div class="options">
                        <p class="item active">option 1</p>
                        <p class="item">option 2</p>
                        <p class="item">option 3</p>
                        <p class="item">option 4</p>
                    </div> */}
                    <label htmlFor="Your Professional fill?">Your Professional fill?</label>
                <Form.Select aria-label="Default select example">
                  <option>select</option>
                  <option value="1">Sales-Bussiness development Manager, Sales Director, Sales Executive</option>
                  <option value="2">Developer-front-end, back-end, full-stack, mobile etc</option>
                  <option value="3">Marketing-digital marketers, marketing managers, SEO</option>
                </Form.Select>
                <Input label='Full Name*' placeH='Enter email'/>
                <Input label='Email Address*' placeH='Enter Email Address'/>
                <Input label='Confirm Password*' placeH='Confirm Password'/>
              </div>
              <p>You acknowledge that the Topptalent screening process is confidential and that you will not publicly disclose details about this process. By submitting, you acknowledge that you have read and agreed to our <span>Terms and Conditions</span> , <span>Privacy Policy</span>, and <span>Cookie Policy</span>.</p>
              </div>
            
        </div>
            <LargeButton text="Register Account"/>
    </div>
    </div>
  )
}

export default Register