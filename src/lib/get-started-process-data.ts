/**
 * Get Started Process Data
 * 
 * Professional JSON data structure for the 4-step process section
 * SEO-friendly and maintainable
 */

export interface ProcessStepFeature {
  text: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  features: ProcessStepFeature[];
  iconColor: string;
  iconGradient: string;
  imagePath: string;
  imageAlt: string;
}

export const GET_STARTED_PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Register Your Community',
    description:
      'Set up your apartment complex in minutes. Configure building details, wings, flats, and establish financial rules for your community.',
    features: [
      { text: 'Add building & wing structure' },
      { text: 'Configure flat numbering' },
      { text: 'Set maintenance rules' },
      { text: 'Customize community settings' },
    ],
    iconColor: '#10B981', // Green
    iconGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    imagePath: '/Register_Your_Community.png',
    imageAlt:
      'Register Your Community - Set up apartment complex with building details, wings, flats, and financial rules',
  },
  {
    stepNumber: '02',
    title: 'Onboard Residents & Staff',
    description:
      'Invite residents to register and assign staff accounts based on their roles and skills. Admin approval ensures security.',
    features: [
      { text: 'Resident self-registration' },
      { text: 'Admin verification & approval' },
      { text: 'Role-based staff accounts' },
      { text: 'Skill-based task assignment' },
    ],
    iconColor: '#F97316', // Orange
    iconGradient: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
    imagePath: '/Onboard_Residents_Staff.png',
    imageAlt:
      'Onboard Residents & Staff - Invite residents, assign staff accounts with role-based permissions and admin approval',
  },
  {
    stepNumber: '03',
    title: 'Daily Operations',
    description:
      'Manage day-to-day activities effortlessly. Residents raise complaints, staff resolves tasks, and admins track everything centrally.',
    features: [
      { text: 'Complaint management' },
      { text: 'Task assignment & tracking' },
      { text: 'Notice broadcasting' },
      { text: 'Real-time status updates' },
    ],
    iconColor: '#8B5CF6', // Purple
    iconGradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    imagePath: '/Daily_Operations.png',
    imageAlt:
      'Daily Operations - Manage complaints, tasks, notices, and track all activities in real-time from a central dashboard',
  },
  {
    stepNumber: '04',
    title: 'Payments & Reporting',
    description:
      'Automate invoicing, collect payments online, and generate comprehensive reports for complete financial transparency.',
    features: [
      { text: 'Auto-generated invoices' },
      { text: 'Multiple payment options' },
      { text: 'Financial dashboards' },
      { text: 'Export reports to PDF/Excel' },
    ],
    iconColor: '#059669', // Dark Green
    iconGradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    imagePath: '/Payments_Invoicing.png',
    imageAlt:
      'Payments & Reporting - Automate invoicing, collect payments online, and generate comprehensive financial reports',
  },
] as const;

