export default function BtnNavigator({ icon }) {

  function changeItem() {
    console.log('Click')
  }

  return (
    <button className='p-[16px] w-[56px] h-[56px]' onClick={changeItem}>
      <img src={icon} alt="icon" />
    </button>
  )
}