export default function BtnSmall({ icon, onClick }) {
  return (
    <button
      className='border-[#d5d8dd] border-solid border-[1px] rounded-[4px] p-[6px] w-[32px] h-[32px]'
      onClick={onClick}
    >
      <img src={icon} alt="" />
    </button>
  )
}