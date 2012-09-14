package com.mySampleApplication.server.commons;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

/**
 * This class will return all SIJU directories.
 */
public class SijuDirectoriesHelper {

    private static transient org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(SijuDirectoriesHelper.class.getName());
    private static File confDirectory;
    private static File baseDirectory;

    /**
     * The conf directory. This directory contains all configuration files.
     *
     * @return The configuration directory
     */
    public static File getConfDirectory() {
        if (SijuDirectoriesHelper.confDirectory == null) {
            SijuDirectoriesHelper.confDirectory = new File(getBaseDirectory(), "conf");
        }
        return SijuDirectoriesHelper.confDirectory;
    }

    /**
     * The base directory where the web application is installed
     *
     * @return The web directory.
     */
    public static File getBaseDirectory() {
        return SijuDirectoriesHelper.baseDirectory;
    }

    public static void setBaseDirectory(File baseDirectory) {
        SijuDirectoriesHelper.baseDirectory = baseDirectory;
    }


    public static File getConfigurationFile(String fileName) {
        return new File(getConfDirectory(), fileName);
    }

    /**
     * Loads a configuration properties file.
     *
     * @param propertiesFileName The properties file name
     * @return The properties file
     */
    public static Properties loadConfigurationProperties(String propertiesFileName) {
        Properties properties = new Properties();
        try {
            File file = new File(getConfDirectory(), propertiesFileName);
            properties.load(new FileReader(file));
        } catch (IOException e) {
            log.error(e);
        }
        return properties;
    }

    public static String readConfigurationFile(String fileName) {
        File fileToRead = new File(getConfDirectory(), fileName);
        try {
            return FileUtils.readFileToString(fileToRead, "UTF-8");
        } catch (IOException e) {
            log.error(e);
        }
        return null;
    }

    public static String readBaseFile(String fileName) {
        File fileToRead = new File(getBaseDirectory(), fileName);
        try {
            return FileUtils.readFileToString(fileToRead, "UTF-8");
        } catch (IOException e) {
            log.error(e);
        }
        return null;
    }
}
