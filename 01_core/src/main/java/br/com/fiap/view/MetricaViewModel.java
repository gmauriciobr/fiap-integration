package br.com.fiap.view;

import br.com.fiap.model.Metrica;
import lombok.Data;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;

@Data
public class MetricaViewModel {

    private Long droneId;
    private String droneNome;
    private String latitude;
    private String longitude;
    private Double temperatura;
    private Long umidade;

    public MetricaViewModel(Metrica metrica) {
        BeanUtils.copyProperties(metrica, this);
        droneId = metrica.getDrone().getId();
        droneNome = metrica.getDrone().getNome();
    }

    public static Page<MetricaViewModel> parse(Page<Metrica> metricas) {
        return metricas.map(MetricaViewModel::new);
    }
}
