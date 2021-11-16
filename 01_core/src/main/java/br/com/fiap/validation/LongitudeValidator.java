package br.com.fiap.validation;

import br.com.fiap.util.RegexpUtil;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class LongitudeValidator implements ConstraintValidator<LongitudeConstraint, String> {

    private static String REGEXP_LONGITUDE = "^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$";

    @Override
    public boolean isValid(String longitude, ConstraintValidatorContext context) {
        return RegexpUtil.validaRegex(REGEXP_LONGITUDE, longitude);
    }
}
