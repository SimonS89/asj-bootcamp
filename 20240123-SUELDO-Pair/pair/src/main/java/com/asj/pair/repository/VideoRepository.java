package com.asj.pair.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asj.pair.model.Video;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video, Integer>{

//    @Query("SELECT v FROM Video v WHERE v.category.id = :categoryId")
//    List<Video> findByCategoryId(@Param("categoryId") Integer categoryId);
    List<Video> findByCategory_Id(Integer categoryId);
}
