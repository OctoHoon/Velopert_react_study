import { useState } from 'react';
// state의 값을 바꿀 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 함! 그 외의 방식 X!

const Say = () => {
  const [message, setMessage] = useState(''); // 첫 번째 원소: 현재 상태, 두 번째 원소: 세터 함수 (상태를 바꿔주는 함수)
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
