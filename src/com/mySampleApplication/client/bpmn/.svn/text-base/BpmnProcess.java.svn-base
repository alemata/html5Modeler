package com.mySampleApplication.client.bpmn;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BpmnProcess {

    private String id;
    private String name;
    private Map<String, BaseObject> elements;
    private Map<String, Sequence> transitions;

    public BpmnProcess(String id, String name) {
        this.id = id;
        this.name = name;
        this.elements = new HashMap<String, BaseObject>();
        this.transitions = new HashMap<String, Sequence>();
    }

    public void addElement(BaseObject element) {
        this.elements.put(element.getId(), element);
        if (element instanceof Task) {
            addTask(element.getId(), element.getName(), element.getX(), element.getY());
        } else if (element instanceof Start) {
            addStart(element.getId(), element.getName(), element.getX(), element.getY());
        } else if (element instanceof End) {
            addEnd(element.getId(), element.getName(), element.getX(), element.getY());
        } else if (element instanceof Or) {
            addOr(element.getId(), element.getName(), element.getX(), element.getY());
        } else if (element instanceof And) {
            addAnd(element.getId(), element.getName(), element.getX(), element.getY());
        } else if (element instanceof Intermediate) {
            addIntermediate(element.getId(), element.getName(), element.getX(), element.getY(), ((Intermediate) element).getType().getType());
        }
    }

    public void addSequence(Sequence element) {
        this.transitions.put(element.getId(), element);
        addSequence(element.getId(), element.getName(), element.getFromObject().getId(), element.getToObject().getId());
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, BaseObject> getElements() {
        return elements;
    }

    public BaseObject getElement(String id) {
        return elements.get(id);
    }

    public void setElements(Map<String, BaseObject> elements) {
        this.elements = elements;
    }

    public Map<String, Sequence> getTransitions() {
        return transitions;
    }

    public void setTransitions(Map<String, Sequence> transitions) {
        this.transitions = transitions;
    }

    public void deleteElement(String id) {
        this.elements.remove(id);
        deleteElementOnView(id);
    }


    native void addStart(String id, String name, int x, int y) /*-{
        $wnd.addStart(id, name, x, y);
    }-*/;

    native void addTask(String id, String name, int x, int y) /*-{
        $wnd.addTask(id, name, x, y);
    }-*/;

    native void addEnd(String id, String name, int x, int y) /*-{
        $wnd.addEnd(id, name, x, y);
    }-*/;

    native void addOr(String id, String name, int x, int y) /*-{
        $wnd.addOr(id, name, x, y);
    }-*/;

    native void addAnd(String id, String name, int x, int y) /*-{
        $wnd.addAnd(id, name, x, y);
    }-*/;

    native void addIntermediate(String id, String name, int x, int y, String type) /*-{
        $wnd.addIntermediate(id, name, x, y, type);
    }-*/;

    native void addSequence(String id, String name, String fromId, String toId) /*-{
        $wnd.addSequence(id, name, fromId, toId);
    }-*/;

    native void deleteElementOnView(String id) /*-{
        $wnd.deleteElement(id);
    }-*/;

}
