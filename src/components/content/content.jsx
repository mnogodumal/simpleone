import { useState } from "react";
import FormEl from "./form";
import Subheader from "./subheader";

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

export default function Content() {
  const [formData, setFormData] = useState(DATA)

  const handleFormChange = (e) => {
    setFormData(e)
  }

  return (
    <>
      <div className="w-[calc(100%-336px)] border-l-[1px] border-[#d5d8dd] border-solid ">
        <Subheader />
        <FormEl
          headerForm={'STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller'}
          values={formData}
          className={'grid-cols-2 gap-[16px] mt-[24px]'}
          onFormChange={handleFormChange}
        />
      </div>
    </>
  )
}