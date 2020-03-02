const Plan_base = require("./plan_base")

class Financeiro extends Plan_base {
    init(conn){
        super.init(conn);
        this.items = ["DS_tipo", "VL_valor"]
        this.table_name = "T_financeiro"
    }
    insere(json){
        super.insere(json)
    }
}