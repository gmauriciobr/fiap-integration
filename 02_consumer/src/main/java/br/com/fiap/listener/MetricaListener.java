package br.com.fiap.listener;

import br.com.fiap.config.RabbitMQConfig;
import br.com.fiap.service.MetricaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MetricaListener {

    private final MetricaService metricaService;

    @RabbitListener(queues = RabbitMQConfig.METRICA_QUEUE)
    public void consumer(Message message) {
        log.info("Consumido: " + message);
        this.metricaService.receberMetrica(message);
    }
}
