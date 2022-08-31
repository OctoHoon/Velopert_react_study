import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputE1 = useRef(null); // useRef로 ref를 설정하면, 이를 통해 만든 객체 안의 current 값이 실제 엘리먼트 가리킴

  // useCallback: 첫 번쨰 파라미터 - 생성하고 싶은 함수, 두 번쨰 - 배열 (배열 안의 값이 바뀔 때 함수 생성)
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성. 이 함수를 계속 재사용

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputE1.current.focus();
    },
    [number, list]
  ); // number 혹은 list가 바뀌었을 때만 함수 생성. nextList 생성하려면 list와 number 상태 값을 반드시 조회해야 하므로 꼭 넣어야 함.

  const avg = useMemo(() => getAverage(list), [list]); // list가 바뀔 때만 렌더링 하도록 useMemo 로 최적화

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputE1} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
