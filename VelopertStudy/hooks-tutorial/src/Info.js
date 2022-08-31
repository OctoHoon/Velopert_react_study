import { useState, useEffect, useReducer } from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  // useEffect : 컴포넌트가 렌더링 될 떄마다 특정 작업 수행
  // 마운트 될 때 (맨 처음 렌더링 될 떄)만 실행하고 싶으면 함수의 두 번쨰 파라미터로 [] 넣기.
  // 특정 값 업데이트 될 떄만 실행하고 싶으면 두 번쨰 파라미터로 [특정값]. ex) [name]
  // 컴포넌트가 언마운트 되기 전 or 업데이트 되기 직전에 어떠한 작업 수행하려면 cleanup 함수 반환해주기
  // 언마운트 될 때만 뒷정리 함수 호출하려면 두 번쨰 파라미터에 [] 넣으면 됨

  //   useEffect(() => {
  //     console.log("effect");
  //     console.log(name);
  //     return () => {
  //       console.log("cleanup");
  //       console.log(name);
  //     };
  //   }, [name]);
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
