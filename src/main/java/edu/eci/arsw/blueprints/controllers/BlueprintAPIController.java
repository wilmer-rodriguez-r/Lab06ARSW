/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.blueprints.controllers;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.SimpleTimeZone;
import java.util.logging.Level;
import java.util.logging.Logger;

import edu.eci.arsw.blueprints.model.Blueprint;
import edu.eci.arsw.blueprints.services.BlueprintsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author hcadavid
 */

@RestController
@RequestMapping(value = "/blueprints")
public class BlueprintAPIController {

    @Autowired
    BlueprintsServices bps = null;

    @GetMapping()
    public ResponseEntity<?> getAllBlueprints(){
        try {
            //obtener datos que se enviarán a través del API
            return new ResponseEntity<>(bps.getAllBlueprints(), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, "No se pudo obtener el recurso");
            return new ResponseEntity<>("No se encontraron planos",HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{author}")
    public ResponseEntity<?> getBlueprintsByAuthor(@PathVariable String author){
        try {
            //obtener datos que se enviarán a través del API
            return new ResponseEntity<>(bps.getBlueprintsByAuthor(author), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, "No se pudo obtener el recurso");
            return new ResponseEntity<>("El autor introducido no existe",HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{author}/{bpname}")
    public ResponseEntity<?> getBlueprint(@PathVariable String author, @PathVariable String bpname){
        try {
            //obtener datos que se enviarán a través del API
            return new ResponseEntity<>(bps.getBlueprint(author, bpname), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, "No se pudo obtener el recurso");
            return new ResponseEntity<>("El autor o el plano no existe",HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping()
    public ResponseEntity<String> postBlueprint(@RequestBody Blueprint bp){
        try {
            bps.addNewBlueprint(bp);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("No se pudo agregar el blueprint",HttpStatus.FORBIDDEN);
        }
    }

    @PutMapping("/{author}/{bpname}")
    public ResponseEntity<String> putBlueprint(@PathVariable String author, @PathVariable String bpname, @RequestBody Blueprint bp){
        try {
            bps.updateBlueprint(author, bpname, bp);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception ex) {
            Logger.getLogger(BlueprintAPIController.class.getName()).log(Level.SEVERE, null, ex);
            return new ResponseEntity<>("No se pudo agregar el blueprint",HttpStatus.FORBIDDEN);
        }
    }
    
}

