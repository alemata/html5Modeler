package com.mySampleApplication.server.commons;
//
//import org.hibernate.SessionFactory;
//import org.hibernate.cfg.Configuration;
//
//import java.io.File;
//
//
//public class HibernateUtil {
//
//    private static final SessionFactory sessionFactory;
//
//    static {
//        try {
//            // Create the SessionFactory from hibernate.cfg.xml
//            String fileName = System.getProperty("hibernate.conf.file", "hibernate.cfg.xml");
//            File file = new File(SijuDirectoriesHelper.getConfDirectory(), fileName);
//            sessionFactory = new Configuration().configure(file).buildSessionFactory();
//        } catch (Throwable ex) {
//            // Make sure you log the exception, as it might be swallowed
//            System.err.println("Initial SessionFactory creation failed." + ex);
//            ex.printStackTrace();
//            throw new ExceptionInInitializerError(ex);
//        }
//    }
//
//    public static SessionFactory getSessionFactory() {
//        return sessionFactory;
//    }
//
//}

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {

    private static final SessionFactory sessionFactory = buildSessionFactory();

    private static SessionFactory buildSessionFactory() {
        try {
            // load from different directory
            SessionFactory sessionFactory = new Configuration().configure("/conf/hibernate.cfg.xml").buildSessionFactory();

            return sessionFactory;

        } catch (Throwable ex) {
            // Make sure you log the exception, as it might be swallowed
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public static void shutdown() {
        // Close caches and connection pools
        getSessionFactory().close();
    }

}

