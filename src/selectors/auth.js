// @flow
import type { ApplicationState } from "store/reducers";

export const isAuthenticated = (state: ApplicationState) => {
  return true; //state.auth.isAuthenticated;
};

export const isUserInitiated = (state: ApplicationState) => {
  return true; //state.auth.isUserInitiated;
};
