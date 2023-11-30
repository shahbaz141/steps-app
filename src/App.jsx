import React, { useState } from 'react'
import Message from './components/Message'
import Button from './components/Button'
const messages=[
  "Learn react⌛",
  "Build projects👌",
  "Start earning💸",
];
const App = () => {
  const [step,setstep]=useState(0);

  const HandleNextStep=()=>
  {
    if(step=>0){
    setstep((step)=>{
      return step+1;
    })
  }
  if (step==2)
  {
    setstep((step)=>{
      return step-1;
    })
  }
  };
  const HandlePrevStep=()=>{
    if(step==0)
    {
      setstep((step)=>{
        return step=0;
      })
    }
    else
    setstep((step)=>{
      return step-1;
    })
  };
  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={`${step==0?"active":""}`}>1</div>
        <div className={`${step==1?"active":""}`}>2</div>
        <div className={`${step==2?"active":""}`}>3</div>
      </div>
      <Message>{messages[step]}</Message>
      <div className='buttons'>
      <Button color="previous" onClick={HandlePrevStep}>previous</Button>
      <Button color="next" onClick={HandleNextStep}>next</Button>
      </div>
    </div>
  )
}

export default App