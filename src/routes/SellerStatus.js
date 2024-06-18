import Title from "../components/Title";

export default function SellerStatus() {
  let ex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  return (
    <div className="table-container">
      <Title>매출현황</Title>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>날짜</th>
            <th>고객번호</th>
            <th>판매금액</th>
            <th>판매총액</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            ex.map((item) => {
              return (
                <tr>
                  <td>{item}</td>
                  <td>2024-06-18</td>
                  <td>010-0000-0000</td>
                  <td>30,000원</td>
                  <td>30,000원</td>
                  <td className="remove">
                    <button>
                      <i class="fa-solid fa-square-minus"></i>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
