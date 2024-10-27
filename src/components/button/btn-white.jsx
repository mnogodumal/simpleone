import clsx from "clsx"

export default function BtnWhite({
  text,
  className,
  onClick
}) {
  return (
    <button
      className={clsx(
        className,
        'border-[1px] border-[#d5d8dd] border-solid rounded-[4px] py-[6px] px-[12px]'
      )}
      onClick={onClick}
    >{text}</button>
  )
}