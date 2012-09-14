package com.mySampleApplication.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.mySampleApplication.client.MySampleApplicationService;
import com.mySampleApplication.server.commons.HibernateUtil;
import org.hibernate.SessionFactory;

public class MySampleApplicationServiceImpl extends RemoteServiceServlet implements MySampleApplicationService {
    // Implementation of sample interface method
    public String getMessage(String msg) {
//        final SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
        return "Client said: \"" + msg + "\"<br>Server answered: \"Hi!\"";
    }
}