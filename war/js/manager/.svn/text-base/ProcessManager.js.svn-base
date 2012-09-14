
function ProcessManager(layersManager){

     var instance = this;
    this.layersManager = layersManager;

    this.bpmnIDtoBPMNModelElementMap = new Object();
    this.bpmnIDtoGraphicElement = new Object();
    this.connectors = new Object();

    this.addElement = function(bpmnElement){
        instance.bpmnIDtoBPMNModelElementMap[bpmnElement.getId()] = bpmnElement;
        instance.bpmnIDtoGraphicElement[bpmnElement.getId()] = bpmnElement.getGraphicElement();

        // Add the view
        instance.layersManager.addIntoTasksLayer(bpmnElement.getGraphicElement());
    };

    this.removeElement = function(id){
        // Removes on process Manager
        instance.bpmnIDtoBPMNModelElementMap[id] = null;
        instance.bpmnIDtoGraphicElement[id] = null;

        // Removes on view(stage/layer)
        var bpmnElement = instance.getBPMNElementForId(id);
        layersManager.removeFromTasksLayer(bpmnElement.getGraphicElement());
    };


    this.addConnector = function(connector){
        // Add into Process manager
        instance.connectors[connector.getId()] = connector;
         // Add the view
        instance.layersManager.addIntoConnectorsLayer(connector.getGraphicElement());
    };

    this.removeConnector = function(id){
        // Remove from process manager
        instance.connectors[getId()] = null;

        // Removes from view
        var connector = instance.connectors[id];
        instance.layersManager.removeFromConnectorsLayer();
    };

    this.clearProcess = function(){
        // todo: limpiar todo el mapeo
        instance.layersManager.clear();
    };

    this.getBPMNElementForId = function (id){
        return instance.bpmnIDtoBPMNModelElementMap[id];
    };

    this.getBPMNElementForGraphicElement = function (graphicElement){

        var id;
        for (var key in instance.bpmnIDtoGraphicElement) {
            if( instance.bpmnIDtoGraphicElement[key] == graphicElement ){
               id = key;
            }
        }

        return instance.getBPMNElementForId(id);

    };



}