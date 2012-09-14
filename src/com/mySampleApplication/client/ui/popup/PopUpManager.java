package com.mySampleApplication.client.ui.popup;

import com.mySampleApplication.client.ui.forms.DefaultPropertiesForm;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.events.CloseClickEvent;
import com.smartgwt.client.widgets.events.CloseClickHandler;
import com.smartgwt.client.widgets.layout.HStack;


public class PopUpManager {

    private static PopUpManager instance = null;

    private PopUpManager() {
    }

    public static PopUpManager getInstance() {
        if (instance == null) {
            instance = new PopUpManager();
        }
        return instance;
    }
    /* ****************************************************** */

    public void showPropertiesPopUp(final DefaultPropertiesForm form) {
        final Window winModal = new Window();


        winModal.setWidth(330);
        winModal.setHeight(150);
        winModal.setTitle("Modal Window");
        winModal.setShowMinimizeButton(false);
        winModal.setIsModal(true);
        winModal.setShowModalMask(true);
        winModal.centerInPage();
        winModal.addCloseClickHandler(new CloseClickHandler() {
            public void onCloseClick(CloseClickEvent event) {
                winModal.destroy();
            }
        });

        HStack formsButtons = getCloseButtonForPropertyForm(form, winModal);

        form.addMember(formsButtons);
        winModal.addItem(form);
        winModal.show();
    }

    private HStack getCloseButtonForPropertyForm(final DefaultPropertiesForm form, final Window popupToClose) {
        IButton buttonShowWindow = new IButton("Ok");
        buttonShowWindow.setWidth(30);
        buttonShowWindow.setShowRollOver(true);
        buttonShowWindow.setShowDown(true);
        buttonShowWindow.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {
            public void onClick(com.smartgwt.client.widgets.events.ClickEvent clickEvent) {
                popupToClose.destroy();
                form.save();
            }
        });

        IButton cancelButtonWindow = new IButton("Cancel");
        cancelButtonWindow.setWidth(50);
        cancelButtonWindow.setShowRollOver(true);
        cancelButtonWindow.setShowDown(true);
        cancelButtonWindow.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {
            public void onClick(com.smartgwt.client.widgets.events.ClickEvent clickEvent) {
                popupToClose.destroy();
            }
        });
        HStack buttonsHolder = new HStack();
        buttonsHolder.setAlign(Alignment.CENTER);
        buttonsHolder.setHeight(20);
        buttonsHolder.addMember(buttonShowWindow);
        buttonsHolder.setMembersMargin(2);
        buttonsHolder.addMember(cancelButtonWindow);
        return buttonsHolder;
    }

}
