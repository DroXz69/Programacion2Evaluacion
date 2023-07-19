import Image from "next/image"
const styles = {
  container: {
    logo: 'w-1/8',
  }
}

const Logo = () => {
  return (
    <div className="px-6 py-5 ">
      <div className="mb-6 md:mb-0">
        <img className="flex justify-center max-w-xs" src='/assets/Logo.png' width={160} height={160} alt='image' priority />
      </div>
    </div>
  )
}

export default Logo