/**
 * Utility Functions
 * 
 * Common utility functions used across the application
 */

/**
 * Format a string for URL slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Check if a path matches the current route
 */
export function isActivePath(currentPath: string, targetPath: string): boolean {
  if (targetPath === '/') {
    return currentPath === '/';
  }
  return currentPath?.startsWith(targetPath) ?? false;
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

