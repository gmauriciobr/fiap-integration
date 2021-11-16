package br.com.fiap.dto;

import br.com.fiap.validation.DroneConstraint;
import br.com.fiap.validation.LatitudeConstraint;
import br.com.fiap.validation.LongitudeConstraint;
import java.io.Serializable;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import lombok.Data;

@Data
public class MetricaDTO implements Serializable {

    @NotNull
    @DroneConstraint
    private Long droneId;
    @NotNull
    @LatitudeConstraint
    private String latitude;
    @NotNull
    @LongitudeConstraint
    private String longitude;
    @NotNull
    @Min(-25) @Max(40)
    private Double temperatura;
    @NotNull
    @Min(0) @Max(100)
    private Long umidade;

    @Override
    public String toString() {
        return String.format("droneId: %s latitude: %s, longitude: %s, temperatura: %s, umidade: %s",
            droneId, latitude, longitude, temperatura, umidade);
    }
}
