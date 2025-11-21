# DNSSense Design System

## 🎨 Complete Design System with 90+ Semantic Color Variables

**Version:** 1.0.0  
**Last Updated:** November 21, 2024  
**Repository:** [dns-sense-design-library](https://github.com/dnssense/dns-sense-design-library)

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Color Systems](#color-systems)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Shadows](#shadows)
7. [Usage Examples](#usage-examples)
8. [Best Practices](#best-practices)

---

## Overview

The DNSSense Design System is a comprehensive, CSS-variable-based design system built for consistency, scalability, and ease of customization. It includes:

- ✅ **90+ Semantic Color Variables** organized into 9 color systems
- ✅ **Roboto Font Family** with predefined typography scales
- ✅ **Complete Spacing System** with consistent padding, margins, and gaps
- ✅ **Border Radius Tokens** for buttons, cards, and containers
- ✅ **Shadow System** with 6 elevation levels
- ✅ **100% CSS Variable Based** - change once, update everywhere

---

## Installation

### Option 1: Copy to New Figma Make Project

1. Copy `styles/globals.css` to your new project's `/styles/` directory
2. Import in your main CSS or component:
   ```css
   @import './styles/globals.css';
   ```

### Option 2: NPM Package (Coming Soon)

```bash
npm install @dnssense/design-system
```

---

## Color Systems

### 1. Category Colors (6 colors)
For content classification and data categorization:

```css
--category-total: rgba(88, 133, 234, 1);              /* Blue - Total/all items */
--category-restricted-content: rgba(255, 193, 7, 1);  /* Yellow - Restricted */
--category-malicious: rgba(244, 67, 54, 1);           /* Red - Dangerous */
--category-variable: rgba(158, 158, 158, 1);          /* Gray - Variable */
--category-safe: rgba(76, 175, 80, 1);                /* Green - Safe */
--category-new-variable: rgba(255, 152, 0, 1);        /* Orange - New variable */
```

**Usage:**
```tsx
<div style={{ backgroundColor: 'var(--category-safe)' }}>
  Safe Content
</div>
```

---

### 2. Incident Colors (3 colors)
For security incidents and risk levels:

```css
--incident-high-risk: rgba(244, 67, 54, 1);      /* Red - Critical */
--incident-mid-risk: rgba(255, 152, 0, 1);       /* Orange - Medium */
--incident-suspicious: rgba(255, 235, 59, 1);    /* Yellow - Suspicious */
```

---

### 3. Status Colors (5 colors)
For system health and operational states:

```css
--status-error: rgba(244, 67, 54, 1);     /* Red - Error */
--status-warning: rgba(255, 152, 0, 1);   /* Orange - Warning */
--status-up: rgba(76, 175, 80, 1);        /* Green - Active */
--status-down: rgba(244, 67, 54, 1);      /* Red - Inactive */
--status-stable: rgba(255, 193, 7, 1);    /* Yellow - Stable */
```

**Usage:**
```tsx
<span style={{ 
  backgroundColor: 'var(--status-up)', 
  color: 'white',
  padding: '4px 8px',
  borderRadius: 'var(--radius)'
}}>
  System Up
</span>
```

---

### 4. Background Colors (16 variations)
For tables, overlays, and hover states:

```css
--bg-white: rgba(255, 255, 255, 1);
--bg-table-hover: rgba(70, 80, 100, 1);
--bg-table-selected: rgba(80, 95, 120, 1);
--bg-table-zebra: rgba(60, 70, 90, 1);
--bg-white-10: rgba(255, 255, 255, 0.1);
--bg-white-20: rgba(255, 255, 255, 0.2);
--bg-white-50: rgba(255, 255, 255, 0.5);
/* ... and more */
```

---

### 5. Tag Palette Colors (17 colors)
For tags with various opacity levels:

```css
/* Solid colors */
--tag-orange: rgba(255, 152, 0, 1);
--tag-green: rgba(76, 175, 80, 1);
--tag-gray: rgba(158, 158, 158, 1);

/* With opacity variants */
--tag-orange-10: rgba(255, 152, 0, 0.1);
--tag-orange-20: rgba(255, 152, 0, 0.2);
--tag-orange-30: rgba(255, 152, 0, 0.3);
--tag-prime-06: rgba(97, 155, 187, 0.06);
--tag-prime-20: rgba(97, 155, 187, 0.2);
--tag-prime-50: rgba(97, 155, 187, 0.5);
```

---

### 6. Line Colors (3 colors)
For chart lines, dividers, and borders:

```css
--line-blue: rgba(100, 149, 237, 1);
--line-gray: rgba(158, 158, 158, 1);
--line-blue-50: rgba(100, 149, 237, 0.5);
```

---

### 7. Badge Colors (9 vibrant colors)
For labels, badges, and chips:

```css
--badge-nature: rgba(139, 195, 74, 1);   /* Light green */
--badge-green: rgba(76, 175, 80, 1);
--badge-blue: rgba(88, 133, 234, 1);
--badge-orange: rgba(255, 152, 0, 1);
--badge-purple: rgba(156, 39, 176, 1);
--badge-red: rgba(244, 67, 54, 1);
--badge-yellow: rgba(255, 235, 59, 1);
--badge-teal: rgba(0, 188, 212, 1);
--badge-gray-2: rgba(189, 189, 189, 1);
```

**Usage:**
```tsx
<span style={{ 
  backgroundColor: 'var(--badge-blue)',
  color: 'white',
  padding: '2px 8px',
  borderRadius: 'var(--radius)',
  fontSize: 'var(--text-caption)'
}}>
  New
</span>
```

---

### 8. Selection Colors (11 colors)
For selected states and interactive elements:

```css
--selection-color-white: rgba(255, 255, 255, 1);
--selection-color-dark: rgba(79, 90, 108, 1);
--selection-color-prime: rgba(97, 155, 187, 1);
--selection-status-up: rgba(76, 175, 80, 1);
--selection-status-down: rgba(244, 67, 54, 1);
/* ... and more */
```

---

### 9. Cell Colors (8 colors)
For table cells and data grids:

```css
--cella-white: rgba(255, 255, 255, 1);        /* Default */
--cella-prime: rgba(97, 155, 187, 1);         /* Prime */
--cella-hover: rgba(100, 149, 237, 1);        /* Hover state */
--cella-pressed: rgba(64, 125, 224, 1);       /* Pressed state */
--cella-dark: rgba(68, 81, 101, 1);
--cella-gray: rgba(158, 158, 158, 1);
--cella-litle: rgba(189, 200, 220, 1);
--cella-ice-blue: rgba(232, 245, 253, 1);
```

**Usage:**
```tsx
<td 
  style={{ backgroundColor: 'var(--cella-white)' }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cella-hover)'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cella-white)'}
>
  Data
</td>
```

---

## Typography

### Font Family
**Roboto** is the exclusive font family for all text:

```css
font-family: 'Roboto', sans-serif;
```

### Typography Scale

```css
--text-h1: 36px;              /* Headers */
--text-h2: 32px;
--text-h3: 28px;
--text-h4: 24px;
--text-base: 14px;            /* Body text */
--text-label: 12px;           /* Labels */
--text-caption: 12px;         /* Captions */
--text-section-heading: 10px; /* Section headings (uppercase) */
```

### Font Weights

```css
--font-weight-normal: 400;    /* Regular text */
--font-weight-medium: 500;    /* Buttons, labels, headings */
```

### Usage

```tsx
// Headers
<h1 style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--font-weight-normal)' }}>
  Main Header
</h1>

// Body text
<p style={{ fontSize: 'var(--text-base)' }}>
  Body content
</p>

// Button text
<button style={{ 
  fontSize: 'var(--text-base)', 
  fontWeight: 'var(--font-weight-medium)' 
}}>
  Click Me
</button>

// Using class names
<span className="caption">Caption text</span>
<span className="section-heading">Section</span>
```

---

## Spacing & Layout

### Border Radius

```css
--radius: 6px;              /* Default radius */
--radius-button: 200px;     /* Fully rounded buttons */
--radius-card: 12px;        /* Card containers */
```

**Usage:**
```tsx
<div style={{ borderRadius: 'var(--radius-card)' }}>
  Card content
</div>
```

---

## Shadows

### Elevation System

```css
--shadow-xs: 0px 0px 1px 0px rgba(12,26,75,0.24), 0px 3px 8px -1px rgba(50,50,71,0.05);
--shadow-sm: 0px 0px 1px 0px rgba(12,26,75,0.1), 0px 4px 20px -2px rgba(50,50,71,0.08);
--shadow-md: 0px 0px 1px 0px rgba(12,26,75,0.1), 0px 10px 16px 0px rgba(20,37,63,0.06);
--shadow-lg: 0px 0px 1px 0px rgba(12,26,75,0.1), 0px 20px 24px 0px rgba(20,37,63,0.06);
--shadow-xl: 0px 0px 1px 0px rgba(12,26,75,0.1), 0px 30px 40px 0px rgba(20,37,63,0.08);
--shadow-inner: inset 0px 2px 4px 0px rgba(0,0,0,0.06);
```

**Usage:**
```tsx
<div style={{ boxShadow: 'var(--shadow-md)' }}>
  Elevated card
</div>
```

---

## Usage Examples

### Complete Component Example

```tsx
import React from 'react';

export function StatusCard({ title, status, category, data }) {
  return (
    <div 
      className="p-6 border"
      style={{ 
        backgroundColor: 'var(--card)',
        borderRadius: 'var(--radius-card)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      {/* Title */}
      <h4 
        style={{ 
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--text-h4)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--foreground)',
          marginBottom: '16px'
        }}
      >
        {title}
      </h4>
      
      {/* Category Badge */}
      <span 
        style={{ 
          display: 'inline-block',
          backgroundColor: category === 'safe' 
            ? 'var(--category-safe)' 
            : 'var(--category-variable)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: 'var(--radius)',
          fontSize: 'var(--text-caption)',
          fontWeight: 'var(--font-weight-medium)',
          marginRight: '8px'
        }}
      >
        {category}
      </span>
      
      {/* Status Indicator */}
      <span 
        style={{ 
          display: 'inline-block',
          backgroundColor: status === 'up' 
            ? 'var(--status-up)' 
            : 'var(--status-down)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: 'var(--radius)',
          fontSize: 'var(--text-caption)',
          fontWeight: 'var(--font-weight-medium)'
        }}
      >
        Status: {status}
      </span>
      
      {/* Data Display */}
      <div 
        style={{ 
          marginTop: '16px',
          padding: '12px',
          backgroundColor: 'var(--bg-white-10)',
          borderRadius: 'var(--radius)'
        }}
      >
        <p style={{ 
          fontSize: 'var(--text-base)',
          color: 'var(--foreground)'
        }}>
          {data}
        </p>
      </div>
    </div>
  );
}
```

### Table with Cell States

```tsx
function DataTable() {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: 'var(--bg-table-zebra)' }}>
          <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
          <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td 
            style={{ 
              padding: '12px',
              backgroundColor: 'var(--cella-white)',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => 
              e.currentTarget.style.backgroundColor = 'var(--cella-hover)'
            }
            onMouseLeave={(e) => 
              e.currentTarget.style.backgroundColor = 'var(--cella-white)'
            }
          >
            Row 1
          </td>
          <td style={{ padding: '12px' }}>
            <span style={{ backgroundColor: 'var(--badge-green)', color: 'white', padding: '2px 8px', borderRadius: 'var(--radius)' }}>
              Active
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
```

---

## Best Practices

### ✅ DO

1. **Always use CSS variables:**
   ```css
   background-color: var(--primary);
   color: var(--foreground);
   ```

2. **Use Roboto font exclusively:**
   ```css
   font-family: 'Roboto', sans-serif;
   ```

3. **Use predefined font sizes:**
   ```css
   font-size: var(--text-h1);
   font-size: var(--text-base);
   ```

4. **Use semantic color names:**
   ```css
   /* Good - Clear intent */
   backgroundColor: 'var(--category-safe)'
   backgroundColor: 'var(--status-up)'
   ```

5. **Use appropriate opacity variants:**
   ```css
   backgroundColor: 'var(--tag-orange-20)' /* 20% opacity */
   ```

### ❌ DON'T

1. **Don't use hardcoded colors:**
   ```css
   /* Bad */
   background-color: '#5885EA';
   color: 'blue';
   ```

2. **Don't use other fonts:**
   ```css
   /* Bad */
   font-family: 'Arial', sans-serif;
   font-family: 'Inter';
   ```

3. **Don't use hardcoded font sizes:**
   ```css
   /* Bad */
   font-size: 15px;
   font-size: 2rem;
   ```

4. **Don't use Tailwind font classes (unless specifically requested):**
   ```tsx
   {/* Bad */}
   <div className="text-2xl font-bold">
   ```

---

## Color Reference

### Complete Statistics

| Color System | Count | Use Cases |
|-------------|-------|----------|
| **Category** | 6 | Content classification, data categorization |
| **Incident** | 3 | Security incidents, risk levels |
| **Status** | 5 | System health, operational states |
| **Background** | 16 | Tables, overlays, hover states |
| **Tag Palette** | 17 | Tags with opacity variants |
| **Line** | 3 | Charts, dividers, borders |
| **Badge** | 9 | Labels, badges, chips |
| **Selection** | 11 | Interactive states, selections |
| **Cell** | 8 | Table cells, data grids |
| **TOTAL** | **78+** | **All use cases covered** |

*Plus base colors and variants bring total to 90+ unique values!*

---

## Questions or Issues?

- **Repository:** [github.com/dnssense/dns-sense-design-library](https://github.com/dnssense/dns-sense-design-library)
- **Report Issues:** [GitHub Issues](https://github.com/dnssense/dns-sense-design-library/issues)

---

**Made with 🎨 by DNSSense Team**  
*Version 1.0.0 - November 2024*