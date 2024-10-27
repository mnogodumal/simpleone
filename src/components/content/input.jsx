import { Form, Input } from 'antd'
export default function InputForm({ label, className, required, defaultValue }) {
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
        <Input defaultValue={defaultValue} />
      </Form.Item>
    </div>

  )
}