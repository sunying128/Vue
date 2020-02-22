class Auth {
    authUser(req, res, next) {          //验证用户
      if (!req.session.user_id) {
        res.send({
          status: 403,
          message: '未登录'
        })
        console.log("66666666666666666666")
      } else {
        next();
      }
    }
  
    authAdmin(req, res, next) {           //验证管理者
      if (!req.session.admin_id) {
        res.send({
          status: 403,
          message: '未登录'
        })
        console.log("77777777777777777777777777")
      
      } else {
        next();
      }
    }
  
    auth(req, res, next) {
      if (!req.session.admin_id && !req.session.user_id) {
        res.send({
          status: 403,
          message: '未登录'
        })
        console.log("4444444444444444444444444")
      } else {
        next();
      }
    }
  }
  
  export default new Auth();