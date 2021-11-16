package br.com.fiap.job;

import br.com.fiap.service.MetricaService;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Scheduled;

@Slf4j
@Configuration
@RequiredArgsConstructor
public class ConsultaMetricasJob {

    private final MetricaService metricaService;

    @Scheduled(fixedRate = 60000)
    private void verificaLeituras() {
        var inicio = LocalDateTime.now();
        log.info("Inicio ConsultaMetricaJob");
        metricaService.verificaMetricas();
        log.info("Fim ConsultaMetricaJob");
    }
}
