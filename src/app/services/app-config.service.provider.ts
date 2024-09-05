import { AppConfigService } from "./app-config.service";


/*
creates an instance of the AppConfigService class and copies all values
from the window appConfig object into the AppConfigService instance
*/
export const AppConfigServiceFactory = () => {

  //Create config
  const config = new AppConfigService();
  // Read app config variables from browser window
  const browserWindow = window || {};
  const browserWindowEnv = browserWindow['appConfig'] || {};

  // Assign app config variables from browser window to config
  // In the current implementation, properties from appCnfig.js overwrite defaults from AppConfigService 
  for (const key in browserWindowEnv){
    if(browserWindowEnv.hasOwnProperty(key)){
      config[key] = window['appConfig'][key];
    }
  }

  return config;
};

export const AppConfigServiceProvider = {

  provide: AppConfigService,
  useFactory: AppConfigServiceFactory,
  deps:[]
};
