package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett billett){

        String sql = "INSERT INTO Billett (film, antall, fornavn, etternavn, telefon, epost) " +
                "VALUES(?,?,?,?,?,?)";
        db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(), billett.getEtternavn(),
                billett.getTelefon(), billett.getEpost());
    }

    public List<Billett> hentAlleBilletter(){
        String sql = "SELECT * FROM Billett ORDER BY etternavn";
        List<Billett> alleBilletter =db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;

    }

    public void slettAlleBilletter(){
        String sql = "DELETE * FROM Billett";
        db.update(sql);
    }
}
