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
        super.insere(json)
        console.log(resposta)
    }
    pega_por_id(id, resposta){
        resposta = super.pega_por_id(id, resposta)
        return resposta
    }
    altera(id,json,resposta){
        resposta = super.altera(id,json,resposta)
        return resposta
    }
    deleta(id,resposta){
        resposta = super.deleta(id,resposta)
        return resposta
    }
}

module.exports = Financeiro