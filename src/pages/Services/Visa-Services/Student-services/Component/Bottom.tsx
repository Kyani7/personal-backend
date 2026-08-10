

const Bottom = () => {
  return (
    <section className='pt-5 bg-[#F5F9FC] pb-30'>
            <div>
                <h1 className='text-4xl font-md flex justify-center text-[#396cb8] pt-10'>
                    Ready to Start Your Journey?
                </h1>
                <p className='text-[#6DA7D5] flex justify-center'>
                    Join thousands of successful students who have transformed their lives through our guidance and support.
                </p>
            </div>

            <div className='flex justify-center gap-5 pt-3'>
                <button className='p-10 bg-[#FFFFFF] text-black py-4 rounded-3xl text-sm shadow-2xl hover:border border-blue-500 transition'>
                    Get Free Appointment
                </button>
                <button className='p-15 bg-[#FFBA1B] text-white py-4 rounded-3xl text-sm hover:border border-blue-500 transition'>
                    Why Choose Us
                </button>
            </div>
        </section>
  )
}

export default Bottom;