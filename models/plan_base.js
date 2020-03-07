class Plan_base{
    constructor(conn){
        this.conn = conn
    }
    _valida(json){        
        for(let [key,value]of Object.entries(json)){
            if (Object.keys(this.items).indexOf(key)<0){
                return `são necessarios os items ${Object.keys(this.items).join()}`
            }
            if (typeof(this.items[key])=="object"){
                if(!(this.items[key].includes(value))){
                    return `O valor ${value} para o campo ${key} não foi aceito`
                }
            } else {
                if(!(typeof(value)==this.items[key])){
                   return `campo ${key} só aceita ${this.items[key]}`
                }
            }
        }
        return true
    }
    insere(json){
        if (this._valida(json)===true){
            const converte = (str) => (typeof(str) == "string")? "'"+str+"'":(typeof(str)=="object")?"'"+JSON.stringify(str)+"'":str;
            const valores = Object.values(json).map(converte)
            let sql = `insert into ${this.table_name} (${Object.keys(json)}) Values (${valores.join(',')}) RETURNING id`
            
            this.conn.query(sql, (erro, resultado) => {
                if(erro) {
                    console.log(erro)
                    res.send(`erro_${this.table_name}_${JSON.stringify(erro)}`)
                } else {
                    console.log(sql)
                    this.resultado = resultado
                }
            })
        } else { res.send(`erro_${this.table_name}_${this._valida(json)}`)}
    }
    pega_por_id(id,res){
        const sql = `SELECT * FROM ${this.table_name} WHERE id = ${id}`
        this.conn.query(sql, (erro, resultado) => {
            if(erro) {
                res.send(`erro_${this.table_name}_${JSON.stringify(erro)}`)
            } else {
                res.send(resultado["rows"][0])
        }})
        
    }
    altera(id,json,res){
        if(this._valida(json)===true){
            const converte = (str) => (typeof(str) == "string")? "'"+str+"'":str;
            const valores = Object.values(json).map(converte)        

            const sql = `UPDATE ${this.table_name} SET (${Object.keys(json)}) = (${valores}) WHERE id = ${id}`
            this.conn.query(sql, (erro, resultado) => {
                if(erro) {
                    console.log(erro)
                    res.send(`erro_${this.table_name}_${JSON.stringify(erro)}`)
                } else {
                    console.log(sql)
                }
            })
        }
        
    }
    deleta(id, res){
        const sql = `DELETE FROM ${this.table_name} WHERE id = ${id}`
        this.conn.query(sql, (erro, resultado) => {
            if(erro) {
                console.log(erro)
                res.send(`erro_${this.table_name}_${JSON.stringify(erro)}`)
            } else {
                console.log(sql)
        }})
             
    }
    select_estrela(res){
        const sql = `SELECT * FROM ${this.table_name}`
        this.conn.query(sql, (erro, resultado) => {
            if(erro) {
                console.log(erro)
                res.send(`erro_${this.table_name}_${JSON.stringify(erro)}`)
            } else {
                console.log(sql)
                res.send(resultado["rows"])
        }})

    }
}

module.exports = Plan_base