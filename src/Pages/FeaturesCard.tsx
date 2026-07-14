type FeaturesCardProps = {
    icon : React.ReactNode;
    title : string;
    description : string;
}

const FeaturesCard = ({icon, title, description} : FeaturesCardProps) => {
  return (
        <div className='flex bg-white rounded-3xl border border-gray-200 shadow-md '>
            <div className='mt-7'>
                <div className='ml-5 mt-3 text-4xl border border-gray-200 rounded-md bg-[#E9F1F9] text-[#0078BD] p-1'>
                    {icon}
                </div>
            </div>
            <div className='pl-10 pt-5 pb-5 pr-4'>
                <h1 className='text-[#0078BD] font-bold text-xl'>
                    {title}
                </h1>
                <p className='pt-3'>
                    {description}
                </p>
            </div>
        </div>
  )
}

export default FeaturesCard;