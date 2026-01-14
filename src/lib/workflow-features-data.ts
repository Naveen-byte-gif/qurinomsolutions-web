/**
 * Workflow Features Data
 * 
 * Professional JSON data structure for the Complete Workflow at a Glance section
 * SEO-friendly and maintainable
 */

export interface WorkflowFeature {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  iconColor: string;
}

export const WORKFLOW_FEATURES: WorkflowFeature[] = [
  {
    id: 'residents',
    title: 'Residents',
    subtitle: 'Register & manage profiles',
    iconName: 'residents',
    iconColor: '#20B2AA',
  },
  {
    id: 'complaints',
    title: 'Complaints',
    subtitle: 'Raise & track issues',
    iconName: 'complaints',
    iconColor: '#20B2AA',
  },
  {
    id: 'payments',
    title: 'Payments',
    subtitle: 'Pay maintenance online',
    iconName: 'payments',
    iconColor: '#20B2AA',
  },
  {
    id: 'notices',
    title: 'Notices',
    subtitle: 'Stay informed',
    iconName: 'notices',
    iconColor: '#20B2AA',
  },
  {
    id: 'tasks',
    title: 'Tasks',
    subtitle: 'Assign & complete work',
    iconName: 'tasks',
    iconColor: '#20B2AA',
  },
  {
    id: 'reports',
    title: 'Reports',
    subtitle: 'Analyze & improve',
    iconName: 'reports',
    iconColor: '#20B2AA',
  },
] as const;
