export default function Title({ disabled, children }) {
  return (
    <h3 className="title">
      <i className="fa-solid fa-hashtag"></i>
      {children}
    </h3>
  )
}