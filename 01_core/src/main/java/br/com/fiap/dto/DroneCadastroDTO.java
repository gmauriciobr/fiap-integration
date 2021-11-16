package br.com.fiap.dto;

import br.com.fiap.model.Drone;
import javax.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class DroneCadastroDTO {

    @NotEmpty
    private String nome;
    private boolean rastreavel;

    public static Drone parse(DroneCadastroDTO dto) {
        return new Drone(dto.nome, dto.rastreavel);
    }
}
