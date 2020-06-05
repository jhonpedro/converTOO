class Table {
    constructor(arr){
        this.header = arr[0]
        arr.shift()
        this.rows = arr
    }

    RowsCount(){
        return this.rows.length
    }
    ColumnCount(){
        return this.header.length
    }
}

module.exports = Table