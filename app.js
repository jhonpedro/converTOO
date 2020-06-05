const Reader = require("./classes/Reader.js"),
    Writer = require("./classes/Writer.js"),
    Processor = require("./classes/Processor.js"),
    Table = require("./classes/Table.js"),
    HtmlParser = require("./classes/HtmlParser.js"),
    pdfWriter = require("./classes/PDFWriter.js")

let reader = new Reader()
let writer = new Writer()

async function main(){
    //Define the path for your .CSV file below
    let filePath = "./data from algorithm.csv"
    let data = await reader.Read(filePath)
    let processedData = await Processor.Process(data)
    let table = new Table(processedData)
    let html =  await HtmlParser.Parse(table)
    
    if(html){
        let nameFile = "finished/converToo-" + Date.now()
    
        writer.Write(nameFile + ".html", html)
        pdfWriter.WritePDF(nameFile + ".PDF", html)
    }
    
}

main()