import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function SignUpBar() {
  return (
    <div className='flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:w-[650px] m-auto'>
      <div className='w-[400px]'>
        <label>
            <input className='w-[90vw] xs:w-[100%] h-[50px] md:h-[70px] 'placeholder=' Email address'/>
        </label>
      </div>
      <div className='w-[150px] m-atuo md:h-[70px] md:w-[210px] bg-red-600 cursor-pointer  hover:bg-red-500'>
        <button className='flex items-center py-3 pl-[px] md:py-5 md:px-8 w-[70%] m-auto md:w-[100%]'>
            <span className='md:text-2xl'>Get Started</span>
            <span>
                <ChevronRightIcon />
            </span>
        </button>
      </div>
    </div>
  )
}

export default SignUpBar
