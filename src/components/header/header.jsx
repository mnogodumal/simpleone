import logo from '../../img/logo.svg'
import search from '../../img/search.svg'
import person from '../../img/Persona_image.svg'
import Search from '../search/search'
import settings from '../../img/settings.svg'
import BtnSmall from '../button/btn-small'

export default function Header() {
  return (
    <>
      <header className='px-[16px] py-[12px] border-[#d5d8dd] border-solid border-b-[1px]'>
        <div className='flex items-center justify-between'>

          <div>
            <img src={logo} alt="logo" />
          </div>

          <div>
            <div className='w-[577px] flex items-center justify-between'>
              <div className='w-[32px] h-[32px] '></div>
              <Search className={'w-[296px]'} icon={search} placeholder={'Поиск'} />
              <div className='flex items-center gap-[8px]'>
                <img className='w-[32px] h-[32px] rounded-[50%]' src={person} alt="person" />
                <p className='font-[var(--font-family)] text-[14px] '>Максим Галактионов</p>
              </div>
              <div>
                <BtnSmall icon={settings} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}