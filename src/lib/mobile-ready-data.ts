/**
 * Mobile Ready Section Data
 * 
 * Professional JSON data structure for the Mobile Ready section
 * SEO-friendly and maintainable
 */

export interface MobileFeature {
  text: string;
}

export const MOBILE_READY_FEATURES: MobileFeature[] = [
  { text: 'Instant push notifications' },
  { text: 'Quick complaint submission' },
  { text: 'Payment reminders on mobile' },
  { text: 'Real-time status updates' },
] as const;

