package com.mySampleApplication.client.ui.forms;

import com.mySampleApplication.client.bpmn.BaseObject;
import com.mySampleApplication.client.bpmn.Intermediate;

public class ElementFormsManager {

    private static ElementFormsManager instance = null;

    private ElementFormsManager() {
    }

    public static ElementFormsManager getInstance() {
        if(instance == null){
            instance = new ElementFormsManager();
        }
        return instance;
    }
    /* ****************************************************** */

    public DefaultPropertiesForm getFormForElement(BaseObject bpmnElement){
        if(bpmnElement instanceof Intermediate){
            return new IntermediatePropertiesForm(bpmnElement);
        }
        // todo: hacer un mapping entre los distintos BPMNElements y su correspondiente formulario (usar un map aca, no en el modelo de datos)
        return new DefaultPropertiesForm(bpmnElement);
    }
}
