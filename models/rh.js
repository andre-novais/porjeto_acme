const Plan_base = require("./plan_base.js")

class Rh extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={"CD_funcionario": "number", "DS_evento": ["contratacao", "desligamento", "promocao"], "DS_cargo":"string"}
        this.table_name = "T_rh"
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

module.exports = Rh