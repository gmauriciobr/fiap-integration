package br.com.fiap.model;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "metrica_notificacao")
public class MetricaNotificacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private Metrica metrica;
    private String email;
    @Type(type = "text")
    private String msg;
    @CreatedDate
    private LocalDateTime dataCriacao;

    public MetricaNotificacao(Metrica metrica, String email, String msg) {
        this.metrica = metrica;
        this.email = email;
        this.msg = msg;
    }
}
