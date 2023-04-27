package org.example.itservicetesttask.controller;

import org.example.itservicetesttask.dto.TwoArraysDto;
import org.example.itservicetesttask.model.TwoArraysModel;
import org.example.itservicetesttask.service.TwoArraysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/twoarrays")
public class TwoArraysController {
    @Autowired
    private TwoArraysService twoArraysService;

    @GetMapping()
    public List<TwoArraysModel> findAll() {
        return twoArraysService.findAll();
    }

    @GetMapping("/{id}")
    public TwoArraysModel findById(@PathVariable long id) {
        return twoArraysService.findById(id);
    }

    @PostMapping()
    public boolean save(@RequestBody TwoArraysDto twoArraysDto) {
        return twoArraysService.save(twoArraysDto);
    }

    @PostMapping("/calculate")
    public List<String> calculate(@RequestBody TwoArraysDto twoArraysDto) {
        return twoArraysService.calculate(twoArraysDto);
    }

    @PutMapping("/{id}")
    public boolean update(@PathVariable long id, @RequestBody TwoArraysModel twoArraysModel) {
        twoArraysModel.setId(id);
        return twoArraysService.update(twoArraysModel);
    }

}
