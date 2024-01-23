package com.asj.pair.controller;

import com.asj.pair.dto.request.VideoRequestDTO;
import com.asj.pair.dto.response.VideoResponseDTO;
import com.asj.pair.service.VideoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/app/videos")
public class VideoController {

    private final VideoService videoService;

    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    @PostMapping()
    public ResponseEntity<VideoResponseDTO> create(@RequestBody VideoRequestDTO video){
        return ResponseEntity.status(HttpStatus.CREATED).body(videoService.create(video));
    }

    @GetMapping("/{id}")
    public ResponseEntity<VideoResponseDTO> findById(@PathVariable int id){
        return ResponseEntity.status(HttpStatus.OK).body(videoService.findById(id));
    }

    @GetMapping()
    public ResponseEntity<List<VideoResponseDTO>> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(videoService.findAll());
    }
}
