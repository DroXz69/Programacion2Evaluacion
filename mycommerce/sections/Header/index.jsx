import Logo from '@/components/Logo'
import OpcionesHeader from '../NavOptions'
import NavButtons from '../NavButtons'
const styles = {
  header: 'flex flex-row',
  logo: 'w-1/6',
  menu: 'w-1/6 centered-middle',
  opcionesHeader: 'w-full centered-middle',
  buttons: 'w-1/3 centered-middle',
}

const index = () => {
  return (
    <header className='dark:bg-gray-900 text-white'>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.opcionesHeader}>
            <OpcionesHeader />
          </div>
          <div className={styles.buttons}>
            <NavButtons />
          </div>
        </div>
    </header>
  )
}

export default index