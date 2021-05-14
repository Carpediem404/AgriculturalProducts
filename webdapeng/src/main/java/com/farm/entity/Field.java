package com.farm.entity;

import sun.tracing.dtrace.DTraceProviderFactory;

import java.util.Date;

public class Field {
    private Integer id;

    private Float area;

    private String username;

    private Date startTime;

    private Integer time;

    private Boolean status;

    private Float total;

    private String air_temperature;

    private String air_humidity;

    private String co2;

    private String illuminance;

    private String soil_temperature;

    private String soil_humidity;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Float getArea() {
        return area;
    }

    public void setArea(Float area) {
        this.area = area;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Integer getTime() {
        return time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Float getTotal() {
        return total;
    }

    public void setTotal(Float total) {
        this.total = total;
    }

    public String getAir_temperature() {
        return air_temperature;
    }

    public void setAir_temperature(String air_temperature) {
        this.air_temperature = air_temperature;
    }

    public String getAir_humidity() {
        return air_humidity;
    }

    public void setAir_humidity(String air_humidity) {
        this.air_humidity = air_humidity;
    }

    public String getCo2() {
        return co2;
    }

    public void setCo2(String co2) {
        this.co2 = co2;
    }

    public String getIlluminance() {
        return illuminance;
    }

    public void setIlluminance(String illuminance) {
        this.illuminance = illuminance;
    }

    public String getSoil_temperature() {
        return soil_temperature;
    }

    public void setSoil_temperature(String soil_temperature) {
        this.soil_temperature = soil_temperature;
    }

    public String getSoil_humidity() {
        return soil_humidity;
    }

    public void setSoil_humidity(String soil_humidity) {
        this.soil_humidity = soil_humidity;
    }
}