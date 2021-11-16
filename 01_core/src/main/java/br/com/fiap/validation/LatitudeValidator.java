package br.com.fiap.validation;

import br.com.fiap.util.RegexpUtil;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class LatitudeValidator implements ConstraintValidator<LatitudeConstraint, String> {

    private static String REGEXP_LATITUDE = "^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$";

    @Override
    public boolean isValid(String latitude, ConstraintValidatorContext context) {
        return RegexpUtil.validaRegex(REGEXP_LATITUDE, latitude);
    }
}
