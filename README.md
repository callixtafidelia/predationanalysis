# Wolves and Caribou: A Balancing Act in British Columbia

An interactive educational infographic exploring the complex predator-prey dynamics between grey wolves (*Canis lupus*) and woodland caribou (*Rangifer tarandus caribou*) in British Columbia. This website visualizes how predator-control programs influence caribou recovery and examines ecological concepts including trophic cascades and top-down vs. bottom-up regulation.

## Features

- **Interactive Sections**: Navigate through predator-prey dynamics, regulatory mechanisms, case studies, and ecological impacts
- **Visual Explanations**: Learn about trophic cascades and predator-control strategies
- **Real-World Case Studies**: Examine the Klinse-Za and Itcha-Ilgachuz caribou herd recovery projects
- **Dark Mode Support**: Comfortable viewing in any lighting condition
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technology Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Radix UI with shadcn/ui
- **Visualization**: Recharts
- **3D Models**: Three.js via React Three Fiber
- **Deployment**: Vercel-ready with GitHub integration

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/wolves-caribou-infographic.git

# Navigate to the project directory
cd wolves-caribou-infographic

# Install dependencies
npm install

# Run the development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Building for Production

\`\`\`bash
# Build the application
npm run build

# Start the production server
npm start
\`\`\`

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy your site

### Environment Variables
No environment variables are required for basic functionality. All assets are stored locally in the `/public` directory.

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx              # Main page with section navigation
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles and design tokens
├── components/
│   ├── header.tsx            # Site header
│   ├── navigation.tsx        # Navigation bar
│   ├── hero-section.tsx      # Homepage hero
│   ├── caribou-and-predation.tsx
│   ├── regulation-types.tsx
│   ├── case-study.tsx
│   ├── conclusion.tsx
│   └── reference-footer.tsx
├── public/
│   ├── assets/
│   │   └── wolfanimation.glb          # 3D wolf model
│   └── *.jpg                 # Infographic images
└── package.json
\`\`\`

## Color Palette

The site uses a carefully selected color scheme (Midnight & Emerald):
- **Primary**: Deep Slate (#1E3A5F)
- **Secondary**: Emerald Green (#2D7D6F)
- **Accent**: Warm Cream (#F4D4B0)
- **Background**: Cloud White (#F9F8F6)

## Attribution

© 2025 Callixta Fidelia C

## License

This project is available for educational and personal use. Please respect the original content and research.

## Contributing

For improvements or suggestions, please open an issue or submit a pull request.

## References

Each section of the infographic includes detailed references to scientific literature and conservation resources. See the reference sections within each page for citations.
