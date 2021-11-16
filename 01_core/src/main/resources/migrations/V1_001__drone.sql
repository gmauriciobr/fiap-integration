create table drone (
   id bigint not null auto_increment,
   nome varchar(255),
   rastreavel tinyint(1) not null,
   data_criacao datetime,
   data_alteracao datetime,
   primary key (id)
)