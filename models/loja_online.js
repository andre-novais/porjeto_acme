const Plan_base = require("./plan_base.js")
const Crm = require("./crm.js")
const conn = require('../infraestrutura/coneccao.js')
const Fornecedores = require("./fornecedores.js")
const Financeiro = require("./financeiro.js")

class Loja_online extends Plan_base {
    constructor(conn){
        super(conn);
        this.items ={"ID_compra": "number",
                    "ID_cliente": "number",
                    "JS_produtos": "object",
                    "BO_checkout": "boolean",
                    "JS_dados_financeiros": "object",
                    "DS_evento":["inclusão-exclusão","inicio_checkout","compra_efetuada"]
                }
        this.table_name = "T_loja_online"
    }
    insere(json, resposta){
        this._valida_produtos(json["JS_produtos"],resposta)
        super.insere(json, resposta)
        if(json["DS_evento"]=="compra_efetuada"){
            var instancia_crm = new Crm(conn)
            var instancia_financeiro = new Financeiro(conn)
            instancia_crm.insere({"ID_cliente":json["ID_cliente"],"DS_evento":"cliente_ativado"},resposta)
            instancia_financeiro.insere({"VL_tipificacao":"custo","VL_valor":this._soma_items(json["JS_produtos"])}, resposta)
        
            const produto_sem_estoque = "19"
            if(Object.keys(json).includes(produto_sem_estoque)){
                var instancia_fornecedores = new Fornecedores(conn)
                const fornecedor_de_19 = 1111
                const preco_19 = 10.99
                instancia_fornecedores.insere({"CD_fornecedor":fornecedor_de_19,
                                                "DS_evento":"compra_por_venda_descoberta",
                                                "ID_produto":produto_sem_estoque,
                                                "VL_quantidade":json["JS_produtos"][produto_sem_estoque]["quantidade"],
                                                "VL_transacao":(parceInt(json["JS_produtos"][produto_sem_estoque])*preco_19)
                                                },
                                                resposta)
            }    
        }
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
    _valida_produtos(json,resposta){
        try{
            for (var key in Object.keys(json)){
                console.log(json[key],json[key].hasOwnProperty("quantidade"),json[key].hasOwnProperty("preco"))
                if(!(json[key].hasOwnProperty("quantidade") && json[key].hasOwnProperty("preco"))){
                    resposta = resposta +`campo JS_produtos necessita dos atributos "quantidade" e "preco" em json embedado para cada produto`
                }
            }
        }
        catch(erro){
            resposta = resposta + `campo JS_produtos necessita dos atributos "quantidade" e "preco" em json embedado para cada produto`
        }
    }
    _soma_items(json_produtos){
        console.log("json que vai para soma items eh")
        console.log(json_produtos)
        let soma = 0
        Object.keys(json_produtos).forEach(key => {
            soma += parseInt(json_produtos[key]["quantidade"]) * parseInt(json_produtos[key]["preco"])
        })
        return soma
    }
}

module.exports = Loja_online