CREATE TABLE tbl_veiculos (
            chassi VARCHAR2 (17) NOT NULL,
            placa VARCHAR2 (7) NOT NULL,
            cor VARCHAR2(20) NOT NULL,
            motor VARCHAR2(40) NOT NULL,
            marca VARCHAR2(30) NOT NULL,
            modelo VARCHAR2(30) NOT NULL,
    
            CONSTRAINT tbl_veiculos_pk PRIMARY KEY (chassi),
            CONSTRAINT tbl_veiculos_un UNIQUE (placa)
);
