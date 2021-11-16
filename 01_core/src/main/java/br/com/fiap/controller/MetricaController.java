package br.com.fiap.controller;

import br.com.fiap.dto.MetricaDTO;
import br.com.fiap.service.MetricaService;
import br.com.fiap.view.MetricaViewModel;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/metrica")
@RequiredArgsConstructor
@Tag(name = "metrica", description = "Serviço para administração das metricas")
public class MetricaController {

    private final MetricaService metricaService;

    @PutMapping
    @Operation(summary = "Cadastra metrica", tags = {"metrica"})
    public ResponseEntity<Void> cadastro(@RequestBody @Valid MetricaDTO dto) {
        metricaService.cadastro(dto);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    @Operation(summary = "Busca Todos Pedidos", tags = {"metrica"})
    public Page<MetricaViewModel> buscaTodasMetrica(@PageableDefault(sort = "id", direction = Sort.Direction.DESC, page = 0, size = 5) Pageable page) {
        return MetricaViewModel.parse(metricaService.buscaMetricas(page));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Busca metrica por Id", tags = {"metrica"})
    public ResponseEntity<MetricaViewModel> buscaPorId(@PathVariable Long id) {
        var metrica = metricaService.buscaPorId(id);
        return ResponseEntity.ok(new MetricaViewModel(metrica));
    }
}
