let alert={
    allstate:true,
    ruleInput:function(e,self){
        const name=e.target.dataset.name;
        self.data.rule[name].val=e.detail.value
        this.rulefn(self.data.rule[name],self);
        
    },
    rulefn:function(ref,self){
        var reg=new RegExp(ref.reg)
        if (!reg.test(ref.val)) {
            self.setData({
                alertText:ref.mess,
                alertShow:true
            })
            setTimeout(()=>{ self.setData({alertShow:false}) },2000)
        }else{
            ref.state=true;
        }
    },
    ruleall:function(self){
        alert.allstate=true;
        for (var value in self.data.rule) {
            value=self.data.rule[value]

            this.rulefn(value,self)

            if(!value.state){
                alert.allstate=false;
                return false;
            }
        }
        
    }
}




module.exports = alert

