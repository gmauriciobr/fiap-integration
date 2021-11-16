create table metrica (
     id bigint not null auto_increment,
     drone_id bigint,
     latitude varchar(255),
     longitude varchar(255),
     temperatura float(10,2),
     umidade bigint,
     data_criacao datetime,
     primary key (id),
     CONSTRAINT fk_metrica_drone FOREIGN KEY (drone_id) REFERENCES drone (`id`)
)