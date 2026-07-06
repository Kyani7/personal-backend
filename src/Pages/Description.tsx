type DescriptionProps = {
  title : string;
  description : string;
}

const Description = ({title, description} : DescriptionProps) => {
  return (
    <>
    <div className='pb-5'>
      <h1 className='text-[#0078BD] text-3xl font-bold'>
        {title}
      </h1>
      <p className='text-justify pr-20 pt-5'>
        {description}
      </p>
    </div>
    </>
  )
}

export default Description;