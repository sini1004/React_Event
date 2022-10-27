import './App.css';
import Box from './components/Box'

/**
  1. 박스 2개 (타이틀, 사진, 결과)
  2. 박스 하단에 가위바위보 버튼
  3. 버튼을 클릭 -> 클릭한 아이템이 유저박스에 보임
  4. 버튼을 클릭 -> 컴퓨터 아이템이 랜덤하게 선택
  5. 3,4 번의 승패 나눔
  6. 결과에 따라 박스 테투리색, 글씨 색이 변함 (승:파랑, 패:회색)
 */

function App() {
  return (
    <main className='main'>
      <Box />
      <Box />
    </main>
  );
}

export default App;
