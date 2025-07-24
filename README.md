# Evento

Evento is a modern web application built with Next.js, Prisma, and Tailwind CSS. It provides an event listing platform with city-based filtering, event details, and static pages for privacy policy and terms & conditions.

## Features

- Next.js App Router architecture
- Prisma ORM for database management
- Tailwind CSS for styling
- City-based event filtering
- Dynamic event pages
- Privacy Policy and Terms & Conditions static pages

## Project Structure

```
src/
  app/
    event/[slug]/         # Dynamic event details
    events/[city]/        # Events filtered by city
    privacy-policy/       # Privacy Policy page
    terms-conditions/     # Terms & Conditions page
  components/             # Reusable UI components
  lib/                    # Database and utility functions
prisma/
  schema.prisma           # Prisma schema
  seed.ts                 # Database seeding script
public/
  fonts/                  # Custom fonts
  ...                     # Static assets
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up the database:**
   - Configure your database in `prisma/schema.prisma`.
   - Run migrations:
     ```bash
     npx prisma migrate dev
     ```
   - (Optional) Seed the database:
     ```bash
     npx prisma db seed
     ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npx prisma migrate dev` — Run Prisma migrations
- `npx prisma db seed` — Seed the database

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is licensed under the MIT License.
