

const OverViewCard = ({name, number, icon}) => {
  return (
    <div className='flex  gap-10 align-middle items-center   border border-gray-50 shadow-xl shadow-black/10 p-10 rounded-xl w-full h-12 bg-amber-50/20'>
       <div>
        <h3 className='text-sky-700 '>{name}</h3>
        <p className='text-sky-900 font-semibold'>{number}</p>
       </div>

       <div className='text-sky-900 ml-auto '>
           {icon}
       </div>
    </div>
  )
}

export default OverViewCard