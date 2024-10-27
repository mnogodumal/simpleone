
import clsx from 'clsx'
import { Form, Input } from 'antd'

import BtnSmall from "../button/btn-small";
import BtnClear from '../button/btn-clear'

import plus from '../../img/icon-plus.svg'
import loupe from '../../img/icon-loupe.svg'

export default function InputText({
  label,
  className,
  name,
  required,
  requiredMessage,
  value,
  clearable,
  searchable,
  onSearchClick,
  addable,
  onAddClick,
  onChange,
  fluid,
}) {
  const handleChange = (e) => {
    const value = e.target.value
    onChange({ value, name })
  }
  const handleClearInput = () => {
    onChange({ value: '', name })
  }

  return (
    <div className={clsx(className, fluid && 'w-full')}>
      <Form.Item
        layout="vertical"
        label={label}
        name={name}
        rules={[
          { required, message: requiredMessage ?? 'Поле обязательно' },
        ]}
      >
        <div className="flex gap-[4px]">
          <Input
            value={value}
            onChange={handleChange}
            suffix={
              <>
                {clearable && (
                  <div className="flex items-center">
                    <BtnClear
                      onClick={handleClearInput}
                    />
                  </div>
                )}
              </>
            }
          />

          {addable && (
            <BtnSmall
              icon={plus}
              onClick={onAddClick}
            />
          )}
          {searchable && (
            <BtnSmall
              icon={loupe}
              onClick={onSearchClick}
            />
          )}
        </div>
      </Form.Item>
    </div>

  )
}