import Title from "../components/Title";

export default function SellerAdd() {
  return (
    <div className="container">
      <Title>매출등록</Title>

      <ul>
        <li>
          <input placeholder="고객 전화번호" />
        </li>
        <li>
          <input placeholder="매출 금액" />
        </li>
        <li>
          <button>매출등록</button>
        </li>
      </ul>
    </div>
  )
}