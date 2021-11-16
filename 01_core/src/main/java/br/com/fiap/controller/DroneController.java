package br.com.fiap.controller;

import br.com.fiap.dto.DroneCadastroDTO;
import br.com.fiap.dto.DroneUpdateDTO;
import br.com.fiap.service.DroneService;
import br.com.fiap.view.DroneViewModel;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/drone")
@RequiredArgsConstructor
@Tag(name = "drone", description = "Serviço para administração do drone")
public class DroneController {

    private final DroneService cadastroService;

    @PostMapping
    @Operation(summary = "Cadastra Drone", tags = {"drone"})
    public ResponseEntity<DroneViewModel> cadastro(@RequestBody @Valid DroneCadastroDTO dto, UriComponentsBuilder uriBuilder) {
        var drone = cadastroService.cadastro(dto);
        var uri = uriBuilder.path("/drone/{id}").buildAndExpand(drone.getId()).toUri();
        return ResponseEntity.created(uri).body(new DroneViewModel(drone));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Busca Drone por Id", tags = {"drone"})
    public ResponseEntity<DroneViewModel> buscaPorId(@PathVariable Long id) {
        return ResponseEntity.ok(new DroneViewModel(cadastroService.buscaPorId(id)));
    }

    @GetMapping
    @Operation(summary = "Lista todos os Drones", tags = {"drone"})
    public ResponseEntity<List<DroneViewModel>> buscaTodos() {
        return ResponseEntity.ok(DroneViewModel.parse(cadastroService.buscaTodos()));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Altera Drone", tags = {"drone"})
    public ResponseEntity<DroneViewModel> altera(@PathVariable Long id, @RequestBody @Valid DroneUpdateDTO dto) {
        var drone = cadastroService.altera(id, dto);
        return ResponseEntity.ok(new DroneViewModel(drone));
    }
}
