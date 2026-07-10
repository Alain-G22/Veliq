# Veliq - Used Car Marketplace & Blog

A full-stack Next.js application for browsing, comparing, and reading about used cars (Tokunbo) in Nigeria.

**Live Demo:** Coming soon

## Features

✅ **Car Database & Search**
- Browse 10 popular used car models
- Filter by price, brand, body type, fuel type
- Real-time search functionality
- Accurate pricing for Nigeria market

✅ **Comparison Tool**
- Compare up to 4 cars side-by-side
- Detailed specifications comparison
- Price analysis
- Performance metrics

✅ **Expert Blog**
- 5 in-depth buying guides
- Car comparisons and reviews
- Budget recommendations
- Tokunbo buying tips

✅ **Responsive Design**
- Mobile-first approach
- Works seamlessly on all devices
- Fast loading times
- SEO optimized

✅ **Easy to Customize**
- Country-agnostic architecture
- Easy to swap cars and pricing
- Swappable affiliate links
- Customizable branding

## Tech Stack

- **Frontend:** Next.js 14, React 18, Tailwind CSS
- **Database:** PostgreSQL (recommended: Neon)
- **Deployment:** Vercel (free tier)
- **Content:** Headless (static data + future CMS integration)

## Quick Start

### 1. Prerequisites
- Node.js 18+ installed
- PostgreSQL database (free option: Neon)
- Vercel account (for deployment)

### 2. Clone & Install

```bash
# Clone the repository
git clone <repo-url>
cd Veliq

# Install dependencies
npm install
```

### 3. Setup Database

Sign up for free PostgreSQL at [Neon.tech](https://neon.tech):
1. Create a new project
2. Copy your connection string
3. Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your Neon connection string:
