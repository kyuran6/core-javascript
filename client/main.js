/* eslint no-undef: 'warn' */
/* eslint no-unused-vars: 'off' */

import { 
  clearContents, 
  getInputValue, 
  getNode, 
  getRandom, 
  insertLast, 
  isNumbericString, 
  addClass,
  removeClass,
  toggleClass,
  showAlert,
  copy, }
from './lib/index.js';

import { jujeobData } from './data/data.js';


const submit = getNode('#submit')
const resultArea = getNode('.result');

function clickSubmitHandler(e){
  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];

  if(!name){
    console.log('이름을 입력해 주세요!');
    showAlert('.alert-error','잘못된 정보입니다.!',2000);
  
  //GSAP을 쓰면 해결될 편한 문제
  gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
  // addClass(resultArea, 'shake');
  // setTimeout(() => {
  //  removeClass(resultArea, 'shake');
  // }, 1000);
  
  return;
}

  if(isNumbericString(name)){
    console.log('제대로된 이름을 입력해주세요.');
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})
    showAlert('.alert-error','정확한 이름을 입력해주세요!', 2000);
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function clickCopyHandler(){
  navigator.clipboard.writeText(text);
}

submit.addEventListener('click',clickSubmitHandler);
resultArea.addEventListener('click', clickCopyHandler);