import HeroImg from '../assests/about.jpg';
import { AiOutlineMail , AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"; 


export default function Hero() {
    const config  = {
        subtitle: 'Front-end developer and Web Developer ',
        social: {
            mail: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new',
            Github: 'https://github.com/SriAbarnaRavi',
            linkedin: 'https://www.linkedin.com/in/sriabarna18/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>sri</span> Abarna 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.mail} className='pr-5 hover:text-white'><AiOutlineMail  size={40} /></a>
               
               <a href={config.social.Github} className= ' pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>

                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}