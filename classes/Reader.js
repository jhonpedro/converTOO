const fs = require("fs")
const util = require("util")

class Reader {

    constructor(){
        this.reader = util.promisify(fs.readFile)
    }

    async Read(filePath){
        return await this.reader(filePath, {encoding: "utf-8"})
    }

}

module.exports = Reader