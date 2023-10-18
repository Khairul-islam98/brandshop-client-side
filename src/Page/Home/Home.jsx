
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';


const Home = () => {
    const brands = useLoaderData()
    console.log(brands);
    
    return (
        
        <div className=''>
            <Banner></Banner>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-2 w-3/8 py-5 ml-6  mr-6'>
                {brands.map(brand => <div key={brand._id} class="relative flex flex-col rounded-xl h-[80%] bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <img className='h-full w-full' src={brand.photo} alt="brand photo" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-2 block text-primary font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {brand.name}
                        </h4>
                    </div>
                </div>)
                }
            </div>
        </div>
        
    );
};

export default Home;