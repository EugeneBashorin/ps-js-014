import throttle from 'lodash.throttle';

import "./css/common.css";
import "./css/03-feedback.css";

const key = "feedback-form-state";

const tempFormData = {
    emailData: "",
    messageData: "",
};

const formField = {
    formTemp: document.querySelector(".feedback-form"),
    inputTemp : document.querySelector(".emailInput"),
    textareaTemp : document.querySelector(".textareaData"),
}

formField.inputTemp.addEventListener('input', throttle(handleEmail, 500));
formField.textareaTemp.addEventListener('input', throttle(handleMessage, 500));
formField.formTemp.addEventListener('submit', throttle(handleForm, 500));

verifyStorage();

function handleEmail(event){
    event.preventDefault();
    
    tempFormData.emailData = event.target.value;
    
    localStorage.setItem(key, JSON.stringify(tempFormData));
}

function handleMessage(event){
    event.preventDefault();
   
    tempFormData.messageData = event.target.value;
    
    localStorage.setItem(key, JSON.stringify(tempFormData));
}

function handleForm(event){
    event.preventDefault();
    
    const {emailData, messageData} = tempFormData;
    
    console.log(`email: ${emailData},  message: ${messageData}`);

    formField.formTemp.reset();

    localStorage.removeItem(key);
}

function verifyStorage(){

    const savedStorageData = JSON.parse(localStorage.getItem(key));
  
    if(savedStorageData){
        formField.inputTemp.value = savedStorageData.emailData;
        formField.textareaTemp.value = savedStorageData.messageData;
    }else{
        formField.formTemp.reset();
    }
}

