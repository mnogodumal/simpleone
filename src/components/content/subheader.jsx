import BtnColor from "../button/btn-color";
import BtnWhite from "../button/btn-white";

import { useModal } from "../../providers/modal";

export default function Subheader() {
  const { open } = useModal()
  return (
    <>
      <div className="flex justify-between px-[20px] py-[16px]">
        <div className="flex gap-[16px] items-center">
          <p className=".second-font-family text-[20px] font-[300]">Подзадача</p>
          <BtnWhite text={'Создать'} onClick={() => open()} />
        </div>

        <div className="flex gap-[4px] items-center">
          <BtnColor text={'Сохранить'} />
          <BtnWhite text={'Сохранить и выйти'} />
        </div>
      </div>
    </>
  )
}