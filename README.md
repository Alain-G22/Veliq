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
### 3. Seed Database

```bash
npm run db:seed
```

### 4. Run Locally

```bash
npm run dev
```

Visit http://localhost:3000

## Deployment to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Add `DATABASE_URL` environment variable
5. Click "Deploy"

## File Structure
## Customization

### Update Cars

Edit `lib/carData.js` and update `carsData` array. Then run:

```bash
npm run db:seed
```

### Add Blog Posts

Edit `lib/carData.js` and add to `blogPostsData` array.

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#dc2626',      // Red
  secondary: '#1f2937',    // Dark gray
  accent: '#f59e0b',       // Amber
}
```

### Add Affiliate Links

In `app/cars/[slug]/page.js`, update the "Enquire Now" button with your link.

## Environment Variables
## Troubleshooting

**Database error?**
- Check DATABASE_URL is correct
- Verify Neon database is active

**Cars not showing?**
- Run `npm run db:seed`
- Check database tables exist

**Styles broken?**
- Delete `.next` folder
- Run `npm run dev` again

## Support

Email: info@veliq.ng

## License

MIT License

---

**Ready to launch?** Deploy to Vercel now!
