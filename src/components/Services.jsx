import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react'
import React from 'react'
import SectionsHeader from './SectionsHeader'


const servicesData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Discovery & Planning',
        desc: 'We understand your goals, audience and challenges to craft a clear, actionable strategy.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Design & Development',
        desc: 'High-quality design and scalable development focused on performance and usability.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Launch & Growth',
        desc: 'We launch, optimize and continuously improve to drive measurable business growth.'
    }]


const Services = () => {
    return (
        <section className='text-center mt-36 mb-24'>
            <SectionsHeader sectionTitle="Our Services" subtitle="Everything your brand needs to grow" description="From strategy to execution, we help businesses build strong digital products and meaningful customer experiences." />

            <div className='max-w-6xl mx-auto px-4 text-left'>
                <div className='grid md:grid-cols-3 gap-8 mt-12'>
                    {servicesData.map((service, index) => (
                        <div key={index} className='rounded-2xl border border-white/6 hover:border-white/15 hover:-translate-y-1 duration-300 bg-white/3 p-6 '>
                            <div className='mb-4 text-violet-600 p-4 rounded bg-white/5 inline-flex'>
                                {service.icon}
                            </div>
                            <h3 className='text-lg font-semibold mb-2 text-white'>{service.title}</h3>
                            <p className='text-sm text-gray-400'>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services