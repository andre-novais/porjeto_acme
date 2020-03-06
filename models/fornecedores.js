const Plan_base = require("./plan_base.js")

class Fornecedores extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={"CD_fornecedor": "number", "DS_evento": ["compra", "venda"], "ID_produto":"number","VL_quantidade": "number", "VL_transacao": "number"}
        this.table_name = "T_fornecedores"
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

module.exports = Fornecedores