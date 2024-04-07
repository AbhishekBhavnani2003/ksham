
import Cards from './Cards'
import Footer from './Footer'
import Sponsers from './Sponsers'
import './Innovation.css'



export default function Example() {
    return (
        <div className="bg-white" style={{ marginTop: '-50px' }}>
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 ">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 innovationcard">
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h4 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Why Able Innovation Exists
                        </h4>
                        <p className="mt-6 text-lg leading-8 text-gray-300">

                            Over 680 million globally are deaf, hard of hearing, mute, or blind. In India, over 80 million face limited access to education, perpetuating poverty and communication barriers.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <a
                                href="#"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            >
                                Let's Help
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <video autoPlay loop muted className="myvideo" style={{ marginTop: '50px', marginLeft: '30px' }}>
                            <source src="https://kshaminnovation.in/static/media/anim.0ae96bd64f4245a807ea.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <Cards />
            <h1 style={{textAlign:'center' , marginTop:'40px' , fontFamily:'sans-serif' , fontWeight:'bold' , fontSize:'40px'}} className='diffheading'>How Able Glasses Work</h1>
            <div className="relative mt-16 h-80 lg:mt-8" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginTop: '100px' }}>
                <video autoPlay loop muted className='myvideo2' >
                    <source src="https://kshaminnovation.in/static/media/vdo.66e3521b4938cfc54110.mp4" style={{maxWidth: "1039px",  width: "60vw"}} />
                    Your browser does not support the video tag.
                </video>
            </div>

            <Sponsers/>
            <Footer/>  


        </div>

    )
}
