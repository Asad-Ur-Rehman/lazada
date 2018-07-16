import {isDevMode} from '@angular/core';

export class Constant {
    private  readonly API_URL_PROD = "http://172.16.17.3:3100";
    private  readonly API_URL_DEV =  "http://172.16.17.3:3000";
    public getApiUrl() {
        if(isDevMode()){
            return this.API_URL_DEV;
        }
        else{
        return this.API_URL_PROD;
        }
    }
  }