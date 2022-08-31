// CSSModule: 클래스 이름 고유성 고민 안 해도 됨. 해당 클래스는 스타일을 직접 불러온 컴포넌트 내부에서만 작동
// .module.css 확장자로 파일을 저장하기만 하면 CSS Module 적용됨

import styles from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
