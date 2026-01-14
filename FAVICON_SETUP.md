# Favicon Setup Instructions

## Current Setup

The favicon is properly configured in the application using Next.js 13+ metadata API.

### Files Structure

1. **Main Favicon**: `src/app/favicon.ico` (automatically used by Next.js)
2. **Metadata Configuration**: Icons are defined in `src/app/layout.tsx` metadata
3. **Web App Manifest**: `public/manifest.json` for PWA support

### Required Favicon Files

To complete the favicon setup, you need to generate the following files from your logo (`logoapartment.png`):

#### In `public/` directory:
- `favicon.ico` (16x16, 32x32, 48x48 sizes)
- `favicon-16x16.png` (16x16)
- `favicon-32x32.png` (32x32)
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png` (192x192)
- `android-chrome-512x512.png` (512x512)
- `safari-pinned-tab.svg` (monochrome SVG)

#### In `src/app/` directory:
- `favicon.ico` (Next.js 13+ automatically uses this)

### How to Generate Favicons

#### Option 1: Online Tools
1. Visit [Favicon Generator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/)
2. Upload your `logoapartment.png`
3. Download the generated favicon package
4. Place files in the appropriate directories

#### Option 2: Using ImageMagick (Command Line)
```bash
# Generate favicon.ico
convert logoapartment.png -resize 16x16 favicon-16x16.png
convert logoapartment.png -resize 32x32 favicon-32x32.png
convert logoapartment.png -resize 48x48 favicon-48x48.png
convert favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico

# Generate Apple touch icon
convert logoapartment.png -resize 180x180 apple-touch-icon.png

# Generate Android icons
convert logoapartment.png -resize 192x192 android-chrome-192x192.png
convert logoapartment.png -resize 512x512 android-chrome-512x512.png
```

#### Option 3: Using Node.js Package
```bash
npm install -g favicons
favicons logoapartment.png --path / --dest public/
```

### Current Configuration

The favicon is configured in `src/app/layout.tsx`:

```typescript
icons: {
  icon: [
    { url: '/favicon.ico', sizes: 'any' },
    { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
  apple: [
    { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
  other: [
    { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#348C80' },
  ],
}
```

### Testing

After adding the favicon files:
1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check browser tab to see the favicon
4. Test on different devices and browsers

### Notes

- Next.js 13+ automatically serves `favicon.ico` from `src/app/` directory
- The metadata API handles icon links automatically
- PWA manifest is configured for mobile app installation
- Theme color is set to `#348C80` (brand color)

