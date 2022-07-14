import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div>
            안녕하세요<br/>
            <Link to="/login">로그인 페이지 이동</Link>
        </div>
      );
  
}

export default Main;