import Link from 'next/link'
import { blogPostsData, carsData } from '@/lib/carData'

export default function BlogPostPage({ params }) {
  const post = blogPostsData.find(p => p.slug === params.slug)

  if (!post) {
    return (
      <main>
        <section className="py-16">
          <div className="container-max text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, we couldn't find this article.</p>
            <Link href="/blog" className="btn-primary">Back to Blog</Link>
          </div>
        </section>
      </main>
    )
  }

  // Get related cars mentioned in the post
  const carMentions = carsData.filter(car =>
    post.content.toLowerCase().includes(car.brand.toLowerCase()) &&
    post.content.toLowerCase().includes(car.model.toLowerCase())
  )

  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-max py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="text-primary hover:underline">Home</Link>
            <span>/</span>
            <Link href="/blog" className="text-primary hover:underline">Blog</Link>
            <span>/</span>
            <span className="text-secondary">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-12">
        <div className="container-max max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-red-100">
            <time>
              {new Date(post.created_at).toLocaleDateString('en-NG', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-spacing">
        <div className="container-max max-w-3xl">
          <article className="prose prose-lg max-w-none">
            <div className="prose prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Check if it's a heading
                if (paragraph.startsWith('##')) {
                  const text = paragraph.replace('## ', '')
                  return <h2 key={index} className="text-3xl font-bold text-secondary mt-12 mb-6">{text}</h2>
                }

                if (paragraph.startsWith('###')) {
                  const text = paragraph.replace('### ', '')
                  return <h3 key={index} className="text-2xl font-bold text-secondary mt-8 mb-4">{text}</h3>
                }

                // Check if it's a list item
                if (paragraph.startsWith('-')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('-'))
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  )
                }

                // Regular paragraph
                return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
              })}
            </div>
          </article>

          {/* Author Card */}
          <div className="card p-6 mt-12">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                AI
              </div>
              <div>
                <h4 className="font-bold text-secondary">AutoInsight Nigeria</h4>
                <p className="text-gray-600 text-sm">
                  Expert guides and data-driven insights to help you make the right car buying decision.
                </p>
              </div>
            </div>
          </div>

          {/* Related Cars */}
          {carMentions.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-secondary mb-6">Cars Mentioned in This Article</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {carMentions.slice(0, 4).map((car) => (
                  <Link
                    key={car.id}
                    href={`/cars/${car.brand.toLowerCase()}-${car.model.toLowerCase().replace(/\s+/g, '-')}`}
                    className="card p-6 hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-bold text-secondary mb-2">{car.brand} {car.model}</h4>
                    <p className="text-gray-600 text-sm mb-3">{car.year}</p>
                    <p className="text-primary font-semibold text-sm">View Full Specs →</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-secondary mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPostsData
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="card p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-xs text-primary uppercase tracking-wide mb-2">
                      {new Date(relatedPost.created_at).toLocaleDateString('en-NG', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <h4 className="font-bold text-secondary mb-3">{relatedPost.title}</h4>
                    <p className="text-gray-600 text-sm">{relatedPost.excerpt}</p>
                  </Link>
                ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-secondary text-white p-8 rounded-lg mt-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Like This Article?</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for weekly buying guides and market insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn-primary bg-primary hover:bg-red-700">
                Subscribe
              </button>
            </form>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link href="/blog" className="btn-outline">
              ← Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
