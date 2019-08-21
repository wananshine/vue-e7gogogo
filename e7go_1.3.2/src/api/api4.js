import { request } from './http'
const test = "http://10.130.202.170:8080/search/test";
const test2 = "http://10.191.194.116/api/search/find/test"
const novelApi = "https://www.apiopen.top/novelApi"

export const testApi = params => {
    console.log("params:", params)
    return request({
        method: 'Get',
        url: test2,
        params: params
    }).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}
