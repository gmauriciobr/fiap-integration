package br.com.fiap.dto;

import lombok.Builder;

@Builder
public class EmailDTO {

    public String destinatario;
    public String assunto;
    public String msg;

    @Override
    public String toString() {
        return String.format("destinatario: %s, assunto: %s, msg: %s", destinatario, assunto, msg);
    }
}
