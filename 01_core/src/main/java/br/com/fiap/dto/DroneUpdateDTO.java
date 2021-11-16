package br.com.fiap.dto;

import javax.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class DroneUpdateDTO {

    @NotEmpty
    private String nome;
    private boolean rastreavel;
}
