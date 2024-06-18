import Search from "../components/Search";
import Title from "../components/Title";

export default function LoginManager() {
  return (
    <div className='container'>
      <Title>진행자 로그인</Title>
      <form>
        <ul>
          <li>
            <input placeholder="아이디를 입력하세요." type="text" required />
          </li>
          <li>
            <input placeholder="비밀번호를 입력하세요." type="password" required />
          </li>
          <li>
            <input placeholder="인증번호를 입력하세요." type="password" required />
          </li>
          <li>
            <button className="login-btn">로그인</button>
          </li>
        </ul>
      </form>
      <Search />
    </div>
  )
}