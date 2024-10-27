import BtnNavigator from "../button/btn-navigator";
import icon1 from '../../img/icon-navigator-1.svg'
import icon2 from '../../img/icon-navigator-2.svg'

export default function Tabs() {
  return (
    <>
      <div className="flex flex-col border-[#d5d8dd] border-solid border-r-[1px] w-[56px] h-[calc(100vh-62px)] ">
        <BtnNavigator icon={icon1} />
        <BtnNavigator icon={icon2} />
      </div>
    </>
  )
}