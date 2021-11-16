package br.com.fiap.service;

import br.com.fiap.dto.MetricaDTO;
import br.com.fiap.repository.MetricaRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class MetricaService {

    private final MetricaRepository metricaRepository;

    public void cadastro(MetricaDTO dto) {
        var metrica = MetricaDTO.parse(dto);
        metricaRepository.save(metrica);
    }

    public void receberMetrica(Message message) {
        try {
            MetricaDTO dto = new ObjectMapper().readValue(message.getBody(), MetricaDTO.class);
            cadastro(dto);
        } catch (Exception e) {
            log.error("Erro ao receber metrica: ", e);
        }
    }
}
