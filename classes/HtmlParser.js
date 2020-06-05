const ejs = require("ejs")

class HtmlParse{
    static async Parse(table){
        try{
            return await ejs.renderFile("./index.ejs",{
                header: table.header,
                body: table.rows
            })
        }catch(error){
            return false
        }
    }
}

module.exports = HtmlParse