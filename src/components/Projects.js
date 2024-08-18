import websiteImg1 from '../assests/project-1.png';
import websiteImg2 from '../assests/project-2.png';
import websiteImg3 from '../assests/project-3.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Landing Page.My first project built with HTML&CSS',
                link: 'https://github.com/SriAbarnaRavi/landing-page'
            },
            {
                image: websiteImg2,
                description: 'Website. My second project built with HTML&CSS.',
                link: 'https://github.com/SriAbarnaRavi/PRODIGY_WD_01'
            },
            {
                image: websiteImg3,
                description: 'Basic Portfolio Website . Built with HTML, CSS, Javascript',
                link: 'https://github.com/SriAbarnaRavi/portfolio'
            },
            
        ]
    }

    return <section id='projects'  className="flex  flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-primary mb-5 w-[150px] font-bold"> Projects</h1>
                <p>These are some of my best projects. I have built these with Front-end Development. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btnn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}
