
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import HomeBanner from '../../components/HomeBanner/HomeBanner';


const Home = () => {
    const brands = useLoaderData()
  
    
    return (
        
        <div className=''>
            <Banner></Banner>
            <h2 className='text-5xl text-blue-500 dark:text-white font-rancho text-center mt-14 '>Ours Brands</h2>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-6  py-5 ml-6  mr-6'>
                {brands.map(brand => 
                <Link key={brand._id} to={`/brand/${brand.brandName}`}>
                <div class="relative flex flex-col rounded-xl h-[80%] bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <img className='h-full w-full' src={brand.photo} alt="brand photo" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-2 block text-primary font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {brand.brandName}
                        </h4>
                    </div>
                </div>
                </Link>
                )
                }
            </div>
                <HomeBanner></HomeBanner>
        </div>
        
    );
};

export default Home;