package com.asj.pair.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class VideoRequestDTO {

    private String url;
    private String title;
    private int categoryId;
    private String description;

    public VideoRequestDTO() {
    }
    
    public VideoRequestDTO(String url, String title, int categoryId, String description) {
		super();
		this.url = url;
		this.title = title;
		this.categoryId = categoryId;
		this.description = description;
	}



	public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
