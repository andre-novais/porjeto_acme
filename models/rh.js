const Plan_base = require("./plan_base.js")

class Rh extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={"CD_funcionario": "number", "DS_evento": ["contratacao", "desligamento", "promocao"], "DS_cargo":"string"}
        this.table_name = "T_rh"
    }
    insere(json, resposta){
        super.insere(json, resposta)
    }
    pega_por_id(id, resposta){
        super.pega_por_id(id,resposta)
    }
    altera(id,json,resposta){
        super.altera(id,json,resposta)
    }
    deleta(id,resposta){
        super.deleta(id,resposta)
    }
}

module.exports = Rh 