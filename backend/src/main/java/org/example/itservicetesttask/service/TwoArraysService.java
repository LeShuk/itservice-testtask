package org.example.itservicetesttask.service;

import org.example.itservicetesttask.dto.TwoArraysDto;
import org.example.itservicetesttask.model.TwoArraysModel;

import java.util.List;

public interface TwoArraysService {
    boolean save(TwoArraysDto twoArraysDto);
    boolean update(TwoArraysModel twoArraysModel);
    List<TwoArraysModel> findAll();
    TwoArraysModel findById(long id);
    List<String> calculate(TwoArraysDto twoArraysDto);
}
