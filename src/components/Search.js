import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export default function Search() {

  let location = useLocation();
  let [idUrl, setIdUrl] = useState('');
  let [pwUrl, setPwUrl] = useState('');


  useEffect(() => {
    if (location.pathname === '/login/seller') {
      setIdUrl('/find/id/seller');
      setPwUrl('/find/pw/seller');
    }
    if (location.pathname === '/login/manager') {
      setIdUrl('/find/id/manager');
      setPwUrl('/find/pw/manager');
    }
    if (location.pathname === '/login/editor') {
      setIdUrl(false);
    }
  })

  let navigate = useNavigate();
  return (
    <div className="search-acc">

      {idUrl !== false ? <>
        <a href="" onClick={() => { navigate(idUrl) }}>아이디 찾기</a>
        <a href="" onClick={() => { navigate(pwUrl) }}>비밀번호 찾기</a>
      </> : null}

      <a href="#" onClick={() => { navigate(-1) }}>뒤로가기</a>
    </div>
  )
}