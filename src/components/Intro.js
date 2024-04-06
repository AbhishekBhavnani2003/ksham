import { EyeSlashIcon, SpeakerXMarkIcon, PhoneXMarkIcon  } from '@heroicons/react/20/solid' 
import { TypeAnimation } from 'react-type-animation';
import Innovation from './Innovation.js'
import './Intro.css'
const features = [
    {
        name: 'Deaf',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: PhoneXMarkIcon ,
    },
    {
        name: 'Mute',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: SpeakerXMarkIcon,
    },
    {
        name: 'Blind',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: EyeSlashIcon,
    },
]

export default function Example() {
    return (
        <>
        <div style={{ marginLeft: "40px" }}>
            <div className="overflow-hidden bg-white py-24 sm:py-32" >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 firstdiv " >
                        <div className="lg:pr-8 lg:pt-4 mx-5 ">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">kshaminnovation</h2>
                                <TypeAnimation
                                    sequence={[
                                        'Worlds 1st Smart Aid Glasses for ',
                                1000,
                                        'Worlds 1st Smart Aid Glasses for ',
                                1000,
                                        'Worlds 1st Smart Aid Glasses for ',
                                1000,
                                    ]}
                                speed={50}
                                style={{ fontSize: '2em' ,fontFamily:'sans-serif' }}
                                repeat={Infinity}
                                />
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>

                            </div>
                            <div className="h-full mx-10 my-10 mybutton" style={{ marginLeft: '150px', marginTop: '50px' }}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded stylingbutton">
                                    Get Early Access
                                </button>

                            </div>
                        </div>
                        <img
                            src="https://i.pinimg.com/564x/ec/2a/9a/ec2a9ad5a09ce03f65995c8ec5358232.jpg"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 mx-5 myimage"
                            style={{ height: '500px', width: '500px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
        <Innovation/>
        </>
    )
}
