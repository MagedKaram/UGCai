import React from 'react'

const SectionsHeader = ({ sectionTitle, subtitle, description }) => {
    return (
        <section className='text-center my-12'>
            {sectionTitle && <p className='text-sm font-medium text-violet-400 uppercase tracking-wide mb-3 '>{sectionTitle}</p>}
            {subtitle && <h2 className='text-2xl md:text-4xl text-white font-semibold'>{subtitle}</h2>}
            {description && <p className='max-w-md mx-auto text-sm text-gray-400 my-3'>{description}</p>}
        </section>
    )
}

export default SectionsHeader