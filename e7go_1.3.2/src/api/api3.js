import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


export const liveList = params => {                  // liveList
    return axios.post(defaultUrl+'/flnet_live/liveList', {params: params }).then(res =>{
        return res.data;
    }, err =>{
        reject(error)
    }).catch(error =>{
        reject(error)
    });
};


export const smallVideo = (url,params) =>{                  // smallVideo  http://api.open.huajiao.com/live/getVideos
    return axios.get(url, {params: params }).then(res =>{
        return res.data;
    }, err =>{
        reject(error)
    }).catch(error =>{
        reject(error)
    });
};

//http://api.douyutv.com/api/v1/live/lol
export const lol = params =>{                  // lol
    return axios.get('../api/live/lol', {params: params }).then(res =>{
        return res.data;
    }, err =>{
        reject(error)
    }).catch(error =>{
        reject(error)
    });
};