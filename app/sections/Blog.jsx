'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleHeader from '../components/TitleHeader';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useGSAP(() => {
    // Animate section header
    gsap.from('.blog-header', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.blog-header',
        start: 'top 80%',
      },
    });

    // Animate category filters
    gsap.from('.category-filter', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.category-filters',
        start: 'top 80%',
      },
    });
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Separate featured and regular posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" ref={sectionRef} className="section-padding">
      <div className="w-full md:px-10 px-5">
        {/* Header */}
        <div className="blog-header">
          <TitleHeader
            title="Blog & Tutorials"
            sub="📝 Sharing Knowledge & Problem-Solving Insights"
          />
          <p className="text-white-50 text-center max-w-3xl mx-auto mt-4">
            Dive into my technical articles where I share solutions to real problems, 
            best practices, and lessons learned from building scalable applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filters flex flex-wrap justify-center gap-3 mt-12 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-filter px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-black-200 text-white-50 border border-white/10 hover:border-purple-500/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h3 className="text-2xl font-bold text-white">Featured Articles</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        {regularPosts.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h3>
              <span className="text-white-50 text-sm">
                {regularPosts.length} {regularPosts.length === 1 ? 'article' : 'articles'}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index + featuredPosts.length} />
              ))}
            </div>
          </>
        )}

        {/* No Posts Found */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600/10 rounded-full mb-4">
              <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
            <p className="text-white-50">Try selecting a different category</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to stay updated?
            </h3>
            <p className="text-white-50 mb-6 max-w-xl mx-auto">
              Get notified when I publish new articles about web development, 
              problem-solving, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-6 py-3 bg-black-200 border border-white/10 rounded-lg text-white placeholder-white-50/50 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
