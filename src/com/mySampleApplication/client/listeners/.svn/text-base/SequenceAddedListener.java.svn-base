package com.mySampleApplication.client.listeners;


import com.mySampleApplication.client.bpmn.BpmnProcess;
import com.mySampleApplication.client.bpmn.Sequence;
import com.mySampleApplication.client.managers.BpmnProcessManager;

public class SequenceAddedListener implements IJSEventListener {


    private static void updateModel(String id, String name, String fromId, String toId) {
        BpmnProcess currentProcess = BpmnProcessManager.getInstance().getCurrentProcess();
        Sequence sequence = new Sequence(name);
        sequence.setId(id);
        sequence.setFromObject(currentProcess.getElement(fromId));
        sequence.setToObject(currentProcess.getElement(toId));
        currentProcess.addSequence(sequence);
    }


    public native void addListener()/*-{
        $wnd.addEventListener('sequenceAdded',
                function (evt) {

                    console.log("SEQID: " + evt.sequenceId + "   name:" + evt.name + "   fromId:" + evt.fromId + "    toId:" + evt.toId);

                    this.@com.mySampleApplication.client.listeners.SequenceAddedListener::updateModel(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)(evt.sequenceId, evt.name, evt.fromId, evt.toId);
                }, false);

    }-*/;
}
