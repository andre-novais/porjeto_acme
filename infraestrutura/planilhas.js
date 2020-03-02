class Planilha{
    init(conn){
        this.conn = conn
    }
    cria_planilha(){
        const sql = 'CREATE TABLE T_financeiro IF NOT EXISTS (id PRIMARY KEY AUTO INCREMENT, DS_tipo varchar(50) not NULL, VL_valor integer not null, occured_at epoch default extract(epoch from now()))'
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Planilha