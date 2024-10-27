import icon from '../../img/icon-clear.svg'

export default function BtnClear({
  onClick
}) {
  return (
    <button onClick={onClick}>
      <img src={icon} alt="icon" />
    </button>
  )
}