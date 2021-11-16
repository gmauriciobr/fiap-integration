package br.com.fiap.dto;

import br.com.fiap.model.Metrica;
import java.io.Serializable;
import lombok.Data;
import org.springframework.beans.BeanUtils;

@Data
public class MetricaDTO implements Serializable {

    private Long droneId;
    private String latitude;
    private String longitude;
    private Double temperatura;
    private Long umidade;

    public static Metrica parse(MetricaDTO dto) {
        var metrica = new Metrica();
        BeanUtils.copyProperties(dto, metrica);
        return metrica;
    }
}
