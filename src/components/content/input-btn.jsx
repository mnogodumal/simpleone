import BtnSmall from "../button/btn-small";

import { Form, Input } from 'antd'
export default function InputFormBtn({ label, className, required, icon, defaultValue }) {
  return (
    <div className={className}>
      <Form.Item
        layout="vertical"
        label={label}
        name="vertical"
        rules={[
          {
            required,
          },
        ]}
      >
        <div className="flex gap-[4px]">
          <Input defaultValue={defaultValue} />
          <BtnSmall icon={icon} />
        </div>
      </Form.Item>
    </div>

  )
}