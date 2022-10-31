//키보드 이벤트
//rafce
import React, {useState} from 'react'

const Event = () => {
  const [form, setForm] = useState({username:'', message:''});
  const {username, message} = form; //비구조화할당을 통해 추출

  const onChange = (e) => {
    const nextForm = {...form, [e.target.name]:e.target.value}
    setForm(nextForm)
  }
  const onClick = () => {
    alert(username + ',' + message);
    setForm({username:'', message:''});
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
      <input type='text' name='username' placeholder='유저명' value={username} onChange={onChange}/>
      <input type='text' name='message' placeholder='메세지' value={message}  onChange={onChange} onKeyPress={onEnterPress}/>
      <button onClick={onClick}>확인</button>
    </div>
  )
}

export default Event