import React from 'react'
import SectionsHeader from './SectionsHeader'
import { Check } from 'lucide-react'
import { GhostButton, PrimaryButton } from './Buttons'


const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$499',
        desc: 'Best for early-stage startups.',
        credits: 'One-time',
        features: [
            'Project discovery & planning',
            'UI/UX design',
            'Basic website development',
            '1 revision round',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Growth',
        price: '$1,499',
        desc: 'Growing teams and businesses.',
        credits: 'Monthly',
        features: [
            'Everything in Starter',
            'Advanced UI/UX design',
            'Custom development',
            'Performance optimization',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Scale',
        price: '$3,999',
        desc: 'For brands ready to scale fast.',
        credits: 'Custom',
        features: [
            'Everything in Growth',
            'Dedicated project manager',
            'Ongoing optimization',
            'Marketing & growth support',
            'Chat + Email support'
        ]
    }
]


const Pricing = () => {
    return (
        <section className='backdrop-blur-2xl bg-white/2 border-y border-white/10 py-10 text-center   '>
            <SectionsHeader sectionTitle="Pricing" subtitle="Simple, transparent pricing" description="Flexible agency packages designed to fit startups, growing teams and established brands." />

            <div className='grid md:grid-cols-3 max-w-5xl mx-auto gap-5'>
                {
                    plansData.map((plan) => <div key={plan.id} className={` mx-4 my-4 border border-white/6 px-6 py-5 rounded-2xl hover:-translate-y-1 transition duration-300 hover:bg-violet/8 text-left relative ${plan.popular ? "bg-violet-600/20" : "bg-violet-600/5"}`}>
                        {plan.popular &&
                            <div className='absolute -top-5 left-0 right-0 px-3 py-2 text-white flex justify-center '>
                                <p className=' bg-violet-500 px-2 py-1 rounded-xl text-xs '>Most popular</p>
                            </div>}
                        <h4 className=''>{plan.name}</h4>
                        <p className='mt-1 text-gray-500 text-xs'><span className='text-3xl font-bold text-white'>{plan.price}</span>  / {plan.credits}</p>
                        <p className='text-sm text-white/90 my-2'>{plan.desc}</p>
                        <ul className='my-5 text-sm text-gray-300'>
                            {plan.features?.map((f, i) => (
                                <li key={i} className='flex gap-4 justify-start mb-3'>
                                    <Check className='size-4 text-violet-600' />
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <div className=' text-center '>
                            {plan.popular ? <PrimaryButton className='w-full' >
                                Get Started
                            </PrimaryButton> : <GhostButton className='w-full text-center'>
                                Get Started
                            </GhostButton>}
                        </div>
                    </div>)
                }

            </div>
        </section>
    )
}

export default Pricing