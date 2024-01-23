package com.asj.pair.service.impl;

import com.asj.pair.dto.request.VideoRequestDTO;
import com.asj.pair.dto.response.VideoResponseDTO;
import com.asj.pair.model.Video;
import com.asj.pair.service.VideoService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.asj.pair.repository.VideoRepository;
import com.asj.pair.service.CategoryService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class VideServiceImpl implements VideoService {

    private final VideoRepository videoRepository;
    private final CategoryService categoryService;

    private final ModelMapper mapper = new ModelMapper();
    public VideServiceImpl(VideoRepository videoRepository, CategoryService categoryService) {
        this.videoRepository = videoRepository;
        this.categoryService = categoryService;
    }

    public VideoResponseDTO create(VideoRequestDTO videoReq) {
        Video video = mapper.map(videoReq, Video.class);
        video.setCategory(categoryService.findById(videoReq.getCategoryId()));
        VideoResponseDTO videoResp = mapper.map(videoRepository.save(video), VideoResponseDTO.class);
        videoResp.setRanking(0);
        return videoResp;
    }

    public VideoResponseDTO findById(int id) {
        Optional<Video> videoEncontrado = videoRepository.findById(id);
        if (videoEncontrado.isEmpty()) throw new RuntimeException("Video not found");
        Video video = videoEncontrado.get();
        VideoResponseDTO videoResp = mapper.map(video, VideoResponseDTO.class);
        if (video.getTotalQualification() != 0 && video.getQualificationQuantity() != 0) {
            videoResp.setRanking(calculateRanking(video.getTotalQualification(), video.getQualificationQuantity()));
        }
        return videoResp;
    }

    public List<VideoResponseDTO> findAll() {
        List<Video> videos = videoRepository.findAll();
        if (videos.isEmpty()) throw new RuntimeException("Videos not found");
        List<VideoResponseDTO> videosResp = new ArrayList<>();
        for (Video video : videos) {
            VideoResponseDTO videoResp = mapper.map(video, VideoResponseDTO.class);
            if (video.getTotalQualification() != 0 && video.getQualificationQuantity() != 0) {
                videoResp.setRanking(calculateRanking(video.getTotalQualification(), video.getQualificationQuantity()));
            }
            videosResp.add(videoResp);
        }
        return videosResp;
    }

    private double calculateRanking(int total, int quantity) {
        return total / quantity;
    }
}
