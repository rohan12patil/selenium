https://lambdatest.github.io/sample-todo-app/
https://formy-project.herokuapp.com/

Docs
https://www.selenium.dev/documentation/webdriver/getting_started/first_script/

https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk/examples/javascript/test/hello/helloSelenium.js

1. npm init
2. Installing selenium webdriver
   - https://www.npmjs.com/package/selenium-webdriver
   - npm i selenium-webdriver
3. Browser drivers : use above link, goto browser, component,

   - Chrome
     open chromedriver, it opens https://googlechromelabs.github.io/chrome-for-testing/#stable
     select stable link as in below, might be different based on current latest browser
     https://storage.googleapis.com/chrome-for-testing-public/135.0.7049.114/mac-x64/chromedriver-mac-x64.zip
     extract & copy to a directory
   - Firefox
     https://github.com/mozilla/geckodriver/releases/
   - Safari  
     https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html#//apple_ref/doc/uid/TP40014305-CH11-DontLinkElementID_28

4. Update path as per OS, below is for MacOS
   - sudo nano /etc/paths
   - add below [change as per your desired path]
   - /Users/rohan/Documents/dev/browser-drivers
   - CTRL X, Y
   - open new terminal window, echo $PATH then verify your added path
