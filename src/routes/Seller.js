import Title from "../components/Title"

export default function Seller({ navigate }) {
  return (
    <div className="container">
      <Title>판매자</Title>

      <ul>
        <li>
          <button onClick={() => { navigate('/seller/add') }}>
            매출 등록
          </button>
        </li>
        <li>
          <button onClick={() => { navigate('/seller/status') }}>
            매출 현황
          </button>
        </li>
      </ul>
    </div>
  )
}