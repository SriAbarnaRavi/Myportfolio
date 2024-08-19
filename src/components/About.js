import AboutImg from '../assests/hero.jpg';

export default function About () {
    const config  = {
        line1: 'I am a dynamic frontend developer with a passion for crafting visually appealing and functional user interfaces. With six months of hands-on experience in React.js development, I excel in creating dynamic and responsive web applications.',
        line2: 'My journey as a self-taught developer has been filled with challenges, but it has also honed my ability to work end-to-end on frontend development projects.',
        
    }

    return <section className='flex flex-col md:flex-row bg-primary px-3' id='about'>
        <div className='py-3 md:w-1/3'>
            <img src={AboutImg} alt="heroimage" />
        </div>
        <div className='md:w-1/2 flex justify-items-center'>
            <div className='flex px-2 flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-secondary  mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                
            </div>
        </div>
    </section>
}

/** 
return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
<div className='py-5 md:w-1/2'>
    <img src={AboutImg} />
</div>
<div className='md:w-1/2 flex justify-center'>
    <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>{config.line1}</p>
        <p className='pb-5'>{config.line2}</p>
        <p className='pb-5'>{config.line3}</p>
    </div>
</div>
</section>
}
*/
