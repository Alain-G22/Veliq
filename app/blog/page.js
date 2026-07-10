import Link from 'next/link'
import { blogPostsData } from '@/lib/carData'

export default function BlogPage() {
  const sortedPosts = [...blogPostsData].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )

  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-12">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">AutoInsight Blog</h1>
          <p className="text-lg text-red-100">
            Expert guides, comparisons, and tips for buying used cars in Nigeria
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {sortedPosts.length > 0 && (
        <section className="section-spacing">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-secondary mb-8">Latest Article</h2>
            <Link
              href={`/blog/${sortedPosts[0].slug}`}
              className="block card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image placeholder */}
                <div className="bg-gradient-to-br from-primary to-red-700 h-64 md:h-auto flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto opacity-50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                    </svg>
                    <span className="text-sm opacity-75">Featured</span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {new Date(sortedPosts[0].created_at).toLocaleDateString('en-NG', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-secondary mb-4">{sortedPosts[0].title}</h3>
                  <p className="text-gray-600 text-lg mb-4">{sortedPosts[0].excerpt}</p>
                  <span className="text-primary font-semibold">Read Article →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-gray-50 section-spacing">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-secondary mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {new Date(post.created_at).toLocaleDateString('en-NG', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-primary font-semibold">Read Article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-spacing">
        <div className="container-max">
          <div className="bg-secondary text-white p-12 rounded-lg max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-300 mb-6">
              Get the latest buying guides, price updates, and car reviews delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn-primary bg-primary hover:bg-red-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
