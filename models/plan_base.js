class Plan_base{
    constructor(conn){
        this.conn = conn
    }
    _valida(json){        
        if (Object.keys(json).length != this.items.length){
            return `são necessarios os items ${this.items.join()}, e nada mais`
        }
        for(let [key,value]of Object.entries(json)){
            if (this.items.indexOf(key)<0){
                console.log(key)
                console.log(this.items)
                return `são necessarios os items ${this.items.join()}`
            }
        }
        return true
    }
    insere(json, res){
        if (this._valida(json)===true){
            
            const converte = (str) => (typeof(str) == "string")? "'"+str+"'":str;
            const valores = Object.values(json).map(converte)

            let sql = `insert into ${this.table_name} (${Object.keys(json)}) Values (${valores})`
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
    pega_por_id(id,res){
        const sql = `SELECT * FROM ${this.table_name} WHERE id = ${id}`
        this.conn.query(sql, (erro, resultado) => {
            if(erro) {
                res.send(erro)
            } else {
                res.send(resultado.rows[0])
        }})
    }
    altera(id,json,res){
        if(this._valida(json)===true){
            const converte = (str) => (typeof(str) == "string")? "'"+str+"'":str;
            const valores = Object.values(json).map(converte)        

            const sql = `UPDATE ${this.table_name} SET (${Object.keys(json)}) = (${valores}) WHERE id = ${id}`
            console.log(sql)
            this.conn.query(sql, (erro, resultado) => {
                if(erro) {
                    res.send(erro)
                } else {
                    res.send(resultado)
                }
            })
        }
    }
}

module.exports = Plan_base