package br.com.fiap.repository;

import br.com.fiap.model.Metrica;
import java.util.List;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MetricaRepository extends JpaRepository<Metrica, Long> {

    @EntityGraph(type = EntityGraph.EntityGraphType.FETCH, value = "metrica-graph")
    @Query("from Metrica m where ((m.temperatura < 0 or m.temperatura > 35) or m.umidade < 15) "
         + " and not exists (select 1 from MetricaNotificacao mn where mn.metrica.id = m.id) ")
    List<Metrica> buscaMetricaAlerta();
}
