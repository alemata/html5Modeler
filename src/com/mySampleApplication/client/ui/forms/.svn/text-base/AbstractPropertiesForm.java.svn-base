package com.mySampleApplication.client.ui.forms;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.json.client.JSONObject;
import com.mySampleApplication.client.bpmn.BaseObject;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.TitleOrientation;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.layout.VLayout;

public abstract class AbstractPropertiesForm extends VLayout {

    private BaseObject model;

    public AbstractPropertiesForm(BaseObject bpmnElement) {
        super(20);

        this.setDefaultLayoutAlign(VerticalAlignment.CENTER);
        this.setAlign(Alignment.CENTER);
        this.model = bpmnElement;

        final DynamicForm form = new DynamicForm();
        form.setAutoFocus(true);
        form.setFields(getFormItems());
        form.setTitleOrientation(TitleOrientation.LEFT);

        this.addMember(form);
        this.draw();
    }

    // Returns a JSONObject from the bpmnElement
    protected abstract JSONObject serialize(BaseObject bpmnElement);

    // Set fields into model, from user inputs
    protected abstract void saveUserInputIntoModel();

    // Returns the form items to display inside the form
    protected abstract FormItem[] getFormItems();

    //Saves the model
    public void save() {
        saveUserInputIntoModel();
        updateModel(this.model);
    }

    // Returns the model
    public BaseObject getModel() {
        return model;
    }

    private void updateModel(BaseObject bpmnElement) {
        JSONObject json = serialize(bpmnElement);
        updateModel(json.getJavaScriptObject());
    }

    private native void updateModel(JavaScriptObject obj)/*-{
        $wnd.updateElement(obj);
    }-*/;


}
