import { TypeAnimation } from 'react-type-animation';
import Innovation from './Innovation.js';
import './Intro.css';

const features = [
    {
        name: 'Deaf',
        description:
            'Patented dome bone conduction transducer glasses with microphone arrays, Bluetooth, and rechargeable capability for the deaf and hard of hearing.',
        iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT3SURBVHgB1ZpprF1TGIbfKkWVlipqKq2hrStIDQ0ilB+ViKEaIm5EfyC5RSgi4YchQUJEgj8iQpDgB4pQQ2kjiA5p2qbzeJvO8zyP79t1ds639tnT2Xfvc27f5En2uWvYa+39rW9939q3C4rTiaSF3E2GkD7kfHI62UJWkDXkX/IXmUn2opPoDNJG5pA95HAGVG8hea7Svmk6iTxG5iPbwOOYSx6v9JdLXZBPMpH3SWvo7xrUSvIfWVJBJtSXXEQGkpvgTC187y/hJrMbDZAG8Adqn+if5C7SK6X9meROMj7U/hCZUCkvVRrg5NDNF8At5jwaCfe2bH9TUOJEesC98kPmhuPIxeiY1P5X+BP5ghyHEvRs6EafwrnVOGkQ15P7ySg4E7okpm5P8pnpez95FQVLr3eHuYnWxKkxdfuTj8lyRHsjmd8YOOdgdRr53dTbTi5AgfrAdL6PXBpTbwTZgGyudRY5J9S+f6X/oM7rKEhXkZ2m47di6o1G7Wan9bORtJNtqJ3Iaji3a/WhKVfbK1CA7FpYB+fvwxpOdsF/W9+QoeQsONM5l9xLJsJ3DtMqdQKdR9ab8pdQgP4xHX4fUa61MQP+07sN8RtpN/Ia/InIXI83dX42ZRPRQclrHDQdjoqo8wR8r3I70tWVvGvaKRAcYspbTZnun7aBJqoFvn0PDpXraY8zdb6C/0ST1Bu+2bxhygbDXzstSR2lbSjWVmXzm0PlekLXmt9jyQFkk8zuN/P7FnMtJ7DT/O6b1FHaJM4215tQG/8PgPPvgWagPs01133MtR7YtpiyGqVNYrW51ia1JVQeLE5JtltvBLrQtFdfgTPQ3+wbzWqisVJk+gyigzK9ia2oLsB+qE/yVO+Qb8kN5u968nbTvAclSmHBJnOz98jN5GTUp7A7vhLuTQT9XoMSFZ5E4GYnkfuQX23wN85uKFHqfBGiYyPZ+MOoX7L/v00/49EA3Uo+J7+QVfAnovVyHerTMPim1IYGS8n+y3Cu2IYNXTO2V4SwwrSdipQ9oixpkb5iBiKfnyUS1X4z1rRTRDwcTZRCinYkx1xWSn2/hr+e3kSTJfPRSV8wqBcT6sqEJsBfSz8iPnNsmLQ2lCcEg3oqoZ7CexuWK/Qv/dgmi25ENcvTAIdF1NHa+QT+BObBj9dKl55iL9TutoPIYlQHpmPO3hHtFcrYCUwnF6KBUgqpEz+5w+/Io+RBuPx7HXz7Hh3RXnm7zbl1GD0IDdYDyHaioU0wfDal3/YUUTnK1WiC+pHZiB+89oaPSPeItopIg5RXcZHS27wH2x2WTi8eIT/BxU8KOf4nb5PLEgZmD8jkWks5rqxXWuBauAoPtOsmhRhKd+0ZViuOQT2J6gQ0me4oQI1+lUPNtTa1XShAjZ6EDQSnoyDlnYSO63W82aOONkp27EfG5Wii7kDVrvVx5ISM7RTo2aSpsEWd503YbwaXk1OyNTtaz+bKm1GQ8kxirbmWW+2ZsZ0+zAfmp81uAwpSnkkoZdxfuVYIMTJjuxGohiCKr5aiybKfgPVmBqTU1wHxbvgHz02X8gP7Da8dbg8I79YKPeQIbGiu6HUgOokUI9mgT8GcEn3lCQ+Rp+HOjOwnMOUPY9CJJJ//A/wPhUloHSmT6/DhcNGSuTyP9C+my+Ai3k4RscZJn271bz86ftQ/pOjwTBubwu4XUHLefARUocjC7K1jMwAAAABJRU5ErkJggg==',
    },
    {
        name: 'Mute',
        description: 'Glasses for the mute featuring real-time sign language to audio conversion, paired with side cameras and speakers for offline processing.',
        iconUrl: 'data:image/png;base64,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',
    },
    {
        name: 'Blind',
        description: 'Glasses for the blind equipped with object and face recognition capabilities along with a 1080p front camera.',
        iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN8SURBVHgB7ZhdaE9hHMe/szH7z8u8Rsi8pUgpuXFBMTVkCSPuEEUSuWOrlRryVm5YLmhq7cKdl2iuFBeUCytlyUsk8jbzNpPN9+s5J8e//znnebb/SD3f+qzT/s/v9zy/c36/3/OcA3h5eXl5eXl5/RUVIL8qJWVkPBlLhpMM6STt5AV5STrIZ+RJ+QhiNFlOFpEFZBJMMHFSAE9JK7lKrpC3+AfS3a0ml8lX0tMHvsAEshbJwcfK9UmMISvJHjI7xv4beU5ukzaYNBpJymGe1ERSnMNOAT0kJ8gF8hp5lha7CiYNku6qUqSCDIzxoyeo1LuT4ucBWY881ayczCLNSE4bFW4NGWbpV+PqA7skn41kHvoQzGCyHyZne1Im2541kTqUauYoOUcOkxX4M40KArvOFP/vSB1yp2CippCbsCvM+kgABUHgHTnG6X9Lc8xVazlPC5kBS1WSJ5aOVbxhCqmzNJCumLH7YubTXtJqOZ/2mMVIkO7iLphNyMah0mBZxH5nyvhRCXNvRHpahXwi25CjTgrJaUsnIWqHmcBeNdCB5LxOUibwZzv3d3IqWPcvFZEj5IdjEI2RRaxOGasUG4RkNTnOr/UeIAOKgou9cG9jjyPXC1PGat9QoM0JY9rgpgEwdVasi63oXR9+H7keYTH+IJmb8Hs73KX1b9afszCPx1VlkWubI0I5uQYTjDawaTCHxVA2NyJb3eSMLhSIUsq1JpoizqodbUOqIj4aHW21XtVyUehAFycdnaiblAT22iveONrr6ZVG7F2706FoAKFUF7th+rCNI52lKiL22qm7HBayI2K7Cfb7hPaxLUip4yXklaXDVvzesZWWDRY2YY8fEthpx75nOZ9O0ZWwlM4oLZaOayJ2Wph27o8xY/UGp7NSYcRGZ69ui3l0lpsKR+kUWwfTSpOch6fYqNS51sC84Khgj5F1ZGjWOJtTrNJWqep8ig2lvFM7bEb62V931OV9otbC53nEv0E6S/muw95dJN815baKtATxi98QjOtO8VNlu/jevGNrT1AXm47kd+xb5BHMTqz0mknmkwkwqZotLf4+OU4uoh/esbOl/q6vE9eRn68dl2BqJoNeKF/fnZRqan1zyGQk14b6/DOYJ3UDJoA+fXfqjy+ACkApMw5mD1Dq6Gl9gPkCqDRRxwvf3b28vLy8vLy8/hf9BODpH7jTpdGsAAAAAElFTkSuQmCC',
    },
];

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
                                        style={{ fontSize: '2em', fontFamily: 'sans-serif' }}
                                        repeat={Infinity}
                                    />
                                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                        {features.map((feature) => (
                                            <div key={feature.name} className="relative pl-9">
                                                <dt className="inline font-semibold text-gray-900">
                                                    <img src={feature.iconUrl} alt={feature.name} className="absolute left-1 h-5 w-5 text-indigo-600" aria-hidden="true" 
                                                    style={{marginTop:'3px'}}/>
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
            <Innovation />
        </>
    );
}
