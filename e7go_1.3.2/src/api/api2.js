
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

export const indexVideo = params => {
    return new Promise((resolve, reject) =>{
        fetch('../apis/video/indexVideo', { 
            params: params 
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}



//快递查询：
//https://api.apiopen.top/EmailSearch?number=1012002
export const EmailSearch = params => {
    return new Promise((resolve, reject) =>{
        post('https://api.apiopen.top/EmailSearch', { 
            number: params 
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//随机单句诗词推荐：
//https://api.apiopen.top/singlePoetry
export const singlePoetry = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/singlePoetry', { 
            params: params 
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}


//随机一首诗词推荐：
//https://api.apiopen.top/recommendPoetry
export const recommendPoetry = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/recommendPoetry', { 
            params: params 
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//搜索古诗词：
//https://api.apiopen.top/searchPoetry?name=古风二首 二
export const searchPoetry = params => {
    return new Promise((resolve, reject) =>{
        post('https://api.apiopen.top/searchPoetry', { 
            name: params 
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//搜索古诗词作者：
//https://api.apiopen.top/searchAuthors?name=李白
export const searchAuthors = params => {
    return new Promise((resolve, reject) =>{
        post('https://api.apiopen.top/searchAuthors', { 
            name: params 
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//模糊搜索古诗词（可搜索诗词名、诗词内容、诗词作者）：
//https://api.apiopen.top/likePoetry?name=李白
export const likePoetry = params => {
    return new Promise((resolve, reject) =>{
        post('https://api.apiopen.top/likePoetry', { 
            name: params 
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//获取宋朝古诗词：
//https://api.apiopen.top/getSongPoetry?page=1&count=20
export const getSongPoetry = params => {
    return new Promise((resolve, reject) =>{
        post('https://api.apiopen.top/getSongPoetry', { 
            page: params.page,
            count: params.count
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//获取唐朝古诗词：
//https://api.apiopen.top/getTangPoetry?page=1&count=20
export const getTangPoetry = params => {
    return new Promise((resolve, reject) =>{
        post('https://api.apiopen.top/getTangPoetry', { 
            page: params.page,
            count: params.count
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//音乐搜索接口：
//https://api.apiopen.top/searchMusic
export const searchMusic = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/searchMusic', { 
            params: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//音乐电台接口：
//https://api.apiopen.top/musicBroadcasting
export const musicBroadcasting = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/musicBroadcasting', { 
            params: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//音乐电台详情接口：
//https://api.apiopen.top/musicBroadcastingDetails?channelname=public_tuijian_spring
export const musicBroadcastingDetails = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/musicBroadcastingDetails', { 
            channelname: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//音乐详情接口：
//https://api.apiopen.top/musicDetails
export const musicDetails = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/musicDetails', { 
            params: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//音乐排行榜接口：
//https://api.apiopen.top/musicRankings
export const musicRankings = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/musicRankings', { 
            params: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//音乐排行榜详情接口：
//https://api.apiopen.top/musicRankingsDetails?type=1
export const musicRankingsDetails = params => {
    return new Promise((resolve, reject) =>{
        post('https://api.apiopen.top/musicRankingsDetails', { 
            type: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//每日视频推荐接口：
//https://api.apiopen.top/todayVideo
export const todayVideo = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/todayVideo', { 
            params: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//视频大纲获取接口：
//https://api.apiopen.top/videoHomeTab
export const videoHomeTab = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/videoHomeTab', { 
            params: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}


//视频分类推荐接口：
//https://api.apiopen.top/videoCategory
export const videoCategory = params => {
    return new Promise((resolve, reject) =>{
        fetch('https://api.apiopen.top/videoCategory', { 
            params: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//视频分类推荐接口：
//https://api.apiopen.top/videoCategoryDetails?id=14
export const videoCategoryDetails = params => {
    return new Promise((resolve, reject) =>{
        post('https://api.apiopen.top/videoCategoryDetails', { 
            id: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

//根据ID推荐接口：
//https://api.apiopen.top/videoRecommend?id=127398
export const videoRecommend = params => {
    return new Promise((resolve, reject) =>{
        post('https://api.apiopen.top/videoRecommend', { 
            id: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}


// 新闻接口：
// https://www.apiopen.top/journalismApi
export const journalismApi = params => {
    return new Promise((resolve, reject) =>{
        post('https://www.apiopen.top/journalismApi', { 
            params: params
        }).then(res => {
            console.log(1)
            resolve(res)
        }).catch( err => {
            reject(err)
        })
    })
}

// 随机推荐热门段子（包含文字、图片、GIF、视频）：
// https://www.apiopen.top/satinApi?type=1&page=1
// 随机推荐热门段子【神评版本】（包含文字、图片、GIF、视频）：
// https://www.apiopen.top/satinGodApi?type=1&page=1
// 随机推荐热门段子【神评版本】评论列表：
// https://www.apiopen.top/satinCommentApi?id=27610708&page=1
// 热门小说推荐列表
// https://www.apiopen.top/novelApi
// 小说搜索接口
// https://www.apiopen.top/novelSearchApi?name=盗墓笔记
// 小说详情接口
// https://www.apiopen.top/novelInfoApi?name=盗墓笔记
// 天气获取接口
// https://www.apiopen.top/weatherApi?city=成都
// 美图获取接口
// https://www.apiopen.top/meituApi?page=1
// 个性网名获取接口
// https://www.apiopen.top/femaleNameApi?page=1
// 创建应用接口
// https://www.apiopen.top/createUserKey?appId=com.chat.peakchao&passwd=123456
// 增加统计信息接口
// https://www.apiopen.top/addStatistics?appKey=00d91e8e0cca2b76f515926a36db68f5&type=点击统计&typeId=1&count=2
// 查询统计信息接口
// https://www.apiopen.top/findStatistics?appKey=00d91e8e0cca2b76f515926a36db68f5
// 用户注册接口
// https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123654
// 用户登陆接口
// https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123456


// 随机单句诗词推荐：
// https://api.apiopen.top/singlePoetry
// 随机一首诗词推荐：
// https://api.apiopen.top/recommendPoetry
// 搜索古诗词：
// https://api.apiopen.top/searchPoetry?name=古风二首 二
// 搜索古诗词作者：
// https://api.apiopen.top/searchAuthors?name=李白
// 模糊搜索古诗词（可搜索诗词名、诗词内容、诗词作者）：
// https://api.apiopen.top/likePoetry?name=李白
// 获取宋朝古诗词：
// https://api.apiopen.top/getSongPoetry?page=1&count=20
// 获取唐朝古诗词：
// https://api.apiopen.top/getTangPoetry?page=1&count=20



