package com.mySampleApplication.client.bpmn;

import com.mySampleApplication.client.util.IdUtils;

public class BaseObject {

    private String id;
    private String name;
    private String description;
    private int x = 100;
    private int y = 100;


    public BaseObject(String name) {
        this.name = name;
        String className = this.getClass().getName();
        this.id = IdUtils.getUniqueId(className.substring(className.lastIndexOf(".") + 1));
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }

}
