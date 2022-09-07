import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'next/link';
import { useEffect, useState } from 'react';
function SignUpBar() {
  return (
    <div className='w-[90%] m-auto min-w-[300px] xs:px-[10%] md:w-[73.7%] lg:px-[10%] lg:w-[81%] xl:px-[18%]'>
      <h1 className='text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] mx-auto font-semibold text-center'>Unlimited movies, TV shows, and more.</h1>
      <h2 className='text-[1.25rem] md:text-[1.75rem] my-[1rem] mx-auto text-center'>Watch anywhere. Cancel anytime.</h2>
      <form>
        <h3 className='text-[1rem] md:text-[1.25rem] max-w-[650px] font-[400] px-[5%] md:px-0 mb-[10px] mx-auto'>Ready to watch? Enter your email to create or restart your membership</h3>
        <div className='flex flex-col space-y-4 items-center semilg:flex-row semilg:space-y-0 semilg:h-[100px]'>
          <div className='w-[100%] '>
            <label className='relative mx-auto '>
              <input id="sign_up_input" className='min-w-[300px] w-[100%] h-[50px] text-black pt-[10px] mx-auto lg:h-[65px px-[10px] lg:h-[65px]' />
              <label htmlFor="sign_up_input" className={`absolute left-[10px] -top-[5px] text-[#8c8c8c] text-[14px] transition-transform ${"-translate-y-[15px]"} duration-150`}>Email Address</label>
            </label>
            <div className='hidden text-red-600'>Email is required</div>
          </div>
          <Link href={"/login"}>
            <button className='flex items-center px-4 py-2 bg-red-600 hover:bg-red-500 m-auto semilg:py-0 semilg:w-[220px] semilg:h-[50px] lg:h-[65px] semilg:text-[1.25rem]'>
              <span className='ml-1 lg:ml-2'>Get started</span>
              <span>
                <ChevronRightIcon />
              </span>
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpBar

