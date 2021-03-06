import config from '../config.json';

export function baseUrl(){
    let url = config.protocol + '://' + config.host;

    if(config.port){
        url += ':' + config.port;
    }

    if(config.base != '/'){
        url += config.base;
    }

    return url;
}