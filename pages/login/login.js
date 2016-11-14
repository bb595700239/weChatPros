import alert from '../alert/alert.js'
Page({
    data:{
        alertText:null,
        alertShow:false,
        rule:{
            phone:{
                val:null,
                reg:"^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$",
                mess:'手机号格式不正确',
                state:false,
            },
            yzm:{
                val:null,
                reg:"^[0-9]{4}$",
                mess:'验证码格式不正确',
                state:false,
            }
        },
        btndisabled:false,
    },
    ruleInput:function(e){
       alert.ruleInput(e,this)
  
    },

    ruleall:function(){
         alert.ruleall(this)

         if(alert.allstate){
             this.setData({
                 alertText:'校验通过！',
                 alertShow:true,
             })
         }
        
    }
})