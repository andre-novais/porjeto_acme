class Planilha{
    init(conn){
        this.conn = conn
        this.cria_planilha()
    }
    cria_planilha(){
        const sql = 'CREATE TABLE IF NOT EXISTS T_financeiro (id SERIAL PRIMARY KEY, DS_tipo varchar(50) not NULL, VL_valor integer not null, occured_at int default extract(epoch from now()))'
        this.conn.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela T_financeiro esta no ar')
            }
        })
    }
    valida(json){
        if ('VL_valor' in json && 'DS_tipo' in json){
            return true
        } else {
            return "são necessarios os campos DS_tipo e VL_valor"
        }
    }
    insere(json){
        if (this.valida(json)===true){
        const sql = 'INSERT INTO T_financeiro SET ?'
        this.conn.query(sql,[json],(err,resultado) => {
            if(err) {
                console.log(err)
            } else {
                console.log(resultado)
            }
        })
    }else console.log(this.valida(json))}
}

module.exports = new Planilha