import { useGSAP } from '@gsap/react';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';

const Showcase = () => {

    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    
    useGSAP(() =>{
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline.to('.mask img', {
                transform: 'scale(1.1)'
            }).to('.content', {opacity: 1, y: 0, ease: 'power1.in' })
            }
    }, [isTablet])

    return (
        <section id='showcase'>
            <div className='media'>
                <video src="/videos/game.mp4" loop muted autoPlay playsInline></video>
                <div className='mask'>
                    <img src="/mask-logo.svg"/>
                </div>
            </div>

            <div className='content'>
                <div className='wrapper'>
                    <div className='lg:max-w-md'>
                        <h2>Rocket Chip</h2>

                        <div className='space-y-5 mt-7 pe=10'>
                            <p>
                                Introducing {" "}
                                <span className='text-white'>
                                    M4, the next generation of Apple silicon
                                </span>
                                . M4 powers
                            </p>
                            <p>
                                It drives apple Intelligence on iPad Pro, so you can do more than ever before. With up to 16-core CPU and 40-core GPU, M4 delivers up to 2x faster performance and up to 3x faster graphics than the previous generation, making it the most powerful chip ever in an iPad. 
                            </p>
                            <p>
                                A brand new 16-core Neural Engine performs up to 2x faster than the previous generation, enabling advanced machine learning capabilities for even more powerful apps. M4 also features a new media engine with ProRes support, allowing you to edit and play back multiple streams of 4K ProRes video with ease.
                            </p>
                            <p className='text-primary'>Learn more about Apple Inteligence</p>
                        </div>
                    </div>

                    <div className='max-w-3xs space-y-14'>
                        <div className='space-y-2'>
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering perfomance than M2</p>
                        </div>

                        <div className='space-y-2'>
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU perfomance than M2</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Showcase