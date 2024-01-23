package com.asj.pair.service;

import com.asj.pair.dto.request.VideoRequestDTO;
import com.asj.pair.dto.response.VideoResponseDTO;

import java.util.List;

public interface VideoService {

    VideoResponseDTO create(VideoRequestDTO videoReq);
    VideoResponseDTO findById(int id);
    List<VideoResponseDTO> findAll();
}
