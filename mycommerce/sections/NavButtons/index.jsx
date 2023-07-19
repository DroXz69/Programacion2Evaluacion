import Login from "@/components/Buttons/login"
import LogOut from "@/components/Buttons/logout"

const NavButtons = () => {
    return (
    <div className='centered-middle flex-row justify-center'>
        <Login className='w-1/4'/>
        <LogOut className='w-1/4'/>
    </div>
  )
}

export default NavButtons