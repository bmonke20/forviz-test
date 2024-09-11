export default function DateBox({ time, color, title }) {
  return (
    <div className='py-2'>
      <div className='flex items-baseline px-[60px] py-2'>
        <div className={`rounded-full w-3 h-3 bg-${color}-500`}></div>
        <div className='ml-3'>
          <small className='opacity-50'>{time}</small>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
