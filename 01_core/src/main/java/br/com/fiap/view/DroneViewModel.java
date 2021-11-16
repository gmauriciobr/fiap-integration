package br.com.fiap.view;

import br.com.fiap.model.Drone;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Data;
import org.springframework.beans.BeanUtils;

@Data
public class DroneViewModel {

    private Long id;
    private String nome;
    private boolean rastreavel;

    public DroneViewModel(Drone drone) {
        BeanUtils.copyProperties(drone, this);
    }

    public static List<DroneViewModel> parse(List<Drone> list) {
        return list.stream().map(DroneViewModel::new).collect(Collectors.toList());
    }
}
