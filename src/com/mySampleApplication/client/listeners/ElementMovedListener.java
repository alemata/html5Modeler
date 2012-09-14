package com.mySampleApplication.client.listeners;


import com.mySampleApplication.client.bpmn.BaseObject;
import com.mySampleApplication.client.managers.BpmnProcessManager;

public class ElementMovedListener implements IJSEventListener {


    private static void updateModel(String id, int x, int y) {
        BaseObject element = BpmnProcessManager.getInstance().getCurrentProcess().getElement(id);
        element.setX(x);
        element.setY(y);
    }


    public native void addListener()/*-{
        $wnd.addEventListener('elementMoved',
                function (evt) {

                    console.log("ID: " + evt.elementId + "   x:" + evt.x + "    y:" + evt.y);

                    this.@com.mySampleApplication.client.listeners.ElementMovedListener::updateModel(Ljava/lang/String;II)(evt.elementId, evt.x, evt.y);
                }, false);

    }-*/;
}
