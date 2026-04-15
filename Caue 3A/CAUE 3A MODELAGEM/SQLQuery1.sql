--CRIA UM BANCO DE DADOS

create database compras1;

--ATIVA O BD QUE VOCÊ CRIOU
use compras1;

--CONSULTAR OS BANCOS EXISTENTES
select name
from master.sys.databases

--EXCLUIR BD
drop database compras;