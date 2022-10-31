//키보드 이벤트
//rafce
import React, {useState} from 'react'

const Event = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const onChangeUsername = (e) => {   
    setUsername(e.target.value)
  }
  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }
  const onClick = () => {
    alert(username + ',' + message);
    setUsername ('');
    setMessage ('');
  }
  const onEnterPress = (e) => {
    //엔터키 눌렀을때 클릭 함수 발생
    if(e.key == 'Enter') {
      onClick();
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type='text' name='username' placeholder='유저명' value={username} onChange={onChangeUsername}/>
      <input type='text' name='message' placeholder='메세지' value={message}  onChange={onChangeMessage} onKeyPress={onEnterPress}/>
      <button onClick={onClick}>확인</button>
    </div>
  )
}

export default Event