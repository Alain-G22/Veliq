import postgres from 'postgres';

let sql;

if (!sql) {
  sql = postgres(process.env.DATABASE_URL || 'postgresql://localhost/auto_blog', {
    onnotice: () => {},
  });
}

export { sql };

// Helper functions
export async function getCars(country = 'nigeria') {
  const result = await sql`
    SELECT * FROM cars 
    WHERE country = ${country}
    ORDER BY popular DESC, brand ASC
  `;
  return result;
}

export async function getCarById(id, country = 'nigeria') {
  const result = await sql`
    SELECT * FROM cars 
    WHERE id = ${id} AND country = ${country}
  `;
  return result[0];
}

export async function getCarsByBrand(brand, country = 'nigeria') {
  const result = await sql`
    SELECT * FROM cars 
    WHERE brand = ${brand} AND country = ${country}
    ORDER BY model ASC
  `;
  return result;
}

export async function searchCars(query, country = 'nigeria') {
  const searchTerm = `%${query}%`;
  const result = await sql`
    SELECT * FROM cars 
    WHERE country = ${country} 
    AND (brand ILIKE ${searchTerm} OR model ILIKE ${searchTerm})
    ORDER BY popular DESC
  `;
  return result;
}

export async function filterCars(filters, country = 'nigeria') {
  let query = sql`SELECT * FROM cars WHERE country = ${country}`;
  
  if (filters.brand) {
    query = query`AND brand = ${filters.brand}`;
  }
  if (filters.minPrice) {
    query = query`AND price_min >= ${filters.minPrice}`;
  }
  if (filters.maxPrice) {
    query = query`AND price_max <= ${filters.maxPrice}`;
  }
  if (filters.fuelType) {
    query = query`AND fuel_type = ${filters.fuelType}`;
  }
  if (filters.bodyType) {
    query = query`AND body_type = ${filters.bodyType}`;
  }
  
  const result = await query`ORDER BY popular DESC`;
  return result;
}

export async function getBlogPosts(country = 'nigeria') {
  const result = await sql`
    SELECT * FROM blog_posts 
    WHERE country = ${country} OR country = 'global'
    ORDER BY created_at DESC
  `;
  return result;
}

export async function getBlogPostBySlug(slug, country = 'nigeria') {
  const result = await sql`
    SELECT * FROM blog_posts 
    WHERE slug = ${slug} AND (country = ${country} OR country = 'global')
  `;
  return result[0];
}
