package br.com.fiap.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ConsultaMetricasDTO {

    private Long droneId;
    private String nomeDrone;
    private String latitude;
    private String longitude;
    private Double temperatura;
    private Long umidade;
    private LocalDateTime dataCriacao;
}
