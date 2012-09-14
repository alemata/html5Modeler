package com.mySampleApplication.client.listeners;

import com.mySampleApplication.client.bpmn.BaseObject;
import com.mySampleApplication.client.bpmn.BpmnProcess;
import com.mySampleApplication.client.managers.BpmnProcessManager;
import com.mySampleApplication.client.ui.forms.ElementFormsManager;
import com.mySampleApplication.client.ui.forms.DefaultPropertiesForm;
import com.mySampleApplication.client.ui.popup.PopUpManager;


public class ElementDoubleClickListener implements IJSEventListener {

    private static void onEvent(String id) {
        BpmnProcess currentProcess = BpmnProcessManager.getInstance().getCurrentProcess();

        BaseObject element = currentProcess.getElement(id);
        DefaultPropertiesForm form = ElementFormsManager.getInstance().getFormForElement(element);

        PopUpManager.getInstance().showPropertiesPopUp(form);


    }


    public native void addListener()/*-{
        $wnd.addEventListener('bpmnElementDoubleClick',
                function (evt) {

                    console.log("GWT dblclick listener");

                    this.@com.mySampleApplication.client.listeners.ElementDoubleClickListener::onEvent(Ljava/lang/String;)(evt.elementId);
                }, false);

    }-*/;


}
