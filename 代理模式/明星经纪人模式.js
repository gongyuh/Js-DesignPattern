let star = {
    name:'zhang',
    age:25,
    phone:'star:12345'
}

let agent = new Proxy(star,{
    get: function (target,key) {
        if( key === 'phone') {
            //返回经纪人自己的手机号码
            return 'agent:1234'
        }
        if( key === 'price') {
            //明星不报价，经纪人报价
            return 120000
        }
        return target[key]
    },
    set: function(target,key,val) {
        if( key === 'customPrice') {
            if( val < 10000) {
                //最低十万
                throw new Error('价格太低')
            }else {
                target[key] = val
                return true
            }
        }
    }
})

//test
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

console.log('==============')

 agent.customPrice = 150000
 console.log('agent.customPrice', agent.customPrice) 