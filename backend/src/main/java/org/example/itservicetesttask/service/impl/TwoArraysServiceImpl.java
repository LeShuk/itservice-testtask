package org.example.itservicetesttask.service.impl;

import org.example.itservicetesttask.dto.TwoArraysDto;
import org.example.itservicetesttask.model.TwoArraysModel;
import org.example.itservicetesttask.repo.TwoArraysRepo;
import org.example.itservicetesttask.service.TwoArraysService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TwoArraysServiceImpl implements TwoArraysService {
    @Autowired
    private TwoArraysRepo twoArraysRepo;

    private List<String> findUniqueSubstringsInStringArray(List<String> stringArray, List<String> subStringArray) {
        Set<String> result = new HashSet<>();

        for (String subString:subStringArray) {
            for (String str:stringArray) {
                if (str.contains(subString)) {
                    result.add(subString);
                }
            }
        }
        return new ArrayList<>(result);
    }
    private List<String> findUniqueSubstringsInStringArraySorted(List<String> stringArray, List<String> subStringArray) {
        List<String> result = findUniqueSubstringsInStringArray(stringArray, subStringArray);
        result.sort(String::compareTo);
        return result;
    }

    @Override
    public boolean save(TwoArraysDto twoArraysDto) {
        TwoArraysModel twoArraysModel = new TwoArraysModel();
        twoArraysModel.setStrings(twoArraysDto.getStrings());
        twoArraysModel.setSubStrings(twoArraysDto.getSubStrings());
        try {
            twoArraysRepo.save(twoArraysModel);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public boolean update(TwoArraysModel twoArraysModel) {
        if (findById(twoArraysModel.getId()) != null) {
            twoArraysRepo.save(twoArraysModel);
            return true;
        }
        return false;
    }

    @Override
    public List<TwoArraysModel> findAll() {
        return twoArraysRepo.findAll();
    }

    @Override
    public TwoArraysModel findById(long id) {
        return twoArraysRepo.findById(id).isPresent()?twoArraysRepo.findById(id).get():null;
    }

    @Override
    public List<String> calculate(TwoArraysDto twoArraysDto) {
        return findUniqueSubstringsInStringArraySorted(twoArraysDto.getStrings(), twoArraysDto.getSubStrings());
    }


}
