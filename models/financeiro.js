const Plan_base = require("./plan_base.js")

class Financeiro extends Plan_base {
    constructor(conn){
        super(conn);
        this.items = ["DS_tipo", "VL_valor"]
        this.table_name = "T_financeiro"
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
}

module.exports = Financeiro