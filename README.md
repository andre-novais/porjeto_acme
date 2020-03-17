# porjeto_acme

## Financeiro

    https://projeto-acme.herokuapp.com/financeiro
    
### GET

retorna array com todas as linhas na tabela em formato JSON, é possivel especificar o id do evento na url:

    https://projeto-acme.herokuapp.com/financeiro/23
    
### POST

Insere linha na tabela, os dados são passados atravez de um JSON com os parametros:
  
  ds_tipificacao: tipo contabil do evento, são aceitos "custo","despesa","receita","enctrada_com_contrapartida"
  
  vl_valor: integer referente ao valor do evento
  
eventos como venda realisada e compra automatica de produtos alteram a planilha automaticamente

### PUT
Altera linha da tabela, é necessario especificar a linha da seguinte forma:

    https://projeto-acme.herokuapp.com/financeiro/{ID}

onde {ID} é o id da linha desejada. É preciso respeitar as mesmas regras do POST

### DEL
Deleta a linha da tabela especificada da seguinte forma:

    https://projeto-acme.herokuapp.com/financeiro/{ID}

onde {ID} é o id da linha desejada.

## CRM

    https://projeto-acme.herokuapp.com/crm
    
### GET

retorna array com todas as linhas na tabela em formato JSON, é possivel especificar o id do evento na url:

    https://projeto-acme.herokuapp.com/crm/23
    
### POST

Insere linha na tabela, os dados são passados atravez de um JSON com os parametros:
  id_cliente: id do cliente em questão
  ds_evento: tipo do evento, são aceitos "cliente_novo", "cliente_inativado", "cliente_ativado"
  
Toda compra efetuada lança um evento de ativação de cliente.

### PUT

Altera linha da tabela, é necessario especificar a linha da seguinte forma:

    https://projeto-acme.herokuapp.com/crm/{ID}

onde {ID} é o id da linha desejada. É preciso respeitar as mesmas regras do POST

### DEL

Deleta a linha da tabela especificada da seguinte forma:

    https://projeto-acme.herokuapp.com/crm/{ID}

onde {ID} é o id da linha desejada.

## Fornecedores

### GET

retorna array com todas as linhas na tabela em formato JSON, é possivel especificar o id do evento na url:

    https://projeto-acme.herokuapp.com/fornecedores/23

### POST

Insere linha na tabela, os dados são passados atravez de um JSON com os parametros:

  cd_fornecedor: cnpj ou numero de identificação do fornecedor
  ds_evento: tipo de evento, são aceitos "compra", "recebimento" e "compra_por_venda_descoberta"
  id_produto: integer do id do produto em questão
  vl_quantidade: numero de unidades da transação
  vl_transacao: integer do valor total de transação
  
Compras de itens sem estoque são inseridas diretamente na tabela.

### PUT

Altera linha da tabela, é necessario especificar a linha da seguinte forma:

    https://projeto-acme.herokuapp.com/fornecedores/{ID}

onde {ID} é o id da linha desejada. É preciso respeitar as mesmas regras do POST

### DEL

Deleta a linha da tabela especificada da seguinte forma:

    https://projeto-acme.herokuapp.com/fornecedores/{ID}

onde {ID} é o id da linha desejada.

## Loja Online

### GET

retorna array com todas as linhas na tabela em formato JSON, é possivel especificar o id do evento na url:

    https://projeto-acme.herokuapp.com/loja_online/23

### POST

Insere linha na tabela, os dados são passados atravez de um JSON com os parametros:

  id_compra: integer do id da compra
  id_cliente: integer do id do cliente
  js_produtos: JSON relativo aos itens comprados, ele deve ser formado de acordo com a estrutura:
    {ID_PRODUTO : {"quantidade" : NUMERO, "preco" : NUMERO}}
  bo_checkout: boolean representando se o checkout foi iniciado ou não
  js_dados_financeiros: JSON com os dados financeiros da compra
  ds_evento: tipo de evento, são aceitos "inclusão-exclusão", "inicio_checkout", "compra_efetuada"
  
### PUT

Altera linha da tabela, é necessario especificar a linha da seguinte forma:

    https://projeto-acme.herokuapp.com/loja_online/{ID}

onde {ID} é o id da linha desejada. É preciso respeitar as mesmas regras do POST

### DEL

Deleta a linha da tabela especificada da seguinte forma:

    https://projeto-acme.herokuapp.com/loja_online/{ID}

onde {ID} é o id da linha desejada.

## RH

### GET

retorna array com todas as linhas na tabela em formato JSON, é possivel especificar o id do evento na url:

    https://projeto-acme.herokuapp.com/rh/23

### POST

Insere linha na tabela, os dados são passados atravez de um JSON com os parametros:

  cd_funcionario: cpf/cnpj do funcionario em questão
  ds_evento: tipo do evento, são aceitos "contratacao", "desligamento", "promocao"
  ds_cargo: nome do cargo do funcionario
  
### PUT

Altera linha da tabela, é necessario especificar a linha da seguinte forma:

    https://projeto-acme.herokuapp.com/rh/{ID}

onde {ID} é o id da linha desejada. É preciso respeitar as mesmas regras do POST

### DEL

Deleta a linha da tabela especificada da seguinte forma:

    https://projeto-acme.herokuapp.com/rh/{ID}

onde {ID} é o id da linha desejada.
