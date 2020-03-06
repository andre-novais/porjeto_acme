const Plan_base = require("./plan_base.js")
const Crm = require("./crm.js")
const conn = require('../infraestrutura/coneccao.js')
const Fornecedores = require("./fornecedores.js")
const Financeiro = require("./financeiro.js")

class Loja_online extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={"ID_compra": "number", "ID_cliente": "number","JS_produtos": "object","BO_checkout": "boolean", "JS_dados_financeiros": "object", "DS_evento":["inclusão-exclusão","inicio_checkout","compra_efetuada"]}
        this.table_name = "T_loja_online"
    }
    insere(json, res){
        this._valida_produtos(json["JS_produtos"],res)
        super.insere(json, res)
        if(json["DS_evento"]=="compra_efetuada"){
            var instancia_crm = new Crm(conn)
            var instancia_financeiro = new Financeiro(conn)
            instancia_crm.insere({"ID_cliente":json["ID_cliente"],"DS_evento":"cliente_ativado"},res)
            instancia_financeiro.insere({"VL_tipificacao":"custo","VL_valor":this._soma_items(json)}, res)
        }
        const produto_sem_estoque = "19"
        if(Object.keys(json).includes(produto_sem_estoque)){
            var instancia_fornecedores = new Fornecedores(conn)
            const fornecedor_de_19 = 1111
            const preco_19 = 10.99
            instancia_fornecedores.insere({"CD_fornecedor":fornecedor_de_19,
                                            "DS_evento":"compra_por_venda_descoberta",
                                            "ID_produto":produto_sem_estoque,
                                            "VL_quantidade":json[produto_sem_estoque]["quantidade"],
                                            "VL_transacao":(parceInt(json[produto_sem_estoque])*preco_19)},
                                            res)
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
    _valida_produtos(json,res){
        try{
            for (var key in Object.keys(json)){
                console.log(json[key],json[key].hasOwnProperty("quantidade"),json[key].hasOwnProperty("preco"))
                if(!(json[key].hasOwnProperty("quantidade") && json[key].hasOwnProperty("preco"))){
                    res.send(`campo JS_produtos necessita dos atributos "quantidade" e "preco" em json embedado para cada produto`)
                }
            }
        }
        catch(erro){
            res.send(`campo JS_produtos necessita dos atributos "quantidade" e "preco" em json embedado para cada produto`)
        }
    }
    _soma_items(json){
        let soma = 0
        for (var key in Object.keys(json)){
            soma += parseint(json[key]["quantidade"]) * parseInt(json[key]["preco"])
        }
        return soma
    }
}

module.exports = Loja_online