# 📊 Sales Analytics Dashboard

A modern, interactive sales dashboard built with Next.js 15, featuring multiple chart visualizations and real-time filtering capabilities. This project demonstrates atomic design principles and responsive web development.

![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Latest-38B2AC)
![Recharts](https://img.shields.io/badge/Recharts-3.0.2-FF6B6B)

## 🎯 Project Overview

This sales dashboard provides an intuitive interface for analyzing sales performance across multiple years (2022-2024) with interactive charts and filtering capabilities. Built using atomic design methodology, the application is scalable, maintainable, and user-friendly.

## ✨ Features

### 📈 **Interactive Charts**
- **Bar Chart** - Traditional column visualization for monthly comparisons
- **Line Chart** - Trend analysis with smooth curves and data points  
- **Pie Chart** - Proportional breakdown with percentage labels

### 🎛️ **Dynamic Filtering**
- **Year Selection** - Switch between 2022, 2023, and 2024 data
- **Sales Threshold Filter** - Custom input to show sales above specified amount
- **Real-time Updates** - Charts update instantly when filters change

### 📊 **Analytics Dashboard**
- **Total Sales** - Sum of all sales for selected year and filters
- **Average Sales** - Mean monthly sales calculation
- **Peak Sales** - Highest monthly sales figure
- **Visual Statistics Cards** - Color-coded metrics with icons

### 🎨 **User Experience**
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Professional UI** - Clean, modern interface with smooth transitions
- **Empty States** - Helpful messages when no data matches filters
- **Loading States** - Smooth user experience during data processing

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.3.4 | React framework for production |
| **TypeScript** | 5.0+ | Type safety and better DX |
| **Tailwind CSS** | Latest | Utility-first CSS framework |
| **Recharts** | 3.0.2 | Chart library for React |
| **React** | 19.0.0 | UI library |

## 🏗️ Architecture

This project follows **Atomic Design Principles**:

```
components/
├── atoms/          # Basic building blocks
│   ├── Button.tsx     # Reusable button component
│   └── Input.tsx      # Form input component
├── molecules/      # Groups of atoms
│   ├── ChartTypeSwitcher.tsx  # Chart type selection
│   └── FilterInput.tsx        # Sales filter controls
└── organisms/      # Complex UI components
    └── SalesChart.tsx         # Main dashboard component
```

## 📁 Project Structure

```
sales-dashboard/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── page.tsx            # Main dashboard page
│   └── layout.tsx          # Root layout
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   ├── molecules/
│   │   ├── ChartTypeSwitcher.tsx
│   │   └── FilterInput.tsx
│   └── organisms/
│       └── SalesChart.tsx
├── data/
│   └── salesData.ts        # Mock sales data
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** 18.0 or later
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sales-dashboard.git
   cd sales-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Install required packages** (if not already included)
   ```bash
   npm install @tailwindcss/postcss autoprefixer
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📊 Data Structure

The dashboard uses structured sales data with the following format:

```typescript
type Sale = {
  year: number      // 2022, 2023, or 2024
  month: string     // "Jan", "Feb", "Mar", etc.
  sales: number     // Sales amount in USD
  region?: string   // Geographic region
  category?: string // Product category
}
```

### Sample Data
```javascript
{ year: 2024, month: "Jan", sales: 58000, region: "North", category: "Electronics" }
{ year: 2024, month: "Feb", sales: 65000, region: "South", category: "Electronics" }
// ... more records
```

## 🎛️ Usage Guide

### 1. **Select Year**
- Click on year buttons (2022, 2023, 2024) to switch datasets
- Charts automatically update to show selected year's data

### 2. **Choose Chart Type**
- **Bar Chart**: Best for comparing monthly values
- **Line Chart**: Ideal for identifying trends over time  
- **Pie Chart**: Perfect for seeing proportional breakdowns

### 3. **Apply Filters**
- Use the **Sales Threshold** input to filter out lower sales months
- Enter any amount (e.g., 70000) to show only months above that threshold

### 4. **Analyze Data**
- View **statistics cards** for quick insights
- Hover over chart elements for detailed tooltips
- Charts are fully responsive and interactive

## 🔧 Configuration

### Tailwind CSS Setup
The project uses Tailwind v4 syntax:
```css
/* app/globals.css */
@import "tailwindcss";
```

### PostCSS Configuration
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  }
}
```

## 🚀 Future Enhancements

- [ ] **API Integration** - Connect to real database or external APIs
- [ ] **More Chart Types** - Area charts, scatter plots, heatmaps
- [ ] **Export Functionality** - Download charts as images or data as CSV
- [ ] **Date Range Picker** - Custom date range selection
- [ ] **Real-time Data** - WebSocket integration for live updates
- [ ] **User Authentication** - Login system and personalized dashboards
- [ ] **Advanced Filtering** - Multi-select filters for region, category
- [ ] **Performance Optimization** - Virtual scrolling for large datasets
- [ ] **Dark Mode** - Theme switching capability
- [ ] **Accessibility** - Enhanced screen reader support

## 🐛 Troubleshooting

### Common Issues

**Charts not displaying:**
- Ensure all dependencies are installed: `npm install`
- Check browser console for JavaScript errors
- Verify data format matches the expected structure

**TypeScript errors:**
- Run `npm run build` to check for type errors
- Ensure all imports have correct file extensions

**Styling issues:**
- Clear browser cache and restart dev server
- Verify Tailwind configuration is correct

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Open a Pull Request

## 👨‍💻 Author

**Your Name**
- GitHub: WaqasShoaib(https://github.com/WaqasShoaib)

## 🙏 Acknowledgments

- [Recharts](https://recharts.org/) for the excellent charting library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) team for the amazing React framework
- [Vercel](https://vercel.com/) for deployment platform

---

⭐ **Star this repository if you found it helpful!**





