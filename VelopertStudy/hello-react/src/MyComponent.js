// function -----() 대신 화살표 함수 문법 사용. 주로 함수를 파라미터로 전달할 떄 유용
// [화살표 함수 형 컴포넌트]
// import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       childrean 값은 {children}
//       입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber} 입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired, // 필수 props로 지정. 값을 지정해주지 않으면 경고 뜸.
// };

// export default MyComponent;
//-----------------------------------------------------------------------------------------------------------------------

//[클래스형 컴포넌트]

import { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        childrean 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired, // 필수 props로 지정. 값을 지정해주지 않으면 경고 뜸.
};

export default MyComponent;
