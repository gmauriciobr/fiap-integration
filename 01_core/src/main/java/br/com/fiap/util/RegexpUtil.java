package br.com.fiap.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexpUtil {

    public static boolean validaRegex(String parttner, String value) {
        if (parttner == null || value == null) return false;
        Pattern pattern = Pattern.compile(parttner, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(value);
        boolean isMatch = matcher.find();
        System.out.println(String.format("matcher: -> %s : %s = %s  ", value, parttner, isMatch));
        return isMatch;
    }
}
