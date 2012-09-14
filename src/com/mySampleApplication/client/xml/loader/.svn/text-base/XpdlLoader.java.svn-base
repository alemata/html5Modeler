package com.mySampleApplication.client.xml.loader;


import com.google.gwt.xml.client.Document;
import com.google.gwt.xml.client.Element;
import com.google.gwt.xml.client.NodeList;
import com.google.gwt.xml.client.XMLParser;
import com.mySampleApplication.client.bpmn.*;

import java.util.HashMap;

public class XpdlLoader {

    public XpdlLoader() {
    }

    public BpmnProcess loadProcess(String xpdl) {
        Document processDocument = XMLParser.parse(xpdl);
        NodeList workflowProcess = processDocument.getElementsByTagName("WorkflowProcess");
        BpmnProcess bpmnProcess = null;
        //Por ahora un solo proceso
        for (int i = 0; i < workflowProcess.getLength(); i++) {
            Element process = (Element) workflowProcess.item(i);
            bpmnProcess = new BpmnProcess(process.getAttribute("Id"), process.getAttribute("Name"));

            NodeList activities = process.getElementsByTagName("Activity");
            for (int j = 0; j < activities.getLength(); j++) {
                Element activity = (Element) activities.item(j);
                bpmnProcess.addElement(loadBaseObject(activity));
            }


            NodeList transitions = process.getElementsByTagName("Transition");
            for (int j = 0; j < transitions.getLength(); j++) {
                Element transition = (Element) transitions.item(j);
                bpmnProcess.addSequence(loadTransitionObject(transition, bpmnProcess));
            }


        }
        return bpmnProcess;
    }

    private BaseObject loadBaseObject(Element activity) {
        BaseObject resultObject = null;
        HashMap<String, String> extendedAttrs = loadExtendedAttributes(activity);
        if (extendedAttrs.get("bpmn.elementType").equals("START")) {
            resultObject = new Start(activity.getAttribute("Name"));
        } else if (extendedAttrs.get("bpmn.elementType").equals("END")) {
            resultObject = new End(activity.getAttribute("Name"));
        } else if (extendedAttrs.get("bpmn.elementType").equals("TASK")) {
            resultObject = new Task(activity.getAttribute("Name"));
        } else if (extendedAttrs.get("bpmn.elementType").equals("GATEWAY")) {
            if (extendedAttrs.get("bpmn.gateway.type").equals("AND")) {
                resultObject = new And(activity.getAttribute("Name"));
            } else if (extendedAttrs.get("bpmn.gateway.type").equals("OR")) {
                resultObject = new Or(activity.getAttribute("Name"));
            }
        }
        resultObject.setId(activity.getAttribute("Id"));
        resultObject.setX(Integer.parseInt(extendedAttrs.get("bpmn.position.x")));
        resultObject.setY(Integer.parseInt(extendedAttrs.get("bpmn.position.y")));
        return resultObject;
    }

    private Sequence loadTransitionObject(Element transition, BpmnProcess process) {
        Sequence resultObject = new Sequence(transition.getAttribute("Name"));
        resultObject.setId(transition.getAttribute("Id"));
        resultObject.setFromObject(process.getElement(transition.getAttribute("From")));
        resultObject.setToObject(process.getElement(transition.getAttribute("To")));
        return resultObject;
    }


    private HashMap<String, String> loadExtendedAttributes(Element element) {
        HashMap<String, String> result = new HashMap<String, String>();
        NodeList extendedAttributes = element.getElementsByTagName("ExtendedAttribute");
        for (int i = 0; i < extendedAttributes.getLength(); i++) {
            Element extendedAttr = (Element) extendedAttributes.item(i);
            result.put(extendedAttr.getAttribute("Name"), extendedAttr.getAttribute("Value"));
        }
        return result;
    }


}