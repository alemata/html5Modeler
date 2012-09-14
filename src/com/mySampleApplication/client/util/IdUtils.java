package com.mySampleApplication.client.util;

import com.google.gwt.user.client.Random;

import java.util.Arrays;
import java.util.List;

public class IdUtils {


    public static String getUniqueId(String prefix) {
        String id = prefix + "-";
        List<String> characters = Arrays.asList("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
        for (int i = 0; i < 5; i++) {
            id += characters.get( Math.abs(Random.nextInt()) % characters.size());
        }
        return id;
    }


}
