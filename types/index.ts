// DNS Dashboard Types

export interface DashboardMetric {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  color: string;
}

export interface ChartDataPoint {
  name: string;
  queries: number;
  blocked: number;
  legitimate: number;
}

export interface ThreatType {
  name: string;
  count: number;
  color: string;
}

export interface Alert {
  type: 'High' | 'Medium' | 'Low';
  message: string;
  time: string;
}

export interface DashboardConfig {
  theme: 'light' | 'dark';
  refreshInterval: number;
  maxDataPoints: number;
}

export interface MetricConfig {
  label: string;
  color: string;
  icon: string;
}

export interface ColorScheme {
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
    hover: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: string;
}

export interface ThemeConfig {
  light: ColorScheme;
  dark: ColorScheme;
}

export interface ChartConfig {
  colors: {
    queries: string;
    blocked: string;
    legitimate: string;
  };
  animation: boolean;
  responsive: boolean;
}

export type Theme = 'light' | 'dark';
export type AlertSeverity = 'High' | 'Medium' | 'Low';

export interface DashboardState {
  metrics: DashboardMetric[];
  alerts: Alert[];
  chartData: ChartDataPoint[];
  threatData: ThreatType[];
  selectedPeriod: string;
  loading: boolean;
  error: string | null;
}
