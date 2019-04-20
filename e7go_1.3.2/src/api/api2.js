
import { post, fetch, patch, put } from './http2'


// liveList
export const livingList = params =>{   
    
    //return fetch('http://flnet-wap.flnet.cn/flnet_live/liveList', params)
    
    return  fetch('http://flnet-wap.flnet.cn/flnet_live/liveList', params)
            .then(res =>{
                return res;
            }, err =>{
                reject(error)
            }).catch(error =>{
                reject(error)
            });
    
    
//    fetch('http://flnet-wap.flnet.cn/flnet_live/liveList', {})
//        .then(res =>{
//            return res.data;
//        }, err =>{
//            reject(error)
//        }).catch(error =>{
//            reject(error)
//        });
};

//获取LOL直播分类
export const  DBlol = params =>{
    return new Promise((resolve, reject) => {
        fetch('http://api.douyutv.com/api/v1/live/lol', {
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

//http://open.douyucdn.cn/api/RoomApi/game
export const game = params =>{
    return new Promise( (resolve, reject)=>{
        fetch('http://open.douyucdn.cn/api/RoomApi/game', params)
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })   
    })
}

//获取热直播
export const hotLiving = params =>{
    return new Promise((resolve, reject) =>{
        fetch('http://api.open.huajiao.com/live/getFeeds?platform=server&tag=video&num=1', { 
            params: params 
        }).then( res => {
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}


//http://api.open.huajiao.com/live/getVideos
export const getFeeds = params =>{
    return new Promise((resolve, reject) =>{
        fetch('http://api.open.huajiao.com/live/getFeeds', { 
            params: params 
        }).then( res => {
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}



