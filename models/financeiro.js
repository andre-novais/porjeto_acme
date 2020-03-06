const Plan_base = require("./plan_base.js")

class Financeiro extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={"DS_tipificacao": ["custo","despesa","receita", "entrada_com_contrapartida"],
                     "VL_valor": "number"
                    }
        this.table_name = "T_financeiro"
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

module.exports = Financeiro