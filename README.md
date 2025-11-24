# Event Management System

A production-ready, modern event management platform built with Next.js 14, TypeScript, and MongoDB.

## 🚀 Features

- **Event Management**: Full CRUD operations for events with image upload
- **Admin Dashboard**: Beautiful, responsive admin interface with dark navy sidebar
- **Public Events Page**: Server-side rendered events listing with SEO optimization
- **Authentication**: Secure admin access with NextAuth
- **Real-time Updates**: Optimistic UI with SWR for instant feedback
- **Animations**: Smooth transitions and micro-interactions with Framer Motion
- **Image Support**: Add images via URL
- **Search & Filter**: Advanced search and date filtering
- **Responsive Design**: Mobile-first, fully responsive UI

## 📋 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Form Validation**: React Hook Form + Zod
- **Data Fetching**: SWR
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd EventManagement
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/eventmanagement
NEXTAUTH_SECRET=your-random-secret-key
NEXTAUTH_URL=http://localhost:3000
ADMIN_USER=admin
ADMIN_PASS=admin123
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
EventManagement/
├── app/
│   ├── admin/
│   │   ├── events/          # Event management page
│   │   ├── gallery/         # Gallery placeholder
│   │   ├── contacts/        # Contacts placeholder
│   │   └── layout.tsx       # Admin layout
│   ├── api/
│   │   ├── events/          # Event CRUD endpoints
│   │   └── auth/            # NextAuth configuration
│   ├── events/              # Public events page
│   └── login/               # Login page
├── components/
│   ├── events/              # Event-related components
│   ├── layout/              # Layout components (Sidebar, Header, etc.)
│   ├── ui/                  # UI components (ThemeToggle, etc.)
│   └── providers/           # Context providers
├── docs/                    # Documentation files
├── scripts/                 # Setup and deployment scripts
├── lib/
│   ├── db.ts                # MongoDB connection
│   └── validations.ts       # Zod schemas
├── models/
│   └── Event.ts             # Mongoose Event model
└── design-refs/             # Design reference files
```

## 🔑 Default Credentials

- **Username**: admin
- **Password**: admin123

## 📦 Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard

4. Your app will be live at the provided URL

### Environment Variables for Production

Add these in Vercel dashboard:
- `MONGO_URI`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (your Vercel URL)
- `ADMIN_USER`
- `ADMIN_PASS`
- `NEXT_PUBLIC_SITE_URL`

## 🧪 Testing

Run tests:
```bash
npm test
```

## 📝 API Endpoints

- `GET /api/events` - List events (with pagination, search)
- `POST /api/events` - Create event
- `GET /api/events/:id` - Get single event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event (soft delete)
- `POST /api/upload` - Upload image

## ✅ Implementation Checklist

- [x] Project scaffold created and builds
- [x] MongoDB connection implemented
- [x] API endpoints implemented
- [x] Admin events UI implemented and matches visual references
- [x] Image upload to Cloudinary implemented
- [x] Optimistic UI + SWR implemented
- [x] Animations via framer-motion implemented
- [x] Public events page implemented as server component
- [x] Placeholder pages for other admin sections
- [x] ESLint/Prettier configured
- [x] README and documentation included
- [x] Vercel deployment configured

## 🎨 Design System

**Colors:**
- Navy 900: `#0F172A` (Sidebar background)
- Navy 800: `#1E293B` (Hover states)
- Blue 600: `#2563EB` (Primary actions)
- Blue 500: `#3B82F6` (Hover states)

**Typography:**
- Font: Inter (Google Fonts)
- Headings: Bold, large spacing
- Body: Regular, comfortable line height

**Components:**
- Rounded corners: 8-12px
- Shadows: Subtle, layered
- Animations: 200-300ms cubic-bezier
- Spacing: 4px base unit

## 🔒 Security Notes

For production deployment:
1. Change default admin credentials
2. Use strong NEXTAUTH_SECRET (generate with `openssl rand -base64 32`)
3. Enable HTTPS only
4. Set up proper CORS policies
5. Implement rate limiting on API routes
6. Use environment-specific MongoDB databases

## 📄 License

MIT

## 👥 Support

For issues or questions, please open an issue in the repository.
