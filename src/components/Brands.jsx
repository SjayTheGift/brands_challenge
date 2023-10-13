import Line from "./Line"

const Brands = () => {
  return (
    <section className='bg-white text-black z[2] py-12 px-6'> 
        <div className='max-w-[1440px] mx-auto'>  
            <div className='flex flex-row items-center text-center gap-3 mb-8'>
                <Line/>
                <p>You'll be in good company</p>
            </div>

            <h3 className='text-2xl md:text-4xl font-semibold mt-6 mb-[40px] text-gray-700'>Trusted by leading brands</h3>

        </div>
    </section>
  )
}

export default Brands
