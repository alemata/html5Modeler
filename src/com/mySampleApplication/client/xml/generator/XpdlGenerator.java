package com.mySampleApplication.client.xml.generator;

import com.google.gwt.user.client.Window;
import com.google.gwt.xml.client.Document;
import com.google.gwt.xml.client.Element;
import com.google.gwt.xml.client.XMLParser;
import com.mySampleApplication.client.bpmn.*;

//import javax.xml.parsers.DocumentBuilderFactory; no se puede porque no esta en el cliente....!

public class XpdlGenerator {

    private Document doc;

    public XpdlGenerator() {
    }

    public String generate(BpmnProcess process) {
        StringBuilder stringBuffer = new StringBuilder();

        doc = XMLParser.createDocument();

        //Add package element
        Element packageElement = createPackageElement(process, doc);
        doc.appendChild(packageElement);

        //Add package header element
        Element packageHeaderElement = createPackageHeaderElement(doc);
        packageElement.appendChild(packageHeaderElement);


        Element workflowProcesses = doc.createElement("WorkflowProcesses");
        packageElement.appendChild(workflowProcesses);

        Element workflowProcess = doc.createElement("WorkflowProcess");
        workflowProcesses.appendChild(workflowProcess);
        workflowProcess.setAttribute("Name", process.getName());
        workflowProcess.setAttribute("Id", process.getId());
        workflowProcess.appendChild(doc.createElement("ProcessHeader"));
        workflowProcess.appendChild(doc.createElement("Participants"));
        workflowProcess.appendChild(doc.createElement("ActivitySets"));

        Element activities = doc.createElement("Activities");
        workflowProcess.appendChild(activities);

        for (BaseObject baseObject : process.getElements().values()) {
            if (baseObject instanceof Task) {
                Element activity = createBaseActivityElement(baseObject);
                Element implementation = doc.createElement("Implementation");
                implementation.appendChild(doc.createElement("No"));
                activity.appendChild(implementation);
                Element extendedAttributes = getBasicExtendedAttributes(baseObject, "TASK");

                activity.appendChild(extendedAttributes);
                activities.appendChild(activity);
            } else if (baseObject instanceof Start) {
                Element activity = createBaseActivityElement(baseObject);
                activity.appendChild(doc.createElement("Route"));
                Element extendedAttributes = getBasicExtendedAttributes(baseObject, "START");

                activity.appendChild(extendedAttributes);
                activities.appendChild(activity);
            } else if (baseObject instanceof End) {
                Element activity = createBaseActivityElement(baseObject);
                activity.appendChild(doc.createElement("Route"));
                Element extendedAttributes = getBasicExtendedAttributes(baseObject, "END");

                activity.appendChild(extendedAttributes);
                activities.appendChild(activity);
            } else if (baseObject instanceof And) {
                Element activity = createGatewayElement(baseObject, "AND");
                activities.appendChild(activity);
            } else if (baseObject instanceof Or) {
                Element activity = createGatewayElement(baseObject, "OR");
                activities.appendChild(activity);
            }
        }

        Element transitions = doc.createElement("Transitions");
        workflowProcess.appendChild(transitions);

        for (Sequence sequence : process.getTransitions().values()) {
            Element transition = doc.createElement("Transition");
            transition.setAttribute("Id", sequence.getId());
            transition.setAttribute("Name", sequence.getName());
            transition.setAttribute("From", sequence.getFromObject().getId());
            transition.setAttribute("To", sequence.getToObject().getId());

            Element extendedAttributes = getBasicSequecneExtendedAttributes(sequence, "CONNECTING_OBJECT");

            transition.appendChild(extendedAttributes);
            transitions.appendChild(transition);

        }


//        Window.alert(doc.toString());
//        Window.alert(doc.toString());

        return doc.toString();
    }


    private Element createBaseActivityElement(BaseObject baseObject) {
        Element activity = doc.createElement("Activity");
        activity.setAttribute("Id", baseObject.getId());
        activity.setAttribute("Name", baseObject.getName());
        return activity;
    }

    private Element getBasicExtendedAttributes(BaseObject baseObject, String type) {
        Element extendedAttributes = doc.createElement("ExtendedAttributes");
        addBasicBaseObjectExtendedAttributes(baseObject, type, extendedAttributes);
        addPositionExtendedAttributes(baseObject, extendedAttributes);
        return extendedAttributes;
    }

    private Element getBasicSequecneExtendedAttributes(Sequence sequence, String type) {
        Element extendedAttributes = doc.createElement("ExtendedAttributes");
        addBasicBaseObjectExtendedAttributes(sequence, type, extendedAttributes);
        return extendedAttributes;
    }



    private void addBasicBaseObjectExtendedAttributes(BaseObject baseObject, String type, Element extendedAttributes) {
        extendedAttributes.appendChild(createExtendedAttr("bpmn.id", baseObject.getId()));
        extendedAttributes.appendChild(createExtendedAttr("bpmn.name", baseObject.getName()));
        extendedAttributes.appendChild(createExtendedAttr("bpmn.elementType", type));
    }

    private void addPositionExtendedAttributes(BaseObject baseObject, Element extendedAttributes) {
        extendedAttributes.appendChild(createExtendedAttr("bpmn.position.x", String.valueOf(baseObject.getX())));
        extendedAttributes.appendChild(createExtendedAttr("bpmn.position.y", String.valueOf(baseObject.getY())));
    }


    private Element createGatewayElement(BaseObject baseObject, String type) {
        Element activity = createBaseActivityElement(baseObject);
        activity.appendChild(doc.createElement("Route"));

        Element transitionRestrictions = createTransitionRestrictions();
        activity.appendChild(transitionRestrictions);
        Element extendedAttributes = getBasicGatewayExtendedAttributes(baseObject, "GATEWAY");
        extendedAttributes.appendChild(createExtendedAttr("bpmn.gateway.type", type));

        activity.appendChild(extendedAttributes);
        return activity;
    }

    private Element getBasicGatewayExtendedAttributes(BaseObject gateway, String type) {
        Element extendedAttributes = doc.createElement("ExtendedAttributes");
        addBasicBaseObjectExtendedAttributes(gateway, type, extendedAttributes);
        addPositionExtendedAttributes(gateway, extendedAttributes);
        return extendedAttributes;
    }

    private Element createTransitionRestrictions() {
        Element transitionRestrictions = doc.createElement("TransitionRestrictions");
        Element transitionRestriction = doc.createElement("TransitionRestriction");
        transitionRestrictions.appendChild(transitionRestriction);

        Element split = doc.createElement("Split");
        transitionRestriction.appendChild(split);
        split.setAttribute("Type", "AND");

        Element transitionRefs = doc.createElement("TransitionRefs");
        split.appendChild(transitionRefs);

        //todo iterar por las outgoing transitions
        Element transitionRef = doc.createElement("TransitionRef");
        transitionRefs.appendChild(transitionRef);
        transitionRef.setAttribute("Id", "Probandoooo");
        return transitionRestrictions;
    }

    private Element createPackageElement(BpmnProcess process, Document doc) {
        Element packageElement = doc.createElement("Package");
        packageElement.setAttribute("Id", process.getId());
        packageElement.setAttribute("Name", process.getName());
        packageElement.setAttribute("xsi:schemaLocation", "http://www.wfmc.org/2002/XPDL1.0 http://wfmc.org/standards/docs/TC-1025_schema_10_xpdl.xsd");
        packageElement.setAttribute("xmlns", "http://www.wfmc.org/2002/XPDL1.0");
        packageElement.setAttribute("xmlns:xpdl", "http://www.wfmc.org/2002/XPDL1.0");
        packageElement.setAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");


        return packageElement;
    }

    private Element createPackageHeaderElement(Document doc) {
        Element packageHeaderElement = doc.createElement("PackageHeader");

        Element xpdlVersion = doc.createElement("XPDLVersion");
        xpdlVersion.appendChild(doc.createTextNode("1.0"));
        packageHeaderElement.appendChild(xpdlVersion);

        Element vendor = doc.createElement("Vendor");
        vendor.appendChild(doc.createTextNode("Polymita, BPMN Designer"));
        packageHeaderElement.appendChild(vendor);

        Element created = doc.createElement("Created");
        created.appendChild(doc.createTextNode("null"));
        packageHeaderElement.appendChild(created);

        Element description = doc.createElement("Description");
        description.appendChild(doc.createTextNode("description"));
        packageHeaderElement.appendChild(description);
        return packageHeaderElement;
    }

    private Element createExtendedAttr(String name, String value) {
        Element extendedAttribute = doc.createElement("ExtendedAttribute");
        extendedAttribute.setAttribute("Name", name);
        extendedAttribute.setAttribute("Value", value);
        return extendedAttribute;
    }
}
