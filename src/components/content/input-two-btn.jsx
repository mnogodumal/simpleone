import BtnClear from "../button/btn-clear";
import BtnSmall from "../button/btn-small";
import Badge from '../badge/Badge';
import plus from '../../img/icon-plus.svg'
import loupe from '../../img/icon-loupe.svg'
export default function InputFormTwoBtn({ className, badges, label }) {

  return (
    <div className={className}>
      <div className="text-[14px]">
        <p>{label}</p>
      </div>

      <div className="mt-[8px] flex items-center gap-[4px]">
        <div className='w-[100%]'>
          <div className="border-[1px] border-solid border-[#d5d8dd] rounded-[6px] pt-[4px] pr-[10px] pb-[4px] pl-[4px] flex h-[32px] justify-between">
            <div className="flex gap-[4px]">
              {badges.map((badge, index) => (
                <Badge key={index} text={badge.text} />
              ))}
            </div>

            <div className="flex items-center">
              <BtnClear />
            </div>
          </div>
        </div>
        <BtnSmall icon={plus} />
        <BtnSmall icon={loupe} />
      </div>
    </div>
  )
}