class Plan_base{
    constructor(conn){
        this.conn = conn
    }
    _valida(json){        
        for(let [key,value]of Object.entries(json)){
            if (Object.keys(this.items).indexOf(key)<0){
                console.log(key)
                console.log(this.items)
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
    insere(json, res){
        if (this._valida(json)===true){
            console.log(Object.values(json))
            const converte = (str) => (typeof(str) == "string")? "'"+str+"'":(typeof(str)=="object")?JSON.stringify(str):str;
            const valores = Object.values(json).map(converte)
            console.log(valores)
            let sql = `insert into ${this.table_name} (${Object.keys(json)}) Values (${valores.join(',')}) RETURNING id`
            console.log(sql)
            this.conn.query(sql, (erro, resultado) => {
                if(erro) {
                    console.log(erro),
                    res.status(500).send("erro interno")
                } else {
                    console.log(resultado)
                    let res_json = json
                    res_json["id"] = resultado["rows"][0]["id"]
                    res.send(res_json)
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
    deleta(id, res){
        const sql = `DELETE FROM ${this.table_name} WHERE id = ${id}`
        this.conn.query(sql, (erro, resultado) => {
            if(erro) {
                res.send(erro)
            } else {
                res.send(resultado.rows[0])
        }})        
    }
}

module.exports = Plan_base