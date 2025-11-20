// Theme configuration for DNS Sense Dashboard

export const colors = {
  light: {
    bg: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      hover: '#e2e8f0',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      tertiary: '#94a3b8',
    },
    border: '#e2e8f0',
  },
  dark: {
    bg: {
      primary: '#1e293b',
      secondary: '#0f172a',
      tertiary: '#1e293b',
      hover: '#334155',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
      tertiary: '#94a3b8',
    },
    border: '#334155',
  },
};

export const metrics = {
  queries: {
    label: 'Total Queries',
    color: 'from-blue-500 to-blue-600',
    icon: 'Activity',
  },
  blocked: {
    label: 'Blocked Threats',
    color: 'from-red-500 to-red-600',
    icon: 'Shield',
  },
  users: {
    label: 'Active Users',
    color: 'from-green-500 to-green-600',
    icon: 'Users',
  },
  health: {
    label: 'System Health',
    color: 'from-purple-500 to-purple-600',
    icon: 'TrendingUp',
  },
};

export const threatTypes = [
  { name: 'Malware', color: 'bg-red-500' },
  { name: 'Phishing', color: 'bg-orange-500' },
  { name: 'Botnet', color: 'bg-purple-500' },
  { name: 'C2', color: 'bg-pink-500' },
];

export const periods = ['24h', '7d', '30d', '90d'];

export const chartConfig = {
  colors: {
    queries: '#3b82f6',
    blocked: '#ef4444',
    legitimate: '#10b981',
  },
  animation: true,
  responsive: true,
};

export type Theme = 'light' | 'dark';

export const getThemeColors = (theme: Theme) => {
  return colors[theme];
};

export const getMetricConfig = (metricKey: keyof typeof metrics) => {
  return metrics[metricKey];
};
