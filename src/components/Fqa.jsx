import React from 'react'
import SectionsHeader from './SectionsHeader'
import { ChevronDownIcon } from 'lucide-react';

const faqData = [
    {
        question: 'What services does your agency provide?',
        answer: 'We offer end-to-end digital services including brand strategy, UI/UX design, web and app development and growth-focused marketing solutions.'
    },
    {
        question: 'Do you work with startups or only large companies?',
        answer: 'We work with startups, growing businesses and established brands. Our process is flexible and tailored to match your goals and scale.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary by scope, but most projects take between 2–6 weeks. We provide a clear timeline after the discovery phase.'
    },
    {
        question: 'Do you offer ongoing support after launch?',
        answer: 'Yes. We offer maintenance, optimization and growth support packages to ensure your product continues to perform and evolve.'
    }
];

const Fqa = () => {
    return (
        <section className="text-center mt-36 mb-24">
            <SectionsHeader sectionTitle="FAQ" subtitle="Frequently Asked Questions" description="Everything you need to know about working with our agency. If you have more questions, feel free to reach out." />

            <div className="space-y-3">
                {faqData.map((faq, i) => (
                    <details
                        key={i}
                        className="group rounded-xl bg-white/6 select-none max-w-3xl mx-auto cursor-pointer hover:bg-white/10 transition"
                    >
                        <summary className="flex cursor-pointer items-center justify-between p-4">
                            <h4 className="font-medium">{faq.question}</h4>
                            <ChevronDownIcon className="h-5 w-5 text-gray-300 transition-transform group-open:rotate-180" />
                        </summary>
                        <p className="p-4 pt-0 text-sm leading-relaxed text-gray-300">
                            {faq.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    )
}

export default Fqa