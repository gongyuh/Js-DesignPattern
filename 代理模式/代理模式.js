class ReadImg {
    constructor (fileName) {
        this.fileName = fileName
        this.loadFromDisk() //模拟从硬盘加载，初始化
    }
    display () {
        console.log('display...' + this.fileName)
    }
    loadFromDisk () {
        console.log('loading...' + this.fileName)
    }
}

class ProxyImg {
    constructor(fileName) {
        this.readImg = new ReadImg(fileName)
    }
    display () {
        this.readImg.display()
    }
}

//测试
let proxyImg = new ProxyImg('1.png')
proxyImg.display()