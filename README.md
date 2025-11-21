# DNSSense Design System

> A comprehensive design system for DNSSense projects built with CSS variables, React, and Tailwind CSS.

[![GitHub](https://img.shields.io/badge/GitHub-dnssense-blue)](https://github.com/dnssense/dns-sense-design-library)

## 🎨 Overview

The DNSSense Design System is a complete, production-ready design library featuring:

- **90+ Semantic Color Variables** - Organized into 9 distinct color systems
- **Roboto Typography** - Complete font scale with 8 predefined sizes
- **CSS Variables First** - Everything customizable through `/styles/globals.css`
- **Tailwind CSS 4.0** - Modern utility-first CSS framework
- **React Components** - Reusable component library (coming soon)

## 📦 Installation

### Option 1: Copy to Existing Project

1. Copy `styles/globals.css` to your project
2. Import it in your main app file:

```tsx
import './styles/globals.css';
```

### Option 2: Clone Repository

```bash
git clone https://github.com/dnssense/dns-sense-design-library.git
cd dns-sense-design-library
```

## 🎯 Quick Start

### Using Colors

```tsx
// In React components
<div style={{ backgroundColor: 'var(--primary)' }}>
  Primary Background
</div>

// Category colors
<span style={{ backgroundColor: 'var(--category-safe)' }}>Safe</span>
<span style={{ backgroundColor: 'var(--category-malicious)' }}>Malicious</span>

// Status indicators
<div style={{ backgroundColor: 'var(--status-up)' }}>System Up</div>
<div style={{ backgroundColor: 'var(--status-error)' }}>Error</div>

// Badge colors
<span style={{ backgroundColor: 'var(--badge-blue)' }}>New</span>
<span style={{ backgroundColor: 'var(--badge-purple)' }}>Premium</span>
```

### Using Typography

```tsx
// Headers (automatically styled)
<h1>Page Title</h1>  // 36px, Roboto
<h2>Section</h2>      // 32px, Roboto
<h3>Subsection</h3>   // 28px, Roboto
<h4>Heading</h4>      // 24px, Roboto

// Body text
<p>Regular paragraph text</p>  // 14px, Roboto

// Captions
<p className="caption">Small text</p>  // 12px

// Section headings
<p className="section-heading">SECTION</p>  // 10px, uppercase
```

## 🎨 Color Systems

### Base Colors (13 variables)
- `--primary`, `--secondary`, `--accent`
- `--background`, `--foreground`
- `--card`, `--muted`, `--destructive`
- `--success`, `--border`, `--input`
- And more...

### Category Colors (6 variables)
For content classification:
- `--category-total` - Blue (#5885EA)
- `--category-safe` - Green (#4CAF50)
- `--category-malicious` - Red (#F44336)
- `--category-variable` - Gray (#9E9E9E)
- `--category-restricted-content` - Yellow (#FFC107)
- `--category-new-variable` - Orange (#FF9800)

### Incident Colors (3 variables)
For risk levels:
- `--incident-high-risk` - Red
- `--incident-mid-risk` - Orange
- `--incident-suspicious` - Yellow

### Status Colors (5 variables)
For system health:
- `--status-error` - Red
- `--status-warning` - Orange
- `--status-up` - Green
- `--status-down` - Red
- `--status-stable` - Yellow

### Badge Colors (9 variables)
Vibrant colors for labels:
- `--badge-nature`, `--badge-green`, `--badge-blue`
- `--badge-orange`, `--badge-purple`, `--badge-red`
- `--badge-yellow`, `--badge-teal`, `--badge-gray-2`

### Background Colors (16 variables)
For tables, overlays, and states:
- `--bg-white`, `--bg-table-hover`, `--bg-table-selected`
- `--bg-table-zebra`, `--bg-background`
- Opacity variants: `--bg-white-10`, `--bg-white-20`, `--bg-white-50`
- And more...

### Tag Palette Colors (17 variables)
With opacity variants:
- Base: `--tag-orange`, `--tag-green`, `--tag-gray`
- With opacity: `--tag-orange-10`, `--tag-orange-20`, `--tag-orange-30`
- Prime variants: `--tag-prime-06`, `--tag-prime-20`, `--tag-prime-50`

### Line Colors (3 variables)
For charts and dividers:
- `--line-blue`
- `--line-gray`
- `--line-blue-50` (50% opacity)

### Selection Colors (11 variables)
For interactive states:
- `--selection-color-white`, `--selection-color-dark`
- `--selection-color-prime`, `--selection-status-up`
- And more...

### Cell Colors (8 variables)
For tables and grids:
- `--cella-white`, `--cella-hover`, `--cella-pressed`
- `--cella-prime`, `--cella-dark`, `--cella-gray`
- `--cella-litle`, `--cella-ice-blue`

## 📐 Layout & Spacing

### Border Radius
```css
--radius: 6px;           /* Default radius */
--radius-button: 200px;  /* Pill buttons */
--radius-card: 12px;     /* Card containers */
```

### Shadows
```css
--shadow-xs  /* Subtle */
--shadow-sm  /* Small cards */
--shadow-md  /* Medium elevation */
--shadow-lg  /* Large elevation */
--shadow-xl  /* Maximum elevation */
--shadow-inner  /* Inset shadow */
```

## 🔤 Typography Scale

```css
--text-h1: 36px;              /* Page titles */
--text-h2: 32px;              /* Section headers */
--text-h3: 28px;              /* Subsections */
--text-h4: 24px;              /* Headings */
--text-base: 14px;            /* Body text */
--text-label: 12px;           /* Form labels */
--text-caption: 12px;         /* Captions */
--text-section-heading: 10px; /* Section headers */
```

### Font Weights
```css
--font-weight-normal: 400;  /* Regular text */
--font-weight-medium: 500;  /* Buttons, labels */
```

## 🎯 Usage Examples

### Category Badge
```tsx
<span style={{
  backgroundColor: 'var(--category-safe)',
  color: 'white',
  padding: '4px 12px',
  borderRadius: 'var(--radius)',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'var(--text-caption)'
}}>
  Safe
</span>
```

### Status Indicator
```tsx
<div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}}>
  <div style={{
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--status-up)'
  }} />
  <span style={{
    fontFamily: 'Roboto, sans-serif',
    fontSize: 'var(--text-base)',
    color: 'var(--foreground)'
  }}>
    System Operational
  </span>
</div>
```

### Data Table Cell
```tsx
<td style={{
  backgroundColor: 'var(--cella-white)',
  padding: '12px',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 'var(--text-base)'
}}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cella-hover)'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cella-white)'}
>
  Data Cell
</td>
```

### Card Component
```tsx
<div style={{
  backgroundColor: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-card)',
  padding: '24px',
  boxShadow: 'var(--shadow-sm)'
}}>
  <h3 style={{
    fontFamily: 'Roboto, sans-serif',
    fontSize: 'var(--text-h3)',
    color: 'var(--foreground)',
    marginBottom: '16px'
  }}>
    Card Title
  </h3>
  <p style={{
    fontFamily: 'Roboto, sans-serif',
    fontSize: 'var(--text-base)',
    color: 'var(--muted)'
  }}>
    Card content goes here
  </p>
</div>
```

## 🎨 Customization

All design tokens can be customized by editing `/styles/globals.css`:

```css
:root {
  /* Change primary color */
  --primary: rgba(YOUR, COLOR, HERE, 1);
  
  /* Adjust typography */
  --text-h1: 42px;
  
  /* Modify shadows */
  --shadow-sm: your custom shadow;
}
```

Changes propagate automatically across your entire application!

## 📊 Design System Statistics

- **Total CSS Variables:** 100+
- **Color Systems:** 9 distinct systems
- **Total Colors:** 90+ semantic colors
- **Typography Sizes:** 8 predefined sizes
- **Shadow Levels:** 6 elevation levels
- **Border Radius:** 3 variants

## 🔧 Technical Details

### Technologies
- **CSS Variables** - For themability
- **Tailwind CSS 4.0** - Utility-first framework
- **Roboto Font** - Google Fonts
- **React** - Component library (coming soon)
- **TypeScript** - Type safety (coming soon)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 📞 Contact

- GitHub: [@dnssense](https://github.com/dnssense)
- Repository: [dns-sense-design-library](https://github.com/dnssense/dns-sense-design-library)

---

**Built with ❤️ by the DNSSense team**

*Last updated: November 21, 2025*