import { NavLink } from 'react-router-dom'

const Default = () => {
  return (
    <div className='flex justify-center items-center h-100 w-full'>
      <div>
        <p className='font-medium text-3xl '>Page is not found</p>
      <NavLink className='font-medium text-xl' to='/'><button className='bg-blue-600 rounded p-1 ps-2 pe-2 text-white ps-2 pe-2  m-5 cursor-pointer'>Go to home page</button></NavLink>
      </div>
    </div>
  )
}

export default Default
