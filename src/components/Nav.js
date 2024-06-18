import { useNavigate } from "react-router-dom"

export default function Nav() {
  let navigate = useNavigate();
  return (<nav className="bottom-nav">
    <ul className="main-menu">
      <li>
        <button onClick={() => { navigate('/') }}>
          <i className="fa-solid fa-circle-user"></i>
          <span>메인</span>
        </button>
      </li>
      <li>
        <button onClick={() => { navigate('/login') }}>
          <i className="fa-solid fa-circle-user"></i>
          <span>로그인</span>
        </button>
      </li>
      <li>
        <button onClick={() => { navigate('/seller') }}>
          <i className="fa-solid fa-circle-user"></i>
          <span>판매자</span>
        </button>
      </li>
      <li>
        <button onClick={() => { navigate('/manager') }}>
          <i className="fa-solid fa-circle-user"></i>
          <span>진행자</span>
        </button>
      </li>
      <li>
        <button onClick={() => { navigate('/') }}>
          <i className="fa-solid fa-circle-user"></i>
          <span>관리자</span>
        </button>
      </li>
    </ul>
  </nav>)
}