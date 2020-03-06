const Plan_base = require("./plan_base.js")

class Loja_online extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={"ID_compra": "number", "ID_cliente": "number","ARR_produtos": "object","BO_checkout": "boolean", "JS_dados_financeiros": "object"}
        this.table_name = "T_loja_online"
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

module.exports = Loja_online