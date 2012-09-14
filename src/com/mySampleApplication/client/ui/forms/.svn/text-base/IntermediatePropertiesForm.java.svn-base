package com.mySampleApplication.client.ui.forms;


import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.mySampleApplication.client.bpmn.BaseObject;
import com.smartgwt.client.types.TitleOrientation;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.layout.HLayout;

public class DefaultPropertiesForm extends AbstractPropertiesForm {

    private TextItem elementLabelItem;

    public DefaultPropertiesForm(BaseObject bpmnElement) {
        super(bpmnElement);
    }

    @Override
    protected FormItem[] getFormItems() {
        elementLabelItem = new TextItem();
        elementLabelItem.setTitle("Label");
        elementLabelItem.setRequired(true);
        elementLabelItem.setDefaultValue(getModel().getName());

        return new FormItem[]{elementLabelItem};
    }

    @Override
    protected JSONObject serialize(BaseObject bpmnElement) {
        JSONObject j = new JSONObject();
        j.put("id", new JSONString(bpmnElement.getId()));
        j.put("name", new JSONString(bpmnElement.getName()));
        return j;
    }

    @Override
    protected void saveUserInputIntoModel() {
        getModel().setName(elementLabelItem.getValueAsString());
    }
}
