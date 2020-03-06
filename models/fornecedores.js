const Plan_base = require("./plan_base.js")
const conn = require('../infraestrutura/coneccao.js')
const Financeiro = require("./financeiro.js")

class Fornecedores extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={"CD_fornecedor": "number", "DS_evento": ["compra", "recebimento", "compra_por_venda_descoberta"], "ID_produto":"number","VL_quantidade": "number", "VL_transacao": "number"}
        this.table_name = "T_fornecedores"
    }
    insere(json, res){
        super.insere(json, res)
        if (json["DS_evento"] == "compra" || json["DS_evento"] == "compra_por_venda_descoberta"){
            let instancia_financeiro = new Financeiro(conn)
            instancia_financeiro.insere({"DS_tipificacao":"custo","VL_valor": json["VL_transacao"]},res)
        }
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