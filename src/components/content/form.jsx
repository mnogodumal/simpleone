import clsx from "clsx";
import InputText from "../input/input-text";
import InputFormTwoBtn from "./input-two-btn";


export default function FormEl({
  headerForm,
  className,
  values = {},
  onFormChange,
  onSubmit
}) {
  const handleSubmit = e => {
    e.preventDefault()
    if (typeof onSubmit === 'function') {
      onSubmit(values);
    }
  }

  const handleInputChange = (e) => {
    if (!e.name) {
      return
    }

    onFormChange({
      ...values,
      [e.name]: e.value
    })
  }

  return (
    <>
      <div className="px-[16px]">
        <div>
          <h2 className="whitespace-nowrap overflow-hidden text-ellipsis font-[var(--second-family)] font-[600] text-[24px] leading-[133%] ">{headerForm}</h2>
        </div>
        <div>
          <form
            className={clsx(className, 'grid grid-flow-row-dense')}
            onSubmit={handleSubmit}
          >
            <InputText
              label={'Тема'}
              name={'theme'}
              value={values.theme}
              required={true}
              fluid
              onChange={handleInputChange}
              className={'h-[60px]'}
            />
            <InputText
              label={'Статус'}
              name={'status'}
              value={values?.status}
              fluid
              onChange={handleInputChange}
              className={'h-[60px]'}
            />
            <InputText
              label={'Описание'}
              name={'description'}
              value={values.description}
              fluid
              onChange={handleInputChange}
              className={'h-[60px]'}
            />
            <InputText
              label={'Продукт'}
              name={'product'}
              value={values.product}
              fluid
              searchable
              onChange={handleInputChange}
              className={'h-[60px]'}
            />
            <InputText
              label={'Рабочие заметки'}
              name={'workNotes'}
              value={values.workNotes}
              required={true}
              fluid
              onChange={handleInputChange}
              className={'h-[60px]'}
            />
            <InputText
              label={'Приоритет'}
              name={'priority'}
              value={values.priority}
              fluid
              onChange={handleInputChange}
              className={'h-[60px]'}
            />
            <InputFormTwoBtn
              label={'Ответственный'}
              value={values.responsible}
              onChange={handleInputChange}
              badges={[
                { text: 'Константин Константинопольский' },
              ]}
            />
            <InputFormTwoBtn
              label={'Группа'}
              value={values.responsible}
              onChange={handleInputChange}
              badges={[
                { text: 'Support Group' },
              ]}
            />
            <InputText
              label={'Комментарии'}
              name={'comment'}
              value={values.comment}
              fluid
              className='col-span-full h-[60px]'
              onChange={handleInputChange}
            />
            <InputFormTwoBtn
              label={'Согласующие'}
              value={values.responsible}
              onChange={handleInputChange}
              badges={[
                { text: 'Андрей Пивоваров' },
                { text: 'Максим Галактионов' },
                { text: 'Алла Лин' },
              ]}
              className={'col-span-full h-[60px]'}
            />
            <InputText
              label={'Когда открыто'}
              name={'whenOpened'}
              value={values.whenOpened}
              fluid
              onChange={handleInputChange}
              className={'h-[60px]'}
            />
            <InputText
              label={'Когда создано'}
              name={'whenCreated'}
              value={values.whenCreated}
              fluid
              onChange={handleInputChange}
              className={'h-[60px]'}
            />
            <InputFormTwoBtn
              label={'Кем открыто'}
              value={values.responsible}
              onChange={handleInputChange}
              badges={[
                { text: 'Андрей Пивоваров' },
              ]}
            />
            <InputFormTwoBtn
              label={'Кем создано'}
              value={values.responsible}
              onChange={handleInputChange}
              badges={[
                { text: 'Андрей Пивоваров' },
              ]}
            />
          </form>
        </div>
      </div>
    </>
  )
}