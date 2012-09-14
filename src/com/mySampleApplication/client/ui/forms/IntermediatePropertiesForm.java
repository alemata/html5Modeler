package com.mySampleApplication.client.ui.forms;


import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONString;
import com.mySampleApplication.client.bpmn.BaseObject;
import com.smartgwt.client.widgets.form.fields.ComboBoxItem;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.TextItem;

public class IntermediatePropertiesForm extends DefaultPropertiesForm{

    private TextItem elementLabelItem;
    private ComboBoxItem typeComboItem;

    public IntermediatePropertiesForm(BaseObject bpmnElement) {
        super(bpmnElement);
    }

    @Override
    protected FormItem[] getFormItems() {
        elementLabelItem = new TextItem();
        elementLabelItem.setTitle("Label");
        elementLabelItem.setRequired(true);
        elementLabelItem.setDefaultValue(getModel().getName());

        typeComboItem = new ComboBoxItem();
        typeComboItem.setTitle("Type");
        typeComboItem.setType("comboBox");
        typeComboItem.setValueMap("None", "Message", "Timer");
        typeComboItem.setRequired(true);

        return new FormItem[]{elementLabelItem, typeComboItem};
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
