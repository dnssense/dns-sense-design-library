# DNS Sense Admin Dashboard - Complete Figma Make Workflow

## 🎯 Project Overview

This document contains the complete Figma Make prompt to recreate the entire DNS Sense Admin Dashboard with all interactive workflows, design system, and user flows.

## 📋 Complete Figma Make Prompt

Use this prompt directly in Figma Make to generate the complete dashboard:

```
Create a COMPLETE ENTERPRISE-GRADE DNS Sense Admin Dashboard 
with full design system and all interactive workflows.

PAGE STRUCTURE:

### 1. DASHBOARD (Main Overview)
- Header with DNSSense + DNSDome logos on left, user profile on right
- Left sidebar navigation with active states:
  * Dashboard (active)
  * Reports
    - Traffic Investigation
    - Security Incident
    - AI Based DNS Tunnel
  * Deployment
    - Public IP
    - Active Directory Integration (DNS Relay)
    - Security Profiles
  * Audit Logs
  * Settings
    - Users
    - API Keys
    - Query Category
    - Notification Settings
  * Account Settings

- Status Cards Grid (3 columns):
  * Public IP: Active 1, Passive 9
  * Roaming Client: Active 0, Passive 207
  * DNS Relay: Active 0, Passive 0

- Traffic Based Anomaly Section:
  * Title with date range picker (14/11/2025 - 21/11/2025)
  * Period filter: 1 Weeks (with dropdown)
  * 5 Metric Cards in grid layout:
    - Total: Allow (0), Block (0), Total DNS request count
    - Safe: Hit Count (0), 0%, Includes safe categories
    - Malicious: Hit Count (0), 0%, Includes dangerous categories
    - Risky: Hit Count (0), 0%, Includes risky categories
    - Restricted Content: Hit Count (0), 0%, Includes unsuitable categories

- Traffic Chart:
  * Line chart from 15-21 Nov
  * Multi-line legend: Query Count, Learned Normal Traffic Range, Traffic Excess Rate
  * Y-axis: 0-10 range
  * Hover tooltips with values

- Total Categories Table:
  * 69 rows (Adult, Advertisements, Alcohol, Arts and Culture, Bad IP, BlackList, 
    Blogs, Botnet CC, Business Services, Chats, Clothing, Compromised Website,
    CDN, Cooking, Dating, Dead Sites, DGA Domain, DOH, Domain Parking, Dynamic DNS,
    Education, Entertainment, Financial, Firstly Seen, Forums, Gambling, Games,
    Government, Hacking, Hate/Violence, Health, Illegal Drugs, Infrastructure,
    Job Search, Kids, Local IP, Malformed Query, Malware, Music, Newly Registered,
    Newly Up, News, NX Domain, Online Storage, Online Video, Phishing, Pornography,
    Potentially Dangerous, Proxy, Real Estate, Reference, Religion, Safe Domain,
    Search Engines, Shopping, Social Networks, Society, Software Downloads, Spam,
    Sport, Swimsuits, Technology, Tobacco, Vacation, Vehicles, Warez, Weapons,
    Webmail, WhiteList)
  * Columns: Row #, Category Name, Count (all 0), Percentage (all 0%)
  * Sortable headers
  * Search input: "Enter a new tag"

- Total Top Domain List:
  * Columns: #, Domain, Categories, Count, Percent
  * 5 rows (currently empty with 0 values)
  * Expandable rows

- Navigation Controls:
  * Previous Week button (with arrow)
  * Next Week button (with arrow)
  * Show Detail button (toggle)

### 2. REPORTS PAGE
- Traffic Investigation section
- Security Incident section  
- AI Based DNS Tunnel section
- Charts and analytics

### 3. DEPLOYMENT PAGE
- Public IP management interface
- Active Directory Integration form
- Security Profiles configuration

### 4. SETTINGS PAGE
- Users management table
- API Keys management
- Query Category settings
- Notification preferences

### 5. AUDIT LOGS PAGE
- Comprehensive activity table
- Filter options
- Export functionality

DESIGN SYSTEM:

## Color Palette:
- Primary Background: #1a1a1a (dark gray)
- Secondary Background: #2d2d2d (lighter dark)
- Text Primary: #ffffff (white)
- Text Secondary: #a0a0a0 (gray)
- Accent Green: #00c853 (DNS Sense brand)
- Alert Blue: #2196F3
- Threat Red: #f44336
- Warning Orange: #ff9800
- Restricted Yellow: #ffc107

## Typography:
- Headers: Inter/Segoe UI, Bold, 24px (main title), 18px (section titles)
- Body: Inter/Segoe UI, Regular, 14px
- Small: Inter/Segoe UI, Regular, 12px
- Mono: Courier, 12px (for numbers)

## Spacing:
- Base unit: 8px
- Component padding: 16px
- Section gap: 24px
- Grid gap: 12px

## Components:
- Cards with subtle shadows
- Tables with alternating row colors (#252525, #1a1a1a)
- Buttons: Primary (green), Secondary (gray), Tertiary (outlined)
- Badges for status indicators
- Date pickers and dropdowns
- Search bars with icons
- Toggles and checkboxes
- Icons for navigation (Dashboard, Monitor, Network, Settings, Audit, User)

## INTERACTIVE FEATURES:

1. Navigation:
   - Clickable sidebar items with active/hover states
   - Expand/collapse submenu items
   - Page transitions with smooth animations

2. Data Interactions:
   - Sortable table columns (click to sort)
   - Filterable categories
   - Searchable domain list
   - Date range picker
   - Period filter tabs

3. Visual Feedback:
   - Hover effects on cards (shadow increase)
   - Active link highlighting in sidebar
   - Loading states for data
   - Tooltip on chart hover

4. Functional Controls:
   - Previous/Next week navigation
   - Show Detail toggle
   - Export/Download buttons
   - Refresh data button
   - Tag input field ("Enter a new tag")

## DATA STRUCTURE:

1. Metrics:
   - 3 Status cards with Active/Passive counts
   - 5 Anomaly metric cards with percentages
   - 69 Category rows with dynamic data
   - 5 Top domain rows

2. Chart Data:
   - 7-day traffic history (Nov 15-21)
   - 3 data series (Query Count, Traffic Range, Excess Rate)
   - Real-time updates capability

3. Status Indicators:
   - Active: Green
   - Passive: Gray
   - Alert: Red/Orange
   - Safe: Blue

## RESPONSIVE DESIGN:
- Desktop first (1920x1080 optimal)
- Sidebar collapses on smaller screens
- Tables become scrollable
- Charts remain responsive
- Mobile-friendly navigation

## INTERACTIVE PROTOTYPING:
- All navigation links clickable
- Charts with hover interactions
- Table row selections
- Form inputs functional
- Modal dialogs for detail views
- Animation on state changes

Make this enterprise-grade, fully functional interactive prototype with:
- Complete design system consistency
- All pages accessible via navigation
- Full workflow between pages
- Proper visual hierarchy
- Professional spacing and typography
- All interactive elements functional
- Ready for handoff to developers
```

## 🔗 Figma Make Integration Steps

1. **Go to Figma Make**: https://www.figma.com/make/
2. **Click "What do you want to make?" input field**
3. **Paste the complete prompt above** (or use the condensed version below)
4. **Click the send arrow** (blue button)
5. **Wait for AI to generate the design** (5-10 minutes)
6. **Review and refine** in Figma

## 📄 Condensed Figma Make Prompt (if needed)

For faster generation, use this shorter version:

```
Create a complete DNS Sense Admin Dashboard UI with:

- Dark theme sidebar navigation (Dashboard, Reports, Deployment, Audit, Settings, Account)
- Status cards: Public IP (1 active, 9 passive), Roaming Client (0 active, 207 passive), DNS Relay (0 active, 0 passive)
- Traffic metrics: 5 cards showing Total, Safe, Malicious, Risky, Restricted Content
- Line chart (Nov 15-21) with Query Count, Traffic Range, Excess Rate
- Sortable table with 69 categories (counts and percentages)
- Top domain list table
- Date range picker and period filters
- Previous/Next navigation buttons
- Professional dark UI with green accents (#00c853)
- All elements interactive
- Enterprise-grade design
```

## 📚 Component Library Integration

This Figma Make design integrates with the design system:

- **colors**: Dark theme palette with accent colors
- **metrics**: 69 category configuration from config/theme.ts
- **components**: Dashboard, Cards, Tables, Charts, Navigation
- **types**: DashboardState, ChartDataPoint, ThreatType from types/index.ts
- **utils**: formatNumber, calculatePercentageChange from utils/helpers.ts

## 🔄 All Workflow Paths

### Path 1: Dashboard → Reports → Traffic Investigation
```
Dashboard (click Reports) → Reports Page → Click Traffic Investigation → 
Traffic detail view with filters and charts
```

### Path 2: Dashboard → Deployment → Public IP
```
Dashboard (click Deployment) → Deployment Page → Click Public IP → 
IP management interface
```

### Path 3: Dashboard → Settings → Users
```
Dashboard (click Settings) → Settings Page → Click Users → 
Users management table
```

### Path 4: Data Exploration
```
Dashboard → Use date picker to select range → Click Previous/Next Week → 
Show Detail → View category details
```

## 🎨 Design Tokens

All colors, spacing, and typography are standardized:

- 8px grid system
- 3-color palette (dark backgrounds, light text, green accents)
- Consistent component sizing
- Uniform spacing between sections
- Professional typography hierarchy

## ✅ Checklist Before Generating

- [ ] Figma Make is open
- [ ] You have a Figma account
- [ ] Prompt is ready
- [ ] Design system colors noted (#1a1a1a, #00c853, etc.)
- [ ] All page names confirmed
- [ ] Navigation structure clear

## 📖 Generated File Naming

When Figma generates the design, it will create a file named something like:
- "DNS Sense Admin Dashboard"
- "DNS Security Dashboard"
- "Admin Dashboard - Complete"

Rename it to: **"DNS Sense Admin Dashboard - Complete Design System"**

## 🚀 Next Steps After Generation

1. Review all pages for accuracy
2. Adjust colors if needed (brand guidelines)
3. Fine-tune spacing and alignment
4. Add interactions/prototyping
5. Export components to design library
6. Share with development team
7. Integrate with React components from GitHub

---

**Created**: November 21, 2025
**Version**: 1.0 Complete
**Status**: Ready for Figma Make integration
