class Plan_base{
    constructor(conn){
        this.conn = conn
        this.items = ["placeholder"]
        this.table_name = 'placeholder'
    }
    _valida(json){
        if (Object.keys(json).length != this.items.length){
            return `são necessarios os items ${this.items.join()}, e nada mais`
        }
        for(let key in this.items){
            if (!(json.hasOwnProperty(key))){
                return `são necessarios os items ${this.items.join()}`
            }
        return true
        }
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