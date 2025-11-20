// Utility helper functions for DNS Dashboard

import { DashboardMetric, Alert, AlertSeverity } from '../types/index';

/**
 * Format large numbers with abbreviations (K, M, B)
 */
export const formatNumber = (value: number): string => {
  if (value >= 1e9) return (value / 1e9).toFixed(1) + 'B';
  if (value >= 1e6) return (value / 1e6).toFixed(1) + 'M';
  if (value >= 1e3) return (value / 1e3).toFixed(1) + 'K';
  return value.toString();
};

/**
 * Calculate percentage change
 */
export const calculatePercentageChange = (current: number, previous: number): number => {
  if (previous === 0) return 0;
  return ((current - previous) / previous) * 100;
};

/**
 * Format time as relative time (e.g., "2 min ago")
 */
export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) return `${diffSecs}s ago`;
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
};

/**
 * Get alert color based on severity
 */
export const getAlertColor = (severity: AlertSeverity): string => {
  switch (severity) {
    case 'High':
      return 'text-red-500';
    case 'Medium':
      return 'text-orange-500';
    case 'Low':
      return 'text-blue-500';
    default:
      return 'text-slate-500';
  }
};

/**
 * Sort alerts by severity
 */
export const sortAlertsBySeverity = (alerts: Alert[]): Alert[] => {
  const severityOrder = { High: 0, Medium: 1, Low: 2 };
  return [...alerts].sort((a, b) => severityOrder[a.type] - severityOrder[b.type]);
};

/**
 * Calculate metric change color
 */
export const getMetricChangeColor = (change: number): string => {
  if (change > 0) return 'text-green-500';
  if (change < 0) return 'text-red-500';
  return 'text-slate-500';
};

/**
 * Format metric value with proper formatting
 */
export const formatMetricValue = (value: string | number): string => {
  if (typeof value === 'string') return value;
  if (value >= 1e6) return (value / 1e6).toFixed(1) + 'M';
  if (value >= 1e3) return (value / 1e3).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return value.toString();
};

/**
 * Debounce function for throttling
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Deep clone object
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as any;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as any;
  if (obj instanceof Object) {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
  return obj;
};
