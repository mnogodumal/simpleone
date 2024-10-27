import { useState } from "react";
import BtnColor from "../button/btn-color";
import BtnWhite from "../button/btn-white";
import FormEl from "../content/form";
import clsx from "clsx";
import { useModal } from "../../providers/modal";

const DATA = {
  theme: 'На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller',
  status: 'Новая',
  description: '',
  product: 'Platform',
  workNotes: 'Проверить ACL id=172830402014193655',
  priority: 'Средний',
  responsible: '',
  group: '',
  comment: '',
  reviewers: '',
  whenOpened: '',
  whenCreated: '22.10.2024',
  whoOpened: '',
  whoCreated: '',
}

export default function ModalWindow() {
  const { opened, open, close } = useModal()

  const [formData, setFormData] = useState(DATA)

  const handleFormChange = (e) => {
    setFormData(e)
  }

  function closeModel() {
    close()
    console.log('UPP')
  }

  const handleOverflowClick = (e) => {
    if (e.target !== e.currentTarget) return;
    e.stopPropagation();
    closeModel();
  };

  return (
    <div
      className={clsx(
        !opened && 'hidden',
        'fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'
      )}
      onClick={handleOverflowClick}
    >
      <div className="bg-white p-4 rounded-lg w-[800px] max-h-[95vh] overflow-y-auto">
        <div className="flex justify-between px-[20px] py-[16px]">
          <div className="flex gap-[16px] items-center">
            <p className="font-[var(--second-family)] text-[20px] ">Подзадача</p>
          </div>
          <div className="flex gap-[4px] items-center">
            <BtnColor text={'Сохранить'} />
            <BtnWhite text={'Отменить'} onClick={(e) => closeModel(e)} />
          </div>
        </div>
        <FormEl
          headerForm={'Новая запись'}
          values={formData}
          className="grid-cols-1 gap-[16px] mt-[24px]"
          onFormChange={handleFormChange}
        />
      </div>
    </div>
  )
}