export default function Login({ navigate }) {
  return (
    <div className='login'>
      <h3 className="title">
        <i className="fa-solid fa-hashtag"></i>
        온누리 사용자 로그인
      </h3>
      <ul>
        <li>
          <button className="seller" onClick={() => { navigate('/login/seller') }}>
            <i className="fa-solid fa-store"></i> 판매자 로그인
          </button>
        </li>
        <li>
          <button className="manager" onClick={() => { navigate('/login/manager') }}>
            <i className="fa-solid fa-user-pen"></i> 진행자 로그인
          </button>
        </li>
        <li>
          <button className="editor" onClick={() => { navigate('/login/editor') }}>
            <i className="fa-solid fa-gear"></i> 관리자 로그인
          </button>
        </li>
      </ul>
    </div>
  )
}