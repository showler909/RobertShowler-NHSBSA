# RobertShowler-NHSBSA
Automation Test Analyst Exercise

To run the following Cucumber exercise. Please follow the instructions below:

1) Open a cmd.exe window and go to the directory containing the Selenium Server (selenium-remote-control-1.0.1\selenium-server-1.0.1)
2) Run the command below:

java -jar selenium-server.jar -htmlSuite "*chrome" "http://10.8.100.106" "C:\mytestsuite\mytestsuite.html" "C:\mytestsuite\results.html"
(You will need to change the "http://10.8.100.106" argument to your own server)

For firefox comaptibility, simply replace "*chrome" with "*firefox" for the command above_
