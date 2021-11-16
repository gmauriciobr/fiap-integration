package br.com.fiap.validation;

import br.com.fiap.repository.DroneRepository;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class DroneValidator implements ConstraintValidator<DroneConstraint, Long> {

    private final DroneRepository droneRepository;

    @Override
    public boolean isValid(Long id, ConstraintValidatorContext context) {
        return id == null || droneRepository.existsById(id);
    }
}
