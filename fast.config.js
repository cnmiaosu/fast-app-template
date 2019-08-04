// +----------------------------------------------------------------------
// | fast-app-cli [ complex to simple ]
// +----------------------------------------------------------------------
// | Copyright (c) 2015~2019 安徽秒速科技有限公司 All rights reserved.
// +----------------------------------------------------------------------
// | npm repository : https://www.npmjs.com/package/fast-app-cli
// +----------------------------------------------------------------------
// | Licensed UNLICENSED
// +----------------------------------------------------------------------
// | Author: tangfei <tangfei@cnmiaosu.com> <957987132@qq.com>
// +----------------------------------------------------------------------
'use strict';

module.exports = {

    //基本配置
    config:{
        //build打包分析工具
        bundleAnalyzer:false,

        //设计稿尺寸宽度
        UiWidth:375,

        /*
        * DllPlugin
        * vue无需添加，脚手架默认添加了
        * 格式举例：
        *   { 'vue' : ['vue'] }
        */
        dll:{},

        //css 白名单，如使用第三方UI组件，如build后样式无效，请添加前缀，如 [/van-.*/] 对应 van-nav-bar等等class或者id
        whitePatterns:[]
    },

    //开发环境配置
    devConfig:{

    },

    //正式环境配置
    prodConfig:{

    }

}