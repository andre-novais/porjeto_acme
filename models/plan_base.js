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
    insere(json, res){
        if (this._valida(json)===true){
            const converte = (str) => (typeof(str) == "string")? "'"+str+"'":(typeof(str)=="object")?"'"+JSON.stringify(str)+"'":str;
            const valores = Object.values(json).map(converte)
            let sql = `insert into ${this.table_name} (${Object.keys(json)}) Values (${valores.join(',')}) RETURNING id`
            
            function comunica_db (sql, callback, obj){
            let resultado_sql =obj.conn.query(sql, (erro, resultado) => {
                if(erro) {
                    console.log(erro)
                    //res.resposta[`erro em ${this.table_name}`] = JSON.stringify(erro)
                    console.log(res.resposta)
                    return callback(JSON.stringify(erro))
                } else {
                    console.log(sql)
                    let res_json = json
                    res_json["id"] = resultado["rows"][0]["id"]
                    //res.resposta[`resultado ${this.table_name}`] = JSON.stringify(res_json)
                    return callback(JSON.stringify(res_json))
                }
            })}

            comunica_db(sql, (resultado)=>{
                res.resposta[`resultado_${this.table_name}`] = resultado;
            }, this)
        } else { res.resposta[`erro_${this.table_name}`] = this._valida(json)}
        console.log(res.resposta)
        console.log("returning res")
        return res
    }
    pega_por_id(id,res){
        const sql = `SELECT * FROM ${this.table_name} WHERE id = ${id}`
        this.conn.query(sql, (erro, resultado) => {
            if(erro) {
                res + "\n" + erro
            } else {
                res + "\n" + resultado.rows[0]
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
                    res + "\n" + erro
                } else {
                    console.log(sql)
                    res + "\n" + resultado
                }
            })
        }
        
    }
    deleta(id, res){
        const sql = `DELETE FROM ${this.table_name} WHERE id = ${id}`
        this.conn.query(sql, (erro, resultado) => {
            if(erro) {
                console.log(erro)
                res + "\n" + erro
            } else {
                console.log(sql)
                res + "\n" + resultado.rows[0]
        }})
             
    }
}

module.exports = Plan_base