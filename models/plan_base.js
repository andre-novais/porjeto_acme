class Plan_base{
    constructor(conn){
        this.conn = conn
    }
    _valida(json){        
        if (Object.keys(json).length != this.items.length){
            return `são necessarios os items ${this.items.join()}, e nada mais`
        }
        for(let [key,value]of Object.entries(json)){
            if (this.items.indexOf(key)>=0){
                console.log(key)
                console.log(this.items)
                return `são necessarios os items ${this.items.join()}`
            }
        }
        return true
    }
    insere(json, res){
        if (this._valida(json)===true){
            let sql = `insert into ${this.table_name} (${Object.keys(json)}) Values (${Object.values(json)})`
            console.log(sql)
            this.conn.query(sql, (erro, resultado) => {
                if(erro) {
                    res.send(erro)
                } else {
                    res.send(resultado)
                }
            })
        } else {res.send(this._valida(json))}
    }
}

module.exports = Plan_base