import icon from '../../img/icon-arrow.svg'

export default function Category({ text }) {
  return (
    <>
      <div className="px-[16px] py-[10px] flex items-center gap-[8px]">
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}