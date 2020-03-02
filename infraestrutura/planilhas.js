class Planilha{
    init(conn){
        this.conn = conn
        this.cria_planilha()
    }
    cria_planilha(){
        const sql = 'CREATE TABLE IF NOT EXISTS T_financeiro (id SERIAL PRIMARY KEY, DS_tipo varchar(50) not NULL, VL_valor integer not null, occured_at epoch default extract(epoch from now()))'
        this.conn.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Planilha