package br.com.fiap.service;

import br.com.fiap.dto.EmailDTO;
import br.com.fiap.model.Metrica;
import br.com.fiap.model.MetricaNotificacao;
import br.com.fiap.repository.MetricaNotificacaoRepository;
import br.com.fiap.repository.MetricaRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class MetricaService {

    private final MetricaRepository metricaRepository;
    private final MetricaNotificacaoRepository metricaNotificacaoRepository;
    private final EmailService emailService;

    @Value("${job.email.notificacao}")
    private String emailNotificacao;

    public void verificaMetricas() {
        log.info("Verificando metricas");
        var list = metricaRepository.buscaMetricaAlerta();
        log.info("Metricas encontradas: " + list.size());
        if (list.size() > 0) {
            var emailDTO = preparaMsgEmail(list);
            var listMetricaNotificacao =
                list.stream().map(a -> new MetricaNotificacao(a, emailDTO.destinatario, emailDTO.msg)).collect(Collectors.toSet());
            metricaNotificacaoRepository.saveAll(listMetricaNotificacao);
            emailService.enviarEmail(emailDTO);
        }
    }

    public EmailDTO preparaMsgEmail(List<Metrica> metrica) {
        StringBuilder msg = new StringBuilder();
        msg.append("Olá, <br>");
        msg.append("Temos alerta(s) para sua coleta: <br><br>");
        msg.append(preparaMetricaEmail(metrica));
        msg.append("<br><br>");
        msg.append("Att. AgroTI");
        return EmailDTO.builder().msg(msg.toString()).assunto("Alerta Agro").destinatario(emailNotificacao).build();
    }

    public String preparaMetricaEmail(List<Metrica> metrica) {
        StringBuilder msg = new StringBuilder();
        msg.append("<table style=\"border: 1px solid black\">");
        msg.append("<tr>");
        msg.append("<th>Drone ID</th>");
        msg.append("<th>Drone Nome</th>");
        msg.append("<th>Latitude</th>");
        msg.append("<th>Longitude</th>");
        msg.append("<th>Temperatura</th>");
        msg.append("<th>Umidade</th>");
        msg.append("<th>Data Criação</th>");
        msg.append("</tr>");
        metrica.forEach(a -> {
            msg.append("<tr>");
            msg.append("<td style=\"border: 1px solid black\">").append(a.getDrone().getId()).append("</td>");
            msg.append("<td style=\"border: 1px solid black\">").append(a.getDrone().getNome()).append("</td>");
            msg.append("<td style=\"border: 1px solid black\">").append(a.getLatitude()).append("</td>");
            msg.append("<td style=\"border: 1px solid black\">").append(a.getLongitude()).append("</td>");
            msg.append("<td style=\"border: 1px solid black\">").append(a.getTemperatura()).append("</td>");
            msg.append("<td style=\"border: 1px solid black\">").append(a.getUmidade()).append("</td>");
            msg.append("<td style=\"border: 1px solid black\">").append(a.getDataCriacao()).append("</td>");
            msg.append("</tr>");
        });
        msg.append("</table>");
        return msg.toString();
    }
}
