import Values from "./Values"
import './Vision.css'

const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
    { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
    { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
    { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
    { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
    { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

export default function Example() {
    return (
        <>
        <div className="bg-white" style={{marginTop:'-50px'}}>
            <div className="bg-white py-24 sm:py-32 flex " style={{ marginTop: '100px' }}>
                <h1 style={{ fontSize: '30px', textAlign: 'center', fontFamily: 'sans-serif' }} className="aboutmission">Our mission is to make Information, Education & Entertainment accessible through Smart Wearable Solutions.</h1>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8" style={{marginTop:'-250px'}}>
                <div style={{marginTop:'-150px'}}>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Description</h2>
                    <p className="mt-4 text-gray-500" style={{marginTop:'30px'}}>
                        At Ksham Innovation, we break down barriers and make technology accessible to everyone. We believe that everyone deserves the opportunity to hear, speak, and navigate the world in real-time, regardless of having hearing, speech, or visual impairment. <br/>

                        Our technology is designed to empower those with disabilities, allowing them to learn, communicate & perform their daily chores with greater ease and independence. But our work doesn't stop there. We dream & envision creating a smart and safer alternative to traditional earbuds and headphones, extending the age during which people may face difficulties in hearing.<br/>

                        By doing so, we are not only improving the lives of those with hearing loss, but also providing a solution for anyone who wants to enjoy music, information access in a safer way, and audio content while minimizing the risk of damaging their hearing.<br/>
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8" style={{marginTop:'30px'}}>
                    <img
                        src="https://i.pinimg.com/564x/16/c0/4e/16c04ec289fee6e1a7d7c581054c7f6f.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://i.pinimg.com/564x/79/c0/bb/79c0bb17745ef4c096084e99ce5a68ab.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                       
                        src="https://i.pinimg.com/564x/0e/56/d7/0e56d741ae854f29a13865767a4bedf1.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100 custom" 
                        style={{marginTop: "-250px"}}
                    />
                    <img
                        src="https://i.pinimg.com/736x/81/62/e1/8162e1a55b4de66132a611e9e06b36af.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove." 
                        className="rounded-lg bg-gray-100"
                        style={{marginTop: "-70px"}}
                    />
                </div>
            </div>
        </div>
           <Values/>
           </>
    )
}
