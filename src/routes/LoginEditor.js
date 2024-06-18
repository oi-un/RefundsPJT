import Search from "../components/Search";

export default function LoginEditor() {
  return (
    <div className='login'>
      <h3 className="title">
        <i className="fa-solid fa-hashtag"></i>
        관리자 로그인
      </h3>
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

      <Search></Search>
    </div>
  )
}