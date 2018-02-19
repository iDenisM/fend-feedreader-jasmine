# Testing RSS feeds
This is a project that test the good work of a RSS feed web page. The test are made with Jasmine framework.
To see the results of the test you have to go at the bottom of the page.

# Installation
No installation needed.

#### Tests not working
If you don't see the result at the bottom of the page you have to scroll down to the end of the page and try to find the Jasmine framework field and red the results. In case you don't see any attached Jasmine content at the bottom of the web page check that you load the script. To do this go to index.html and add in the head tag at the end the next fields (in case that they are already there just check that there is no semantic error):
```
<link rel="stylesheet" href="jasmine/lib/jasmine-2.1.2/jasmine.css">
<script src="jasmine/lib/jasmine-2.1.2/jasmine.js"></script>
<script src="jasmine/lib/jasmine-2.1.2/jasmine-html.js"></script>
<script src="jasmine/lib/jasmine-2.1.2/boot.js"></script>
```
and in the body tag also at the end add the next script:
`
<script src="jasmine/spec/feedreader.js"></script>
`
Also chech that the file feedreader.js is present in the jasmine/spec directory.

#### Stop viewing the test results
It is enought to comment the script line:
`
<script src="jasmine/spec/feedreader.js"></script>
`
You will find this line of code at the very end of the body tag.

# Usage
Run the index.html file from the main directory of the project. To see the results of the tests take a look at the very bottom of the page. For more in depth information about what each test does read the section about Testing.

# Testing
This project contains the next test suites:
- RSS Feeds
- The menu
- Initial Entries
- New Feed Selection

##### RSS Feeds
Defines the allFeeds variable in our application. First it tests to make sure that the allFeeds variable has been defined and that it is not empty. It expects to define at least one feed and that it has an url. Also the url must not be empty.
##### The menu
Checks if the menu is visible of hidden. First it checks if the menu is hidden by default. Then it tests to ensure that the menu changes visibility when the menu icon is clicked. This test has two expectations: the menu display when clicked and it hides when clicked again.
##### Initial Entries
Enshures that we are loading the entries on the page. When the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
##### New Feed Selection
Enshures that when a new feed is loaded the content on the page it changes.
