import React from 'react'

const App = () => {
  return (
    <div className='bg-slate-800'>
      {/* navbar gors here */}
      <nav className='w-full h-14 bg-indigo-200 flex justify-between items-center px-4 md:px-4'>
        <div className='text-2xl text-indigo-700 font-bold'>Learning</div>
        <ul className='md:flex hidden font-semibold'>
          <li className='mx-[10px] cursor-pointer'>Home</li>
          <li className='mx-[10px] cursor-pointer'>About Us</li>
          <li className='mx-[10px] cursor-pointer'>Contact Us</li>
        </ul>
        <div className='hidden md:block bg-indigo-700 text-white rounded px-3 py-2 font-bold cursor-pointer'>Login/Signup</div>
        <div className='md:hidden'>
          <a className='text-4xl' href="#">&#8801;</a>
        </div>
      </nav>

      {/* image section start here  */}
     <header className='w-full h-auto'>
      <img className='w-full hidden md:block' src="https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <img className='w-full md:hidden' src="https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
     </header>

     {/* our students section  */}

     <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10'>
      <div className='w-full h-auto flex flex-wrap flex-col items-center'>
        <p className='text-indigo-800 font-bold text-2xl md:text-4xl text-center'>"Pure Hardwork, No Shortcuts!"</p>
        <div className='w-36 h-1 border-b-4 border-yellow-400 border mt-2 mb-12 rounded md:mt-4'></div>
      </div>

      <div className='w-full flex flex-wrap justify-evenly'>
        <div className='w-60 flex flex-col items-center mb-12'>
          <img className='w-44 h-44 rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/011/883/287/small_2x/modern-letter-c-colorful-logo-with-watter-drop-good-for-technology-logo-company-logo-dummy-logo-bussiness-logo-free-vector.jpg" alt="" />
          <p className='text-3xl m-1 font-bold text-white'>600+</p>
          <p className='text-2xl font-bold text-gray-500'>Different Courses</p>
        </div>

        <div className='w-60 flex flex-col items-center mb-12'>
          <img className='w-44 h-44 rounded-full' src="https://img.freepik.com/free-vector/logo-tie-design-template_474888-1906.jpg?semt=ais_hybrid&w=740" alt="" />
          <p className='text-3xl m-1 font-bold text-white'>700,000+</p>
          <p className='text-2xl font-bold text-gray-500'>Students Enrolled</p>
        </div>

        <div className='w-60 flex flex-col items-center mb-12'>
          <img className='w-44 h-44 rounded-full' src="https://img.freepik.com/free-vector/people-silhouette-logo_361591-2448.jpg" alt="" />
          <p className='text-3xl m-1 font-bold text-white'>10,000+</p>
          <p className='text-2xl font-bold text-gray-500'>Successful Transition</p>
        </div>

      </div>

      

     </div>

     {/* our product section  */}

     <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10'>
      <div className='w-full h-auto flex flex-wrap flex-col items-center'>
        <p className='text-indigo-800 font-bold text-2xl md:text-4xl text-center'>Our Products</p>
        <div className='w-36 h-1 border-b-4 border-yellow-400 border mt-2 mb-12 rounded md:mt-4'></div>
      </div>

      <div className='w-[90%] h-auto flex flex-wrap justify-around'>
        <div className='w-75 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 gap-3'>
          <img className='w-40 h-40 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRu4Fg9FtHQn4IMD8VnLWRn47Gp3O20cfB9g&s" alt="" />
          <p className='text-white font-bold text-2xl'>PW Skills Lap</p>
          <p className='text-gray-500 font-bold text-xl'>Lorem ipsum dolor sit amet consectetur elit.</p>
        </div>
        <div className='w-75 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 gap-3'>
          <img className='w-40 h-40 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRu4Fg9FtHQn4IMD8VnLWRn47Gp3O20cfB9g&s" alt="" />
          <p className='text-white font-bold text-2xl'>PW Skills Lap</p>
          <p className='text-gray-500 font-bold text-xl'>Lorem ipsum dolor sit amet consectetur elit.</p>
        </div>
        <div className='w-75 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 gap-3'>
          <img className='w-40 h-40 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRu4Fg9FtHQn4IMD8VnLWRn47Gp3O20cfB9g&s" alt="" />
          <p className='text-white font-bold text-2xl'>PW Skills Lap</p>
          <p className='text-gray-500 font-bold text-xl'>Lorem ipsum dolor sit amet consectetur elit.</p>
        </div>
        <div className='w-75 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2 gap-3'>
          <img className='w-40 h-40 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRu4Fg9FtHQn4IMD8VnLWRn47Gp3O20cfB9g&s" alt="" />
          <p className='text-white font-bold text-2xl'>PW Skills Lap</p>
          <p className='text-gray-500 font-bold text-xl'>Lorem ipsum dolor sit amet consectetur elit.</p>
        </div>

      </div>
     </div>

     {/* our Footer section  */}

     <footer className='w-full border-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12 mb-5'>
      <div>
        <img className='w-30 h-30' src="https://madewithreactjs.com/mandant/madewithreactjs/images/logo.png" alt="" />
        <p className='my-4'>Email Us: imaarif2002@gmail.com</p>
      </div>

      <div>
        <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
        <div className='w-32 h-1 border-b-2 border-yellow-600 rounded-2xl my-2'></div>
        <div>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
        <div className='w-32 h-1 border-b-2 border-yellow-600 rounded-2xl my-2'></div>
        <div>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
        <div className='w-32 h-1 border-b-2 border-yellow-600 rounded-2xl my-2'></div>
        <div>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>
      </div>


     </footer>

    </div>
  )
}

export default App
