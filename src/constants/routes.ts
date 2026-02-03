/**
 * Application Routes
 */
export const ROUTES = {
  HOME: '/',
  PROFILE: '/profile',
  CONTACT: '/contact',
  LANGUAGES: '/blogs',
  LOGIN: '/login',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = typeof ROUTES[RouteKey];

