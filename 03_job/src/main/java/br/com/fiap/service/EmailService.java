package br.com.fiap.service;

import br.com.fiap.dto.EmailDTO;
import javax.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void enviarEmail(EmailDTO dto) {
        log.info("Enviando email: {}", dto);
        try {
            MimeMessage mail = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mail);
            helper.setFrom("naoresponder@email.com", "AgroTI");
            helper.setTo(dto.destinatario);
            helper.setSubject(dto.assunto);
            helper.setText(dto.msg, true);
            mailSender.send(mail);
        } catch (Exception e) {
            log.error("Erro ao enviar email: ", e);
        }
    }
}
