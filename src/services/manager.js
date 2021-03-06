import {
  registerGlobalServices,
  serviceManager,
} from "shared/services/manager";
import { AuthService } from "./authService";

export const registerServices = (options) => {
  registerGlobalServices(options);

  serviceManager.register("AuthService", (serviceManager) => {
    let api = serviceManager.get("ApiService");
    return new AuthService(api);
  });
};

export { serviceManager };
