'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { caseStudies } from '../../constants/caseStudies';

interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  client: string;
  duration: string;
  role: string;
  year: string;
  heroImage?: string;
  techStack: string[];
  sections: {
    title: string;
    content: string[];
    image?: string;
    list?: string[];
  }[];
  results?: {
    metric: string;
    description: string;
  }[];
}

export default function CaseStudyPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const caseStudy = caseStudies.find((cs: CaseStudy) => cs.slug === slug);

  useEffect(() => {
    if (!caseStudy) {
      router.push('/');
    }
  }, [caseStudy, router]);

  if (!caseStudy) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        {caseStudy.heroImage && (
          <div className="relative h-[60vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-20">
          <div className="bg-black-100/90 backdrop-blur-md border border-blue-500/30 rounded-2xl p-8 md:p-12">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
                {caseStudy.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {caseStudy.title}
            </h1>

            {/* Description */}
            <p className="text-white-50 text-lg md:text-xl mb-8 leading-relaxed">
              {caseStudy.description}
            </p>

            {/* Meta Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <p className="text-white-50 text-sm mb-1">Client</p>
                <p className="text-white font-semibold">{caseStudy.client}</p>
              </div>
              <div>
                <p className="text-white-50 text-sm mb-1">Duration</p>
                <p className="text-white font-semibold">{caseStudy.duration}</p>
              </div>
              <div>
                <p className="text-white-50 text-sm mb-1">Role</p>
                <p className="text-white font-semibold">{caseStudy.role}</p>
              </div>
              <div>
                <p className="text-white-50 text-sm mb-1">Year</p>
                <p className="text-white font-semibold">{caseStudy.year}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-white text-sm font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-black-200 text-white-50 text-sm rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <article className="max-w-6xl mx-auto px-6 py-12">
        {caseStudy.sections.map((section: any, index: number) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white border-b border-blue-500/30 pb-4">
              {section.title}
            </h2>
            
            <div className="space-y-6">
              {section.content.map((paragraph: string, pIndex: number) => (
                <p key={pIndex} className="text-white-50 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Section Image */}
            {section.image && (
              <div className="mt-8 rounded-xl overflow-hidden border border-blue-500/20 bg-black-200 flex items-center justify-center" style={{ maxHeight: '500px' }}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto max-h-[500px] object-contain"
                />
              </div>
            )}

            {/* Section List */}
            {section.list && (
              <ul className="mt-6 space-y-3">
                {section.list.map((item: string, lIndex: number) => (
                  <li key={lIndex} className="flex items-start gap-3 text-white-50">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>

      {/* Results Section */}
      {caseStudy.results && (
        <div className="max-w-6xl mx-auto px-6 py-12 border-t border-white/10">
          <h2 className="text-3xl font-bold mb-8 text-white">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudy.results.map((result: any, index: number) => (
              <div
                key={index}
                className="bg-black-100 border border-blue-500/30 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{result.metric}</div>
                <p className="text-white-50">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back to Projects */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black-200 hover:bg-black-50 border border-white/10 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Projects
        </Link>
      </div>
    </div>
  );
}
