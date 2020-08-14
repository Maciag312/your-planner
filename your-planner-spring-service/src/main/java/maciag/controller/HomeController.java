package maciag.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@Api(tags = "home")
public class HomeController {

    @GetMapping()
    public String hello(){
        return "Hello World!";
    }



}
