# @midkard/reboot

A lightweight CSS reboot library for the DNT WordPress theme, providing normalized styles, UI components, and Sass utilities.

## Features

- **CSS Reboot** - Normalized base styles for HTML elements (forked from Normalize.css)
- **UI Components** - Button and navigation styles
- **Sass Mixins** - Useful SCSS mixins for common patterns
- **TypeScript Utilities** - Cookie helper functions
- **CSS Variables** - Customizable theming with CSS custom properties

## Installation

```bash
npm install @midkard/reboot
```

## Usage

### CSS/JS Import

```javascript
// Import styles and utilities
import '@midkard/reboot';
```

Or import styles only:

```javascript
import '@midkard/reboot/style';
```

### Sass Import

```scss
// Import mixins
@import '@midkard/reboot/sass/mixins';

// Import container styles
@import '@midkard/reboot/sass/container';
```

## CSS Variables

The following CSS custom properties are available for customization:

```css
:root {
  --bg: #fff;              /* Background color */
  --color: #000;           /* Text color */
  --accent: blue;          /* Accent/highlight color */
  --container-padding: 1rem; /* Container padding */
}
```

## Components

### Buttons

```html
<!-- Standard button -->
<button class="btn">Click me</button>

<!-- Icon button -->
<button class="btn-i">
  <svg><!-- icon --></svg>
</button>

<!-- Link button -->
<button class="link">Link style</button>
```

### Navigation

```html
<ul class="menu menu_horizontal">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### Container

```html
<div class="container">
  <!-- Content with responsive max-width -->
</div>
```

## TypeScript Utilities

### Cookie Functions

```typescript
import { setCookie, getCookie } from '@midkard/reboot';

// Set a cookie (expires in 30 days by default)
setCookie('name', 'value');

// Set a cookie with custom expiration (in seconds)
setCookie('name', 'value', { time: 3600 }); // 1 hour

// Get a cookie
const value = getCookie('name');
```

## Sass Mixins

Available mixins in `sass/mixins`:

- `breakpoints` - Responsive breakpoint helpers
- `overlay-backdrop` - Backdrop overlay styles
- `transition` - Transition utilities
- `visually-hidden` - Screen reader only content
- `text-truncate` - Text truncation
- `full-width` - Full width container utilities

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Format code
npm run format
```

## License

MIT © [Dimenius Novus](https://dn-ms.ru)
