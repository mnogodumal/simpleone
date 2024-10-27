export default function BtnColor({ text, className }) {

  function OnClick() {
    console.log('Click')
  }

  return (
    <button className={[className, 'bg-[#0078cf] rounded-[4px] py-[6px] px-[12px] text-[#fff]'].join(' ')} onClick={OnClick}>{text}</button>
  )
}