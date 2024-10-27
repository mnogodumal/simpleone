export default function Search({ icon, placeholder, className }) {
  return (
    <div className={[className, 'border-[1px] border-[#d5d8dd] border-solid rounded-[4px] py-[6px] px-[8px] w-[206px] h-[32px] flex items-center justify-between'].join(' ')}>
      <input className='outline-none w-[calc(100%-20px)]' placeholder={placeholder} />
      <img src={icon} alt="" />
    </div>
  )
}