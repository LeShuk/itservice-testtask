package org.example.itservicetesttask.model;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
//@TypeDef(name = "json", typeClass = JsonType.class)
@Table(name="TWO_ARRAYS")
public class TwoArraysModel {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Type(JsonType.class)
    @Column(name = "STRINGS", nullable = false, columnDefinition = "jsonb")
    private List<String> strings = new ArrayList<>();

    @Type(JsonType.class)
    @Column(name = "SUBSTRINGS", nullable = false, columnDefinition = "jsonb")
    private List<String> subStrings = new ArrayList<>();
}
