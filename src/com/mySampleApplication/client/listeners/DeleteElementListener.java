package com.mySampleApplication.client.listeners;

import com.mySampleApplication.client.bpmn.BaseObject;
import com.mySampleApplication.client.bpmn.BpmnProcess;
import com.mySampleApplication.client.managers.BpmnProcessManager;
import com.mySampleApplication.client.ui.forms.DefaultPropertiesForm;
import com.mySampleApplication.client.ui.forms.ElementFormsManager;
import com.mySampleApplication.client.ui.popup.PopUpManager;

/**
 * Created by IntelliJ IDEA.
 * User: axel
 * Date: 8/21/12
 * Time: 3:42 PM
 * To change this template use File | Settings | File Templates.
 */
public class DeleteElementListener implements IJSEventListener {

    private static void onEvent(String id) {
        BpmnProcess currentProcess = BpmnProcessManager.getInstance().getCurrentProcess();
        currentProcess.deleteElement(id); //Finally deletes the real element
    }


    public native void addListener()/*-{
        $wnd.addEventListener('deleteElement',
                function (evt) {

                    console.log("GWT deleteElement listener");

                    this.@com.mySampleApplication.client.listeners.DeleteElementListener::onEvent(Ljava/lang/String;)(evt.elementId);
                }, false);

    }-*/;



}
