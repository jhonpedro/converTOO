class Processor{
    static Process(data){
        let row = data.split("\r\n")
        let rows = new Array() 

        row.forEach(row => {
            rows.push(row.split(";"))
        });

        return rows
    }

}

module.exports = Processor