import Title from "../components/Title"

export default function ManagerId({ navigate }) {
  return (
    <div className="container find">
      <Title>아이디 찾기</Title>
      <form>
        <ul>
          <li>
            <input placeholder="이름을 입력하세요." type="text" required />
          </li>
          <li>
            <input placeholder="전화번호를 입력하세요." type="password" required />
          </li>
          <li>
            <input placeholder="인증번호를 입력하세요." type="password" required />
          </li>
          <li>
            <button className="login-btn">아이디 찾기</button>
          </li>
        </ul>
      </form>
      <button className="return" onClick={() => { navigate(-1) }}>
        <i className="fa-solid fa-rotate-left"></i>
      </button>
    </div>
  )
}