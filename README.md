# Trala Debug Example

A bunch of branches are waiting to be committed to this project, but each has had a serious bug found in it. Please select a bug from the list of bug reports below, switch to its indicated branch, and fix it (with a thought to preventing regressions via tests).


## Bug Reports

### Recursive Homepage Loading
Branch: recursive-loading-homepage
The app now recursively queries the full sales force database, making it impossible to load the homepage anymore.

---

### Can’t Delete Contacts
Branch: delete-contacts-broken
The backend engineer forgot to communicate that the backend now implements “soft” deletions. The current API doc fails to reflect this.

---

### Broken Birthday Editing
Branch: put-birthday-broken
A recent API update no longer allows us to add or edit customer birthdays. We also need to prevent users from entering future birthdays.

---

### Slow Address Searching
Branch: slow-address-searching
The searching functionality takes entirely too much time on production data (3s). Our required KPI for release is <1s. We should probably refactor if we have time. We’ve only been testing against staging.

---

### Inconsistent Customer Highlighting
Branch: inconsistent-birthday-highlighting
Our app is supposed to highlight customers with birthday’s within the next month. Users are reporting that other customers are randomly being highlighted as well.
The developers swear they tested for this.

---

### Edits not Reset on Cancel
Branch: edits-not-reset-on-cancel
Our testers reported the following regression bug:
Tap on a name to edit it.
Make a change to any contact detail.
Tap “Cancel” to cancel — do not tap “Save”
Note that the canceled changes have been synced to the backend and appear on the homepage?
We thought we tested this. Consider looking through the commit history to figure out what changes we made recently. 

---

### Poor Scrolling Performance
Branch: poor-scroll-performance
Testers are complaining of stuttering and poor performance when scrolling through the address list using production data. What can we do to improve our scroll performance?

---

### Error page missing error messages
Branch: missing-error-messages
The MVP of our app only has a basic error icon. We were supposed to add dynamic error messages to the error page. 
What error messaging improvements would you give the backend team?



