import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목 추가할 때 사용할 ids

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      // push 함수는 기존 배열을 변경하지만, concat는 새로운 배열 만듦.
      // 불변성 유지 !! 기존 상태를 그대로 두면서 새로운 값을 업데이트 해야 함! (최적화)
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id); // concat, filter 로 불변성 유지
    setNames(nextNames);
  };

  // map의 콜백함수의 파라미터. index: 현재 요소의 index. , currentValue: 현재 처리하는 요소, array: 현재 처리하는 원본 배열
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
