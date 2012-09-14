function LayersManager(stage) {

    LayersManager.TASKS_LAYER = "tasksLayer";
    LayersManager.CONNECTORS_LAYER = "connectorsLayer";
    LayersManager.STAGE_LAYER = "stageLayer";
    LayersManager.DUMMY_LAYER = "dummyLayer";


    this.stage = stage;

    // Crea layers
    this.stageLayer = new Kinetic.Layer();
    this.messagesLayer = new Kinetic.Layer();
    this.tasksLayer = new Kinetic.Layer();
    this.connectorsLayer = new Kinetic.Layer();
    this.dummyLayer = new Kinetic.Layer();

    // Agrega layers al stage
    this.stage.add(this.stageLayer);
    this.stage.add(this.connectorsLayer);
    this.stage.add(this.dummyLayer);
    this.stage.add(this.tasksLayer);
    this.stage.add(this.messagesLayer);

    createInvisibleStage(this.stageLayer);

    this.addIntoTasksLayer = function(kineticElement) {
       this.tasksLayer.add(kineticElement);
        this.tasksLayer.draw();
    };

    this.addIntoConnectorsLayer = function(kineticElement) {
        this.connectorsLayer.add(kineticElement);
        this.connectorsLayer.draw();
    };

    this.addIntoDummyLayer = function(kineticElement){
        this.dummyLayer.add(kineticElement);
        this.dummyLayer.draw();
    };

    this.removeFromTasksLayer = function(kineticElement){
        this.tasksLayer.remove(kineticElement);
        this.tasksLayer.draw();
    };

    this.removeFromConnectorsLayer = function(kineticElement){
        this.connectorsLayer.remove(kineticElement);
        this.connectorsLayer.draw();
    };

    this.clearDummyLayer = function(){
        this.dummyLayer.removeChildren();
        this.dummyLayer.clear();
        this.dummyLayer.draw();
    };

    this.clear = function(){
        this.tasksLayer.clear();
        this.tasksLayer = new Kinetic.Layer();
        this.connectorsLayer.clear();
        this.connectorsLayer = new Kinetic.Layer();
        this.stage.clear();
        this.stage.add(this.connectorsLayer);
        this.stage.add(this.tasksLayer);
    };

    this.addEventListener = function(eventName, layerName, listenerFunction){
        var layer = null;
        if(layerName == LayersManager.TASKS_LAYER){
            layer = this.tasksLayer;
        }else if(layerName == LayersManager.CONNECTORS_LAYER){
             layer = this.connectorsLayer;
        }else if(layerName == LayersManager.STAGE_LAYER){
             layer = this.stageLayer;
        }
        if(layer != null){
            layer.on(eventName, listenerFunction);
        }
    };

    this.removeEventListener = function(eventName, layerName){
        var layer = null;
        if(layerName == LayersManager.TASKS_LAYER){
            layer = this.tasksLayer;
        }else if(layerName == LayersManager.CONNECTORS_LAYER){
             layer = this.connectorsLayer;
        }else if(layerName == LayersManager.STAGE_LAYER){
             layer = this.stageLayer;
        }
        if(layer != null){
            layer.off(eventName);
        }
    };

    this.forceDrawLayer = function(layerName){
        var layer = null;
        if(layerName == LayersManager.TASKS_LAYER){
            layer = this.tasksLayer;
        }else if(layerName == LayersManager.CONNECTORS_LAYER){
             layer = this.connectorsLayer;
        }else if(layerName == LayersManager.STAGE_LAYER){
             layer = this.stageLayer;
        }else if(layerName == LayersManager.DUMMY_LAYER){
             layer = this.dummyLayer;
        }
        if(layer != null){
            layer.draw();
        }
    };

    this.writeMessage = function(message) {
        var context = this.messagesLayer.getContext();
        this.messagesLayer.clear();
        context.font = "12pt Calibri";
        context.fillStyle = "black";
        context.fillText(message, 10, stage.getHeight() - 10);
    }
}

function createInvisibleStage(stageLayer) {
    var box = new Kinetic.Rect({
                x:0,
                y:0,
                width: STAGEWIDTH,
                height: STAGEHEIGHT,
                fill:"white",
                stroke:"white"
            });
    stageLayer.add(box);
}