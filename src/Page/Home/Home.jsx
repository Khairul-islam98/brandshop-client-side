
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import media from '../../assets/images/media.png'


const Home = () => {
    const brands = useLoaderData()


    return (

        <div className=''>
            <Banner></Banner>
            <h2 className='text-5xl  text-blue-500 dark:text-white font-rancho text-center mt-14 '>Our Trusted  Brands</h2>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-6  py-5 ml-6  mr-6 '>
                {brands.map(brand =>
                    <Link key={brand._id} to={`/brand/${brand.brandName}`}>
                        <div className="relative dark:bg-gray-800 shadow-slate-200 flex flex-col rounded-xl h-[80%] bg-white bg-clip-border text-gray-700 shadow-md transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                                <img className='h-full w-full' src={brand.photo} alt="brand photo" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="mb-2 block text-primary font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {brand.brandName}
                                </h4>
                            </div>
                        </div>
                    </Link>
                )
                }
            </div>
            <div className='mb-10'>
                <img className='h-full w-full' src={media} alt="brand photo" />
            </div>
            <HomeBanner></HomeBanner>
        </div>

    );
};

export default Home;