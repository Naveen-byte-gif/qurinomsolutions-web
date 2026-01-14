/**
 * Pricing Data
 * 
 * Centralized pricing plan data for the pricing page
 */

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  price: {
    monthly: string;
    annual: string;
  };
  buttonText: string;
  buttonVariant: 'primary' | 'secondary' | 'outline';
  isPopular?: boolean;
  features: PricingFeature[];
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Best for Small Apartments',
    icon: 'building',
    price: {
      monthly: 'Free',
      annual: '₹2,399',
    },
    buttonText: 'Start Free Trial',
    buttonVariant: 'secondary',
    features: [
      { name: 'Up to 50 residents', included: true },
      { name: 'Resident & complaint management', included: true },
      { name: 'Notices & alerts', included: true },
      { name: 'Basic reports', included: true },
      { name: 'Email support', included: true },
      { name: 'Online payments', included: false },
      { name: 'Staff management', included: false },
      { name: 'Financial reports', included: false },
      { name: 'Custom workflows', included: false },
      { name: 'Priority support', included: false },
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    subtitle: 'Most Popular Choice',
    icon: 'users',
    price: {
      monthly: '₹1999',
      annual: '₹4,799',
    },
    buttonText: 'Start Free Trial',
    buttonVariant: 'primary',
    isPopular: true,
    features: [
      { name: 'Up to 200 residents', included: true },
      { name: 'Everything in Basic', included: true },
      { name: 'Online payments integration', included: true },
      { name: 'Staff & vendor management', included: true },
      { name: 'Financial reports & analytics', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Mobile app access', included: true },
      { name: 'Custom workflows', included: false },
      { name: 'Dedicated account manager', included: false },
      { name: 'API access', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'For Large Communities',
    icon: 'crown',
    price: {
      monthly: 'Custom',
      annual: 'Custom',
    },
    buttonText: 'Contact Sales',
    buttonVariant: 'secondary',
    features: [
      { name: 'Unlimited residents', included: true },
      { name: 'Everything in Standard', included: true },
      { name: 'Custom workflows & rules', included: true },
      { name: 'Advanced analytics & BI', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: 'Priority 24/7 support', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'API access', included: true },
      { name: 'On-premise deployment option', included: true },
      { name: 'SLA guarantee', included: true },
    ],
  },
];

export const PRICING_HEADER = {
  tag: 'Simple Pricing',
  title: 'Choose the Perfect Plan for Your Community',
  subtitle: 'Transparent pricing with no hidden fees. Start free and scale as you grow.',
};

