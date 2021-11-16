create table metrica_notificacao (
     id bigint not null auto_increment,
     metrica_id bigint,
     email varchar(100),
     msg text,
     data_criacao datetime,
     primary key (id)
)