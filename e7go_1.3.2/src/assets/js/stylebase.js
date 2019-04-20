
import styled from 'vue-styled-components';

export const width_0 = "1200px";

export const commonStyle = {
    width: width_0,
    margin: "auto",
    position: "relative",
}

//设置容器
export const styleGather = ()=> {
    return{
        flexbox: {
            display: "flex",
            "flex-direction": "row",
            "flex-wrap": "nowrap",
            "justify-content": "space-between",
            "align-items": "center",
            "align-content": "center"
        },
        flexitem: {
        	"flex-grow": 0,
        	"flex-basis": "1px",
        	"flex-shrink": 1,
        },
        flexauto: {
            "flex-grow": 0,
            "flex-basis": "auto",
            "flex-shrink": 1,
        },
        flex1auto: {
        	"flex-grow": 1,
        	"flex-basis": "auto",
        	"flex-shrink": 1,
        },
        flex1: {
        	flex: 1
        },

        //清除浮动
        clearfix: {
            content: "''",
            clear: "both",
            height: 0,
            visibility: "hidden",
            display: "block",
        },

        //设置不换行出现省略号
        ellipsis: {
            position: "relative",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
        },
        //设置两行出现省略号
        clamp2: {
            display: "-webkit-box",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical",
            "word-wrap": "break-word",
            "word-break": "break-all",
        }
    }
}
export const styleFn = styleGather();




