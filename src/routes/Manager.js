import Title from "../components/Title";

export default function Manager() {
  return (
    <div className="container">
      <Title>매출 조회</Title>
      <form className="search">
        <input placeholder="고객 전화번호를 입력하세요." />
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <span className="alert">
        등록된 매출이 없습니다.
      </span>
    </div>
  )
}