class Iterator {
    constructor () {
        this.list = container.list
        this.index = 0
    }
    //两个核心的api
    next () {
        if (this.hasnext()) {
            return this.list[this.index++]  
        }
        //如果没有下一项，直接return null就行了
        return null
    }
    hasnext () {
        if (this.index >= this.list.length) {
            return false
        }
        return true
    }
}

class Container {
    constructor (list) {
        this.list = list
    }
    //生成遍历器 
    getIterator () {
        return new Iterator()
    }
}

//test
let arr = [1,2,3,4,5,6]
let container = new Container(arr)
let iterator = container.getIterator()
while(iterator.hasnext()) {
    console.log(iterator.next())
}