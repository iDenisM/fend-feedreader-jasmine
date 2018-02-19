/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* Test suite named RSS feeds
    *  defines the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', () => {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('feed has url', () => {
           for (const feed of allFeeds) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }
         });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('feed has name', () => {
           for (const feed of allFeeds) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           }
         });
    });


    /*  New test suite named "The menu"
    * checks if the menu is visible of hidden
    */
    describe('The menu', () => {
      let body = $('body');
      /* Test that ensures the menu element is
      * hidden by default.
      */
      it('menu element is hidden by default', () => {
        expect(body.hasClass('menu-hidden')).toBe(true);
      });

      /* Test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * has two expectations: the menu display when
      * clicked and it hides when clicked again.
      */
      it('menu changes visibility when the menu icon is clicked', () => {
        let button = $('.menu-icon-link');
        // Click the button first time
        button.click();
        expect(body.hasClass('menu-hidden')).toBe(false);
        // Click the button second time
        button.click();
        expect(body.hasClass('menu-hidden')).toBe(true);
      });
    });

    /* New test suite named "Initial Entries"
    * enshures that we are loading the entries on the page
    */
    describe('Initial Entries', () => {
      beforeEach(done => loadFeed(0, done));
      /* Test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      */
      it ('there is at least a single entry element present', done => {
        let container = $('.feed .entry');
        expect(container.length).toBeGreaterThan(0);
        done();
      });
    });

    /* New test suite named "New Feed Selection"
    * enshures that when a new feed is loaded the content
    * on the page it changes
    */
    describe('New Feed Selection', () => {
      let oldFeed,
          newFeed;

      // Do this before each of tests
      beforeEach(done => {
        /* Load the first feed and set the html content to
        * the oldFeed variable
        */
        loadFeed(0, () => {
          oldFeed = $('.feed').html();
          done();
        });
      });
      /* Test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      */
      it('content changes when new feed is loaded', done => {
        /* Create a random id different from the 0
        * that will be used in loadFeed to load a different feed
        */
        let randomId = Math.floor(Math.random() * (allFeeds.length - 1)) + 1;
        // load a different feed
        loadFeed(randomId, () => {
          newFeed = $('.feed').html();
          // Check if the old and new feed are equal
          expect(newFeed).not.toEqual(oldFeed);
          done();
        });
      });
    });
}());
