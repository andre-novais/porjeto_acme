const Plan_base = require("./plan_base.js")

class Crm extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={
                        "ID_cliente": "number",
                        "DS_evento": ["cliente_novo", "cliente_inativado", "cliente_ativado"]
                    }
        this.table_name = "T_crm"
    }
    insere(json, res){
        super.insere(json, res)
    }
    pega_por_id(id, res){
        super.pega_por_id(id, res)
    }
    altera(id,json,res){
        super.altera(id,json,res)
    }
    deleta(id,res){
        super.deleta(id,res)
    }
}

module.exports = Crm