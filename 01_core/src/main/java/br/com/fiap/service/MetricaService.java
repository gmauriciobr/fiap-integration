package br.com.fiap.service;

import br.com.fiap.config.rabbitmq.RabbitMQConfig;
import br.com.fiap.dto.MetricaDTO;
import br.com.fiap.model.Metrica;
import br.com.fiap.repository.MetricaRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Slf4j
@Service
@RequiredArgsConstructor
public class MetricaService {

    private final MetricaRepository metricaRepository;
    private final RabbitTemplate rabbitTemplate;

    public void cadastro(MetricaDTO dto) {
        log.info("Enviando msg para fila: [{}] >> msg: [{}]", RabbitMQConfig.METRICA_QUEUE ,dto);
        enviarFila(dto);
    }

    public Metrica buscaPorId(Long id) {
        return metricaRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, ("Metrica não encontrada")));
    }

    public Page<Metrica> buscaMetricas(Pageable page) {
        return metricaRepository.findAll(page);
    }

    private void enviarFila(Object msg) {
        rabbitTemplate.convertAndSend(RabbitMQConfig.EXCHANGE_NAME, RabbitMQConfig.ROUTING_KEY, msg);
    }

}
