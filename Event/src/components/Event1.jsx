//rafce
import React, {useState} from 'react'

const Event = () => {
  const onChangeUsername = () => {   
    console.log('유저네임에 온체인지')
  }
  const onChangeMessage = () => {
    console.log('메세지 온 체인지 일어남')
  }
  const onClick = () => {
    alert('클릭했어요!')
  }
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type='text' name='username' placeholder='유저명' value='' onChange={onChangeUsername}/>
      <input type='text' name='message' placeholder='메세지' value=''  onChange={onChangeMessage}/>
      <button onClick={onClick}>확인</button>
    </div>
  )
}

export default Event