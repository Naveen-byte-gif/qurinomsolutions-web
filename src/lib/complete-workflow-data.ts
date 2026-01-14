/**
 * Complete Workflow Data
 * 
 * Professional JSON data structure for the workflow at a glance section
 * SEO-friendly and maintainable
 */

export interface WorkflowFeature {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconColor: string;
  iconBgColor: string;
}

export const COMPLETE_WORKFLOW_FEATURES: WorkflowFeature[] = [
  {
    title: 'Residents',
    subtitle: 'Register & manage profiles',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 8C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 24C8 20.268 11.134 17 15 17H17C20.866 17 24 20.268 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 8C25.1046 8 26 8.89543 26 10C26 11.1046 25.1046 12 24 12C22.8954 12 22 11.1046 22 10C22 8.89543 22.8954 8 24 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 20C28 19.4477 27.5523 19 27 19H25C23.8954 19 23 19.8954 23 21V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#20B2AA',
    iconBgColor: 'rgba(32, 178, 170, 0.1)',
  },
  {
    title: 'Complaints',
    subtitle: 'Raise & track issues',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 12V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 20H16.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#20B2AA',
    iconBgColor: 'rgba(32, 178, 170, 0.1)',
  },
  {
    title: 'Payments',
    subtitle: 'Pay maintenance online',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="10"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 14H26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 20H14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#20B2AA',
    iconBgColor: 'rgba(32, 178, 170, 0.1)',
  },
  {
    title: 'Notices',
    subtitle: 'Stay informed',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6C12 7.10457 12.8954 8 14 8H18C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4H14C12.8954 4 12 4.89543 12 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V24C24 25.1046 23.1046 26 22 26H10C8.89543 26 8 25.1046 8 24V12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#20B2AA',
    iconBgColor: 'rgba(32, 178, 170, 0.1)',
  },
  {
    title: 'Tasks',
    subtitle: 'Assign & complete work',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 6C8 4.89543 8.89543 4 10 4H22C23.1046 4 24 4.89543 24 6V26C24 27.1046 23.1046 28 22 28H10C8.89543 28 8 27.1046 8 26V6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 24L16 26L18 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#20B2AA',
    iconBgColor: 'rgba(32, 178, 170, 0.1)',
  },
  {
    title: 'Reports',
    subtitle: 'Analyze & improve',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="6"
          y="6"
          width="20"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 22V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22V18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    iconColor: '#20B2AA',
    iconBgColor: 'rgba(32, 178, 170, 0.1)',
  },
] as const;

