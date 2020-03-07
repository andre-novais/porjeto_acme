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
        console.log(this.str_res)
        if (this._valida(json)===true){
            const converte = (str) => (typeof(str) == "string")? "'"+str+"'":(typeof(str)=="object")?"'"+JSON.stringify(str)+"'":str;
            const valores = Object.values(json).map(converte)
            let sql = `insert into ${this.table_name} (${Object.keys(json)}) Values (${valores.join(',')}) RETURNING id`
            this.conn.query(sql, (erro, resultado) => {
                if(erro) {
                    console.log(erro),
                    this.str_res += "\n" + "erro de tipagem" 
                } else {
                    console.log(sql)
                    let res_json = json
                    res_json["id"] = resultado["rows"][0]["id"]
                    res.setHeader("resultado_insert", JSON.stringify(res_json))
                }
            })
        } else {res.setHeader(`validacao ${this.table_name}`,this._valida(json))}
        console.log(this.str_res )
        console.log(res)
        
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
            const valoObject.values(json).map(converte)        

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