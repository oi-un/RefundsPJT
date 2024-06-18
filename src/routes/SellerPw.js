export default function ManagerPw({ navigate }) {
  return (
    <div className="login find">
      <h3 className="title">
        <i className="fa-solid fa-hashtag"></i>
        비밀번호 찾기
      </h3>
      <form>
        <ul>
          <li>
            <input placeholder="아이디를 입력하세요." type="text" required />
          </li>
          <li>
            <input placeholder="점포명을 입력하세요." type="password" required />
          </li>
          <li>
            <input placeholder="전화번호를 입력하세요." type="password" required />
          </li>

          <li>
            <button className="login-btn">비밀번호 찾기</button>
          </li>
        </ul>
      </form>
      <button className="return" onClick={() => { navigate(-1) }}>
        <i className="fa-solid fa-rotate-left"></i>
      </button>
    </div>
  )
}