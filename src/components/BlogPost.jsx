import React from 'react'
import './BlogPost.css'
import { BLOGS } from '../data/blogData'

const BlogPost = ({ index, navigateTo }) => {
  const blog = BLOGS[index]
  if (!blog) {
    return <div style={{ padding: '120px 60px', textAlign: 'center', color: 'var(--white)' }}>Post not found</div>
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-header">
        <div className="blog-post-header-content">
          <span className="blog-post-tag">{blog.tag}</span>
          <h1 className="blog-post-title" dangerouslySetInnerHTML={{ __html: blog.title }} />
          <div className="blog-post-divider"></div>
          <span className="blog-post-meta">{blog.date} · iQue CAP Insights</span>
        </div>
      </div>

      <div className="blog-post-body">
        <div className="blog-back" onClick={() => navigateTo('blog')}>← Back to Insights</div>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: blog.content }} />

        <div className="blog-post-cta-box">
          <div className="blog-post-cta-bar"></div>
          <div className="blog-post-cta-content">
            <div className="blog-post-cta-label">iQue CAP</div>
            <h3 className="blog-post-cta-title">Join India's Investment Network</h3>
            <p className="blog-post-cta-text">Connect with India's most promising startups across 9 states.</p>
            <button className="blog-post-cta-btn" onClick={() => navigateTo('contact')}>Begin Your Journey →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost