package br.com.fiap.service;

import br.com.fiap.dto.DroneCadastroDTO;
import br.com.fiap.dto.DroneUpdateDTO;
import br.com.fiap.model.Drone;
import br.com.fiap.repository.DroneRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class DroneService {

    private final DroneRepository droneRepository;

    public Drone cadastro(DroneCadastroDTO dto) {
        return droneRepository.save(DroneCadastroDTO.parse(dto));
    }

    public Drone buscaPorId(Long id) {
        return droneRepository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, ("Drone não encontrado")));
    }

    public List<Drone> buscaTodos() {
        return droneRepository.findAll();
    }

    public Drone altera(Long id, DroneUpdateDTO dto) {
        var drone = buscaPorId(id);
        BeanUtils.copyProperties(dto, drone);
        return droneRepository.save(drone);
    }
}
