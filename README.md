# porjeto_acme

## Financeiro

    https://projeto-acme.herokuapp.com/financeiro
    
### GET

retorna array com todas as linhas na tabela em formato JSON, é possivel especificar o id do evento na url:

    https://projeto-acme.herokuapp.com/financeiro/23
    
### POST

Insere linha na tabela, são necessarios os parametros:
  
  ds_tipificacao: tipo contabil do evento, são aceitos "custo","despesa","receita","enctrada_com_contrapartida"
  
  vl_valor: integer referente ao valor do evento
  
eventos como venda realisada e compra automatica de produtos alteram a planilha automaticamente

### PUT
Altera linha da tabela, é necessario especificar a linha da seguinte forma:

    https://projeto-acme.herokuapp.com/{ID}

onde {ID} é o id da linha desejada. É preciso respeitar as mesmas regras do POST

### DEL
Deleta a linha da tabela especificada da seguinte forma:

    https://projeto-acme.herokuapp.com/{ID}

onde {ID} é o id da linha desejada.

## CRM

    https://projeto-acme.herokuapp.com/crm
    
### GET

retorna array com todas as linhas na tabela em formato JSON, é possivel especificar o id do evento na url:

    https://projeto-acme.herokuapp.com/crm/23
    
### POST
    
