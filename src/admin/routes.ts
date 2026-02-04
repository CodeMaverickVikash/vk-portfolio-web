// Admin Panel Routes
// This file contains all routes for the backend admin interface

export const ADMIN_ROUTES = {
  // Base admin route
  ADMIN: '/admin',
  
  // Admin pages
  DASHBOARD: '/admin/dashboard',
  TECH_STACK: '/admin/tech-stack',
  ANALYTICS: '/admin/analytics',
  PROFILE: '/admin/profile',
  SETTINGS: '/admin/settings',
} as const;

export type AdminRoute = typeof ADMIN_ROUTES[keyof typeof ADMIN_ROUTES];

