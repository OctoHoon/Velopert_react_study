// // F1   + format Document 입력해 prettier을 이용하면, 코드 정렬. 세미콜론, 따옴표 등 자동 추가 가능
// import logo from './logo.svg';
// import './App.css';
// import { Fragment } from 'react';
// import { Component } from 'react';

// class App extends Component {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }
// // function App() {
// //   const name = '리액트';
// //   // const style = {
// //   //   // background-color -> backgroundColor .카멜표기법
// //   //   backgroundColor: 'black',
// //   //   color: 'aqua',
// //   //   fontSize: '48px',
// //   //   fontWeight: 'bold',
// //   //   padding:16
// //   // };

// //   return (
// //     <>
// //       <div className="react">{name}</div>
// //       <input />
// //     </>
// //   );
// // }

// // export default App;
// export default App;

//---------------------------------------------------------------------------------

import { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
