When navigating from Home to a Project page and vice versa, all 4 hooks run, but when navigating between the Project pages the Mount hooks don't run.

So I'm looking for hooks that run every time a page is navigated to when 1 component could be on every page. beforeNavigate & afterNavigate seemed perfect for that until I realised they also run when navigating to the page you're already on, which in my case kills the functionality of the page.
