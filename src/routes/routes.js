// @flow
import { lazy } from "react";
import { USER_ROLES } from "constants/user";
import authRoutes from "modules/auth/routes";

export default [
  {
    path: "/",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() => import("modules/dashboard/home")),
  },
  {
    path: "/passenger/passengerCount",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/passengerCount/predictPassengerCount")
    ),
  },
  {
    path: "/passenger/viewPassengerHistory",
    exact: true,
    auth: true,
    roles: [USER_ROLES.ADMIN],
    component: lazy(() =>
      import("modules/passengerCount/viewPassengerCountHistory")
    ),
  },
  ...authRoutes,
];
