export default function LeftSide({ selectedDate, bookingData }) {
  return (
    <div className='bg-[#46529d] w-[585px] h-[1004px] pl-[90px] relative'>
      <div className='bg-[#2ebaee] text-[#fff] w-[495px] h-[135px]'>
        <h1 className='text-[54px] font-bold p-10'>A101</h1>
      </div>

      <div className='h-[869px] flex flex-col justify-around'>
        <div>
          <div className='pb-16'>
            <small className='text-[#fff]'>Upcoming</small>
          </div>

          <div className='text-[#fff] text-6xl font-thin'>
            <h1 className='opacity-50'>Monday</h1>
            <div>28 Sep</div>
          </div>
        </div>

        <div className='flex flex-col text-[#fff] gap-6 z-10'>
          <div>
            <small className='opacity-50'>13:00-14:00</small>
            <h2>Lunch with Petr</h2>
          </div>

          <div>
            <small className='opacity-50'>14:00-15:00</small>
            <h2>Sales Weekly Meeting</h2>
          </div>

          <div>
            <small className='opacity-50'>16:00-18:00</small>
            <h2>Anastasia Website Warroom</h2>
          </div>
        </div>
      </div>
      <div className='bg-[#4d59a1] w-full h-[375px] absolute bottom-0 left-0 z-0'></div>
    </div>
  );
}
