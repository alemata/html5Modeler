package com.mySampleApplication.client;


import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.TextArea;
import com.mySampleApplication.client.bpmn.*;
import com.mySampleApplication.client.listeners.DeleteElementListener;
import com.mySampleApplication.client.listeners.ElementDoubleClickListener;
import com.mySampleApplication.client.listeners.ElementMovedListener;
import com.mySampleApplication.client.listeners.SequenceAddedListener;
import com.mySampleApplication.client.managers.BpmnProcessManager;
import com.mySampleApplication.client.xml.generator.XpdlGenerator;
import com.mySampleApplication.client.xml.loader.XpdlLoader;
import com.smartgwt.client.widgets.layout.HStack;
import com.smartgwt.client.widgets.layout.VStack;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;

/**
 * Entry point classes define <code>onModuleLoad()</code>
 */
public class MySampleApplication implements EntryPoint {

    private TabSet tabPanel;
    private int processIndex = 0;

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {
        //Listen when element is moved
        new ElementMovedListener().addListener();
        //Listen when sequence is added
        new SequenceAddedListener().addListener();
        // Listen double click on elements
        new ElementDoubleClickListener().addListener();

        tabPanel = new TabSet();
        tabPanel.setWidth100();
        tabPanel.setHeight100();
//        tabPanel.addTab(createPrcessListPanel());
        tabPanel.addTab(createProcessTab());
        tabPanel.draw();
    }

    private Tab createPrcessListPanel() {
        Tab tab = new Tab();
        tab.setTitle("Browser");
        HStack browserControlBar = new HStack();

        final Button newProcessButton = new Button("New");

        newProcessButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                createProcessTab();
            }
        });
        browserControlBar.addMember(newProcessButton);
        tab.setPane(browserControlBar);
        return tab;
    }

    private Tab createProcessTab() {
        BpmnProcess process = new BpmnProcess("processId", "Test1");
        BpmnProcessManager.getInstance().addProcess(process);

        Tab tab = new Tab();
        tab.setID("container" + processIndex++);
        tab.setTitle("Process");

        HStack bpmnControlBar = createBpmnControlBar(tab.getID());
        VStack buttonsPanel = createElementsButtonsBar();

        //Despues se agrega el canvas a este elemento
        HTMLPanel canvasPanel = new HTMLPanel("<div></div>");
        canvasPanel.getElement().setId(tab.getID());

        HStack elementsBarProcessPanel = new HStack();
        elementsBarProcessPanel.addMember(buttonsPanel);
        elementsBarProcessPanel.addMember(canvasPanel);

        VStack mainPanel = new VStack();
        mainPanel.setWidth100();
        mainPanel.setHeight100();
        mainPanel.addMember(bpmnControlBar);
        mainPanel.addMember(elementsBarProcessPanel);
        new DeleteElementListener().addListener();

        tab.setPane(mainPanel);
        return tab;
    }

    private VStack createElementsButtonsBar() {
        final Button addStartButton = new Button("Start");
        final Button addTaskButton = new Button("Task");
        final Button addEndButton = new Button("End");
        final Button addOrButton = new Button("Or");
        final Button addAndButton = new Button("And");
        final Button addIntermediateButton = new Button("Intermediate");
        final Button addIntermediateTimerButton = new Button("Int - Timer");
        final Button addIntermediateMessageButton = new Button("Int - MSG");
        final Button addSequenceButton = new Button("Sequence");


        addStartButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                Start start = new Start("Start");
                BpmnProcessManager.getInstance().getCurrentProcess().addElement(start);
            }
        });

        addTaskButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                Task task = new Task("Task1");
                BpmnProcessManager.getInstance().getCurrentProcess().addElement(task);
            }
        });

        addEndButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                End end = new End("End1");
                BpmnProcessManager.getInstance().getCurrentProcess().addElement(end);
            }
        });

        addOrButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                Or or = new Or("Or1");
                BpmnProcessManager.getInstance().getCurrentProcess().addElement(or);
            }
        });

        addAndButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                And and = new And("And1");
                BpmnProcessManager.getInstance().getCurrentProcess().addElement(and);
            }
        });

        addIntermediateButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                Intermediate intermediate = new Intermediate("Intermediate1", Intermediate.TYPE_NONE);
                BpmnProcessManager.getInstance().getCurrentProcess().addElement(intermediate);
            }
        });

        addIntermediateTimerButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                Intermediate intermediate = new Intermediate("Intermediate_Timer1", Intermediate.TYPE_TIMER);
                BpmnProcessManager.getInstance().getCurrentProcess().addElement(intermediate);
            }
        });

        addIntermediateMessageButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                Intermediate intermediate = new Intermediate("Intermediate_MSG1", Intermediate.TYPE_MESSAGE);
                BpmnProcessManager.getInstance().getCurrentProcess().addElement(intermediate);
            }
        });

        addSequenceButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                //Se crea una dummy sequence, luego en el listener de sequence agregada se crea la final y
                // se agrega al proceso.
                Sequence dummySequence = new Sequence("Sequence");
                initAddSequenceAction(dummySequence.getId(), dummySequence.getName());
            }
        });

        VStack buttonsPanel = new VStack();
        buttonsPanel.addMember(addStartButton);
        buttonsPanel.addMember(addTaskButton);
        buttonsPanel.addMember(addEndButton);
        buttonsPanel.addMember(addOrButton);
        buttonsPanel.addMember(addAndButton);
        buttonsPanel.addMember(addIntermediateButton);
        buttonsPanel.addMember(addIntermediateTimerButton);
        buttonsPanel.addMember(addIntermediateMessageButton);

        buttonsPanel.addMember(addSequenceButton);
        return buttonsPanel;
    }

    private HStack createBpmnControlBar(final String tabId) {
        final Button saveButton = new Button("Save");
        final Button clearButton = new Button("Clear");
        final Button openButton = new Button("Open");
        final Button addCanvasButton = new Button("Draw");
        final TextArea processXpdlText = new TextArea();


        saveButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                String processXpdl = new XpdlGenerator().generate(BpmnProcessManager.getInstance().getCurrentProcess());
                processXpdlText.setValue(processXpdl);
//                Window.alert(processXpdl);
//                MySampleApplicationService.App.getInstance().getMessage("Contestaaa!", new MyAsyncCallback(label));
            }
        });

        openButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
//                clearProcess();
                BpmnProcess bpmnProcess = new XpdlLoader().loadProcess(processXpdlText.getValue());
            }
        });

        clearButton.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                //Only clears stage
                clearProcess();
            }
        });

        addCanvasButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                addCanvas(tabId);
                processIndex++;
                addCanvasButton.setEnabled(false);
            }
        });

        //Add elements button bar
        HStack bpmnControlBar = new HStack();
        bpmnControlBar.addMember(saveButton);
        bpmnControlBar.addMember(clearButton);
        bpmnControlBar.addMember(openButton);
        bpmnControlBar.addMember(processXpdlText);
        bpmnControlBar.addMember(addCanvasButton);
        return bpmnControlBar;
    }


    native void clearProcess() /*-{
        $wnd.clearProcess();
    }-*/;

    native void initAddSequenceAction(String id, String name) /*-{
        $wnd.initAddSequenceAction(id, name);
    }-*/;

    native void addCanvas(String id) /*-{
        $wnd.addCanvas(id);
    }-*/;


}
