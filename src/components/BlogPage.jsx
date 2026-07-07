import React from 'react'
import './BlogPage.css'
import { BLOGS } from '../data/blogData'

const BlogPage = ({ navigateTo }) => {
  return (
    <>
      <div className="blog-hero">
        <div>
          <div className="section-label">The iQue CAP Journal</div>
          <h1>India's <em>Startup</em><br />Story. Told Right.</h1>
        </div>
      </div>

      <div className="blog-grid-container">
        <div className="blog-grid">
          {BLOGS.map((blog, index) => (
            <div key={index} className="blog-row" onClick={() => navigateTo('blogpost', index)}>
              <div className="blog-row-left">
                <span className="blog-row-num">{String(index + 1).padStart(2, '0')}</span>
                <span className="blog-row-tag">{blog.tag}</span>
              </div>
              <div className="blog-row-center">
                <div className="blog-row-title">{blog.title}</div>
                <div className="blog-row-excerpt">{blog.content.replace(/<[^>]*>/g, '').slice(0, 120)}...</div>
              </div>
              <div className="blog-row-right">
                <span className="blog-row-date">{blog.date}</span>
                <span className="blog-row-cta">Read →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogPage