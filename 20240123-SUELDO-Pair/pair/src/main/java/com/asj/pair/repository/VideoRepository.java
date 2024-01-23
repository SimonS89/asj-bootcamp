package com.asj.pair.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asj.pair.model.Video;

public interface VideoRepository extends JpaRepository<Video, Integer>{
}
