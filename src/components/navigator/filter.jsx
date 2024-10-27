import Search from "../search/search";
import search from '../../img/search-menu.svg'
import BtnSmall from "../button/btn-small";
import icon from '../../img/icon-filter.svg'

export default function Filter() {
  return (
    <>
      <div className="flex items-center gap-[8px] p-[16px] border-[#d5d8dd] border-solid border-b-[1px] ">
        <Search icon={search} placeholder={'Поиск по меню'} />
        <BtnSmall icon={icon} />
      </div>
    </>
  )
}