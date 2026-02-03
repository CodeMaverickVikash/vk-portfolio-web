/**
 * Application Routes
 */
export const ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
  CONTACT: '/contact',
  TECH_STACK: '/tech-stack',
  TECH_DETAIL: '/tech/:techId',
  LOGIN: '/login',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = typeof ROUTES[RouteKey];

