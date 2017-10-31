// ConfigLoader loads the correct configuration (Development or 
// Production) depending on the node environment.


import { DEV_CONFIG } from "../config/development";
import { TEST_CONFIG } from "../config/testing";
import { PROD_CONFIG } from "../config/production";

const env = process.env.NODE_ENV || 'development';

console.log(`Node environment: ${env}`);
console.log(`loading config.${env}.ts`);

// return the config for the set environment
function setConfig(environment: string) {
  if (environment === 'production') {
    return PROD_CONFIG;
  } else if (environment === 'testing'){
    return TEST_CONFIG;
  } else {
    return DEV_CONFIG;
  }
}

export const CONFIG = setConfig(env);