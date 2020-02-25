## 更新（2019/6/5） ##
项目已经发布一年多的时间，vue-cli已经升级到3.0，很多依赖也都更新了导致项目跑不起来，这里简单的把项目升级到vue-cli3版本，接下来准备发布小程序版本的，感谢大家的支持。

## 关于 ##
好再来是一款类似美团外卖的项目，是根据外卖战应运而生，前端的vue+vuex+vue-router+axios，因为需要用到定位和支付等功能，需要后端配合，而且想要做真正数据交互，所以用express(基于nodejs的框架)做后台，数据库用NOSQL的mongodb。 前端项目包含20多个路由，涉及到vue文件有40个，功能设计登录，定位，浏览商品，加购物车，下订单，支付(支持微信和支付宝的扫码支付和调起app支付)，评价，个人信息更改，是一个较为完整的项目。

### 注意：此项目为个人开发实践练习，不作为任何商业用途

## 功能 ##
- 登录/注销
- IP定位
- 搜索地址
- 获取商店(计算当前位置和商店的距离)
- 加购物车
- 下订单
- 支付(支持微信和支付宝的扫码支付和调起app支付)
- 评价
- 头像上传(用了七牛云存储)
- 图片懒加载


## 技术栈 ##
- Webpack-cli搭建项目
- Vue全家桶(vue+vuex+vue-router)
- CSS预处理器SCSS
- axios与后端进行请求数据
- 七牛云存储图片
- 支付宝和微信支付
- 使用better-scroll滚动
- Express搭建后端服务
- Mongoose对MongoDB进行便捷操作
- 使用Charles抓取数据


## 效果演示
### 主界面 ###
![主界面](screenshots/index3.gif)
### 定位和搜索 ###
![定位](screenshots/location.gif)
### 扫码支付 ###
![扫码支付](screenshots/scan_pay.gif)
### APP支付 ###
![调用APP支付](screenshots/app_pay.gif)
### 我的购物车 ###
![购物车](screenshots/cart.gif)
### 清除购物车 ###
![清除购物车](screenshots/clearCart.gif)
### 评论 ###
![评论](screenshots/comment.gif)
### 其它 ###
![其它](screenshots/other.gif)
### 还有一些其它功能就不放图了哈 ###

## 线上地址 ##
    http://39.108.3.12
    请用谷歌浏览器然后开启移动端浏览，如果要调用APP支付就需要用手机自带浏览器打开，然后支付时选择调起APP支付

## 未完待续 ##
    还有商家管理PC端还没写完，等写完再开源出来

## 项目部署

阿里云 CentOS 7.4 64位

## 项目运行

```
项目运行之前，请确保系统已经安装以下应用
1、node
2、mongodb
```

```
git clone https://github.com/zwStar/vue-meituan.git

cd vue-meituan

npm install

npm run serve

访问: http://localhost:8080 (确保后端项目服务已开启)

```

# 项目布局

```
.
├── api                             后端接口
├── config.js                       运行配置
├── assets                          静态资源
├── components                      全局组件
├── router                          路由
├── store                           vuex
├── styles                          全局样式
├── views                           页面
├── App.vue                         入口页面
├── main.js                         入口
├── .babelrc                        babel-loader 配置
├── .gitignore                      git 忽略项
├── favicon.ico                     favicon图标
├── index.html                      html模板
└── package.json                    package.json
.

```

# License
    MIT






