# dns-sense-design-library

DNS Sense Design System - Figma + React component library for DNSSense projects

## Overview

A comprehensive design system combining Figma design tokens with TypeScript React components. This library provides reusable UI components, design tokens, and design system documentation for DNS Sense projects.

## Features

- ✅ TypeScript React Components
- ✅ Figma Design Integration
- ✅ Design Tokens (Colors, Typography, Spacing)
- ✅ Storybook Documentation
- ✅ Make Plugin for Figma Automation
- ✅ Fully Typed with TypeScript

## Quick Start

### Installation

```bash
npm install @dnssense/design-library
```

### Usage

```typescript
import { Button, Card, Input } from '@dnssense/design-library';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Clicked!')}>Click Me</Button>
      <Input placeholder="Enter text" />
      <Card title="Welcome">Content here</Card>
    </div>
  );
}
```

## Components

### Available Components

- **Button** - Primary action button
- **Input** - Text input field
- **Card** - Content container
- **Modal** - Dialog component
- **Navbar** - Navigation bar

## Design Tokens

```typescript
import { colors, typography, spacing, theme } from '@dnssense/design-library';

// Usage
const buttonColor = colors.primary;
const fontSize = typography.body.fontSize;
const gap = spacing.md;
```

## Figma Integration

This library is directly integrated with Figma Design System:

- Design components are synced with Figma
- Make automation plugin for component publishing
- Real-time design token updates

## Development

### Install Dependencies

```bash
npm install
```

### Build

```bash
npm run build
```

### Storybook

```bash
npm run storybook
```

### Build Storybook

```bash
npm run build-storybook
```

### Run Tests

```bash
npm test
```

## Project Structure

```
src/
├── components/       # React components
├── tokens/          # Design tokens (colors, typography, spacing)
├── types/           # TypeScript type definitions
└── index.ts         # Main export file
```

## Related Projects

- [DNSDOME](https://github.com/dnssense/DNSDOME) - DNS Sense Dashboard
- [Figma Design System](https://figma.com) - Design source of truth

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT

## Support

For issues and questions, please open a GitHub issue or contact the DNS Sense team.
