package com.mySampleApplication.client.bpmn;


public class Intermediate extends BaseObject {


    public static final IntermediateType TYPE_NONE = new IntermediateType("none");
    public static final IntermediateType TYPE_TIMER = new IntermediateType("timer");
    public static final IntermediateType TYPE_MESSAGE = new IntermediateType("message");

    private IntermediateType type;

    public Intermediate(String name) {
        this(name, TYPE_NONE);
    }

    public Intermediate(String name, IntermediateType type) {
        super(name);
        this.type = type;
    }



    public IntermediateType getType() {
        return type;
    }

    public void setType(IntermediateType type) {
        this.type = type;
    }

    public static class IntermediateType{
        private String type;

        public IntermediateType(String type) {
            this.type = type;
        }

        public String getType() {
            return type;
        }
    }

}
