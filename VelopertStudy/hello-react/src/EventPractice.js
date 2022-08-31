// import { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     username: '',
//     message: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value, // 객체의 key를 []로 감싸면 그 안의 레퍼런스가 가리키는 실제 값이 key값으로 사용됨
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       this.handleClick();
//     }
//   };
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

//-------------------------------------------------------------------------------------------
// 함수 컴포넌트로 구현해보기

import { useState } from 'react';

const EventPractice = () => {
  //   const [username, setUsername] = useState('');
  //   const [message, setMessage] = useState('');
  //   const onChangeUsername = (e) => setUsername(e.target.value);
  //   const onChangeMessage = (e) => setMessage(e.target.value);
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
