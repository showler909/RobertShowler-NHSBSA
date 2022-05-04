package helpers;

import Utils.env.EnvConfig;

public class URLs extends PropertiesReader
{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private URLs() {
        super(EnvConfig.getTestConfigPath());
    }

    static URLs genericURLs = new URLs();

    public static final String INTERNAL_HOMEPAGE_LINK_LOCALHOST = genericURLs.getProperty("env.baseurl");




}
