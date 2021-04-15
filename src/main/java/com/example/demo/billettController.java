package com.example.demo;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class billettController {

    @Autowired
    BillettRepository rep;

    //private final List<Billett> billetter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett) {
        rep.lagreBillett(innBillett);
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle() {
        return rep.hentAlleBilletter();
    }

    @GetMapping("/nullstill")
    public void nullstill() {
        rep.slettAlleBilletter();
    }
}

