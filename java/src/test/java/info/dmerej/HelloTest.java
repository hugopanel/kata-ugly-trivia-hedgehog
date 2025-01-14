package info.dmerej;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class HelloTest {

    @Test
    void it_works() {
        var hello = new Hello();
        var actual = hello.getAnswer();
        assertEquals(42, actual);

    }
}
