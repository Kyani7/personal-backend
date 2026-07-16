const Connect = () => {
    return (
        <section className='pt-5 bg-[#F6FAFC] pb-30 mt-10'>
            <div>
                <h1 className='text-4xl font-md flex justify-center text-[#396cb8] pt-10'>
                    Ready to Start Your Journey?
                </h1>
                <p className='text-[#6DA7D5] flex justify-center'>
                    Join thousands of successful students who have transformed their lives through our guidance and support.
                </p>
            </div>

            <div className='flex justify-center gap-10 pt-5'>
                <button className='p-15 bg-[#396cb8] text-white py-4 rounded-3xl shadow-2xl text-sm hover:border-2 border-blue-500 transition'>
                    Book Appointment Now
                </button>
                <button className='p-15 bg-[#FFBA1B] text-white py-4 rounded-3xl shadow-2xl hover:border-2 border-blue-500  transition'>
                    Explore Destination Country
                </button>
            </div>
        </section>
    )
}

export default Connect;