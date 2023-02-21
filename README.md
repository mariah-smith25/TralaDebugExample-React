# Trala Debug Example

Our internal MVP launch of the Llama Management System was a success.  We got buy-in from the sales team to move forward with our proposed rollout schedule. During their testing they made note of a few bugs and enhancements we'll need to make before our final release to production. 


## Bug Reports/ Requested Enhancements


### Recursive Homepage Loading
The app now recursively queries the full sales force database, completely overloading the network.

---

### Can’t Delete Contacts
The backend engineer forgot to communicate that the backend now implements “soft” deletions. The current API doc lacks this detail.

---

### Degraded Birthday Operations
Our app is also supposed to highlight customers with birthdays in the current month. 
Users are reporting that other customers are randomly being highlighted as well. Some also noticed issues updating birthdays. A recent API change may be to blame. 

Steps to reproduce:
1. Add a new Llama
1. Set their birthday to March 1st 2022
1. Save the new Llama
1. Navigate back to home page.
1. New Llama is highlighted and their birthday shows as last day of February


While demoing the MVP we had to put in a workaround for some mismatched date formatting with the server. We got through the demo but we need to regression test and fix any broken birth day functionality.


---

### Birthday Breakdown Visual Enhancement
Our team wants to drive up Trala satisfaction numbers by sending out birthday gifts. We missed in the spec a feature request to add a visual component that breaks down birthdays by month. This will help with budget forecasting for the birthday gift campaign.

---

### Slow Llama Contact Searching
The searching functionality is case sensitive and only filters by first name. It should filter by email and full name.
In general searching takes entirely too much time on production data (3s). Our required KPI for the next release is <1s. We should probably refactor, we’ve only been testing against staging. 

---
