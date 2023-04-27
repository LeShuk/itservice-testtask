package org.example.itservicetesttask.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class TwoArraysDto {
    private List<String> strings;
    private List<String> subStrings;
}
