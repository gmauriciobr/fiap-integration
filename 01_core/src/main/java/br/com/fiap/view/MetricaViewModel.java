package br.com.fiap.view;

import br.com.fiap.model.Metrica;
import lombok.Data;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;

@Data
public class MetricaViewModel {

    private String latitude;
    private String longitude;
    private Long temperatura;
    private Long umidade;

    public MetricaViewModel(Metrica metrica) {
        BeanUtils.copyProperties(metrica, this);
    }

    public static Page<MetricaViewModel> parse(Page<Metrica> metricas) {
        return metricas.map(MetricaViewModel::new);
    }
}
