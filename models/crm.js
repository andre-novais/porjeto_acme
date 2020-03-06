const Plan_base = require("./plan_base.js")

class Crm extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={"ID_cliente": "number", "DS_evento": ["cliente_novo", "cliente_inativado", "cliente_ativado"]}
        this.table_name = "T_crm"
    }
    insere(json, resposta){
        super.insere(json, resposta)
    }
    pega_por_id(id, resposta){
        super.pega_por_id(id, resposta)
    }
    altera(id,json,resposta){
        super.altera(id,json,resposta)
    }
    deleta(id,resposta){
        super.deleta(id,resposta)
    }
}

module.exports = Crm