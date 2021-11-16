package br.com.fiap.repository;

import br.com.fiap.model.Metrica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MetricaRepository extends JpaRepository<Metrica, Long> {
}
