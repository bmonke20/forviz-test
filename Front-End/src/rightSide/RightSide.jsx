import DateBox from "./DateBox";
import Header from "./Header";

export default function RightSide({ bookingData }) {
  return (
    <div>
      <Header />

      <div className='w-[893px] h-[869px] relative z-0 py-10'>
        <div>
          <div className='bg-[#f7f7f7] py-3 px-28 my-10'>
            <h2 className='text-[#787878] font-semibold'>
              Today (Mon, 28 Sep)
            </h2>
          </div>

          <DateBox time='13:00-14:00' color='blue' title='Lunch with Petr' />
          <DateBox
            time='14:00-15:00'
            color='green'
            title='Sales Weekly Meeting'
          />
          <DateBox
            time='16:00-18:00'
            color='orange'
            title='Anastasia Website Warroom'
          />

          <div className='bg-[#f7f7f7] py-3 px-28 my-10'>
            <h2 className='text-[#787878] font-semibold'>
              Tomorrow (Tue, 29 Sep)
            </h2>
          </div>

          <DateBox time='13:00-14:00' color='blue' title='One-on-One Session' />
          <DateBox
            time='16:00-18:00'
            color='green'
            title='UGC Sprint Planning'
          />

          <div className='absolute top-0 px-8 h-full border-[#ececec] border-r-2 z-[-1]'></div>
        </div>
      </div>
    </div>
  );
}
