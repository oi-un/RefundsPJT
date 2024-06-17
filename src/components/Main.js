import { useState } from "react"

export default function Main() {
  let [login, setLogin] = useState(0);
  let [findId, setFindId] = useState('');

  let turn = (i) => {
    setFindId(false);
    if (i === 1) {
      setLogin(1);
    } else if (i === 2) {
      setLogin(2);
    }
  }

  return (<main>
    <div className="login">
      {login === 0 ? <Login /> : null}
      {login === 1 ? <Seller /> : null}
      {login === 2 ? <Manager /> : null}
      {login === 3 ? <Editor /> : null}

      {findId === 1 ? <FindId1 /> : null}
      {findId === 2 ? <FindId2 /> : null}
    </div>
  </main >)

  function Login() {
    return (<div>
      <h3 className="title">
        <i className="fa-solid fa-hashtag"></i>
        온누리 사용자 로그인
      </h3>
      <ul>
        <li>
          <button className="seller" onClick={() => { setLogin(1) }}>
            <i className="fa-solid fa-store"></i> 판매자 로그인
          </button>
        </li>
        <li>
          <button className="manager" onClick={() => { setLogin(2) }}>
            <i className="fa-solid fa-user-pen"></i> 진행자 로그인
          </button>
        </li>
        <li>
          <button className="editor" onClick={() => { setLogin(3) }}>
            <i className="fa-solid fa-gear"></i> 관리자 로그인
          </button>
        </li>
      </ul>
    </div>)
  }

  function Seller() {
    return (<div>
      <h3 className="title">
        <i className="fa-solid fa-hashtag"></i>
        판매자 로그인
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
            <button className="login-btn">로그인</button>
          </li>
        </ul>
      </form>

      <Search></Search>
    </div>)
  }

  function Manager() {
    return (<div>
      <h3 className="title">
        <i className="fa-solid fa-hashtag"></i>
        진행자 로그인
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
    </div>)
  }

  function Editor() {
    return (<div>
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
    </div>)
  }

  function Search() {
    let id = () => {
      if (login === 1) {
        setFindId(1);
        setLogin(4);
      }
      if (login === 2) {
        setFindId(2);
        setLogin(4);
      }
    }
    return (
      <div className="search-acc">
        {
          login !== 3 ?
            <>
              <a href="#" onClick={id}>아이디 찾기</a>
              <a href="#">비밀번호 찾기</a>
            </> : null
        }
        <a href="#" onClick={() => { setLogin(0) }}>뒤로가기</a>
      </div>
    )
  }

  function FindId1() {
    return (<div className="find">
      <h3 className="title">
        <i className="fa-solid fa-hashtag"></i>
        아이디 찾기
      </h3>
      <form>
        <ul>
          <li>
            <input placeholder="이름을 입력하세요." type="text" required />
          </li>
          <li>
            <input placeholder="전화번호를 입력하세요." type="password" required />
          </li>
          <li>
            <input placeholder="점포명을 입력하세요." type="password" required />
          </li>
          <li>
            <button className="login-btn">아이디 찾기</button>
          </li>
        </ul>
      </form>
      <button className="return" onClick={() => turn(1)}>
        <i class="fa-solid fa-rotate-left"></i>
      </button>
    </div>)
  }

  function FindId2() {
    return (<div className="find">
      <h3 className="title">
        <i className="fa-solid fa-hashtag"></i>
        아이디 찾기
      </h3>
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
      <button className="return" onClick={() => turn(2)}>
        <i class="fa-solid fa-rotate-left"></i>
      </button>
    </div>)
  }
}