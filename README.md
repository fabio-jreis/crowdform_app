# crowdform_app

## Login
On the Login page, the field validations are performed and the user is directed to the Home screen. When clicking on the "Sign up" link, the user is redirected to the Sign up screen.

![alt Login Screen](https://i.ibb.co/gjXmYV6/Login.png)

## Sign up
On the "Sign up" page, field validations are performed, and upon clicking the "create account" button, the user is redirected to the Login page. Clicking on "Log in here" also redirects to the Login page. For this project, storage of registration values has not been implemented.

![alt Sign up](https://i.ibb.co/x7gcbm7/Create-Account.png)

## Home
On the "Home" page, it is the main point of the APP.

In the "header" section where the "Account value" and "Portfolio value" are located, a file named "UserReducer.js" has been created using Redux. This file stores the values and makes them available in this section of the page.

For the list of "Funds", a file named "FundsReducer.js" has been created using Redux. This file stores the values and makes them available in this section of the page. When clicking on a fund, it redirects to the details page, passing only the index. On the details page, the FundsReducer is accessed to retrieve the correct data.

<a href="https://ibb.co/dsT63sM"><img src="https://i.ibb.co/nqGfVqm/Home.png" alt="Home" border="0"></a>
<a href="https://ibb.co/ctPPMrp"><img src="https://i.ibb.co/hHkkhmn/Funds-Details.png" alt="Funds-Details" border="0"></a>