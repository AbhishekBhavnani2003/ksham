import React from 'react'
import Footer from './Footer'

function Product() {
    return (
        <>
        <div>
            <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6 my-10">
                <div className="flex flex-wrap items-center justify-between mb-8" >
                    <h2 className="mr-10 text-4xl leading-none md:text-5xl" style={{ fontFamily: 'sans-serif', fontSize: '25px' }}>
                        Enhancing Accessibility: Explore Our Inclusive Product Selection
                    </h2>
                    <a href="#"
                        className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">

                    </a>
                </div>

                <div className="flex flex-wrap -mx-4 my-10">
                    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        <img src="https://cdn.pixabay.com/photo/2017/06/28/23/09/glasses-2452504_1280.jpg" alt="Card img" className="object-cover object-center w-full h-48" />
                        <div className="flex flex-grow">
                            <div className="triangle"></div>
                            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                                <div>
                                    <a href="#"
                                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">kshaminnovation</a>
                                    <a href="#"
                                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                        EchoFrames : For Deaf 
                                    </a>
                                    <h3 className='font-bold italic my-3'>Rs - 2999 </h3>
                        
                                        <ul className='mx-5 list-disc '>
                                            <li>Patented Dome Bone Conduction Transducer</li>
                                            <li>Arrays of Microphones</li>
                                            <li>Bluetooth & Rechargeable</li>
                                        </ul>
                                  
                                </div>
                                <div>
                                    <a href="#"
                                        className="inline-block pb-1 mt-2 text-base my-5 font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600" style={{marginTop:'50px'}}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        <img
                            src="https://lh3.googleusercontent.com/bIoknM5V_1cA7KshDpzB9LxQAgL43KBFjWGQXT1cjm8JybvvGAbcQPUBXCOmQeyICfI1wNGE-XMz6ipCuzUEzA8DGI7j4AjgiEozsYM=w512-rw"
                            alt="Card img"
                            className="object-cover object-center w-full h-48"
                        />
                        <div className="flex flex-grow">
                            <div className="triangle"></div>
                            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                <div>
                                    <a href="#"
                                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">kshaminnovation</a>
                                    <a href="#"
                                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                        SightCraft : For Blind 
                                    </a>
                                    <h3 className='font-bold italic my-3'>Rs - 2999 </h3>
                                    <ul className='mx-5 list-disc '>
                                            <li>Enhanced Object and Facial Recognition Capability</li>
                                            <li>High-Definition 1080p Front Camera</li>
                                         
                                        </ul>
                                  
                                </div>
                                <div>
                                    <a href="#"
                                        className="inline-block pb-1 mt-2 text-base my-5 font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600" style={{marginTop:'50px'}}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
                        <img
                            src="https://www.yourspex.com/media/catalog/product/cache/0297f04d377a4b6152a98ca89b71f8a1/b/l/black_full-rim_matte_square_eyeglasses_for_men_01.jpg.mst.webp"
                            alt="Card img"
                            className="object-cover object-center w-full h-48"
                        />
                        <div className="flex flex-grow">
                            <div className="triangle"></div>
                            <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                                <div>
                                    <a href="#"
                                        className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">kshaminnovation</a>
                                    <a href="#"
                                        className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                        SpeakVision : For Mute 
                                    </a>
                                    <h3 className='font-bold italic my-3'>Rs - 2999 </h3>
                                    <ul className='mx-5 list-disc '>
                                            <li>Real time sign language to audio conversion</li>
                                            <li>Pairs of side camera & speaker</li>
                                            <li>Offline processing</li>
                                        </ul>
                                  
                                </div>
                                <div>
                                    <a href="#"
                                        className="inline-block pb-1 mt-2 my-5 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600" style={{marginTop:'50px'}}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
        </>
    )
}

export default Product