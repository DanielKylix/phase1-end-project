### Below are the scripts to run the program

### `yarn start` || `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### The app is called a Garbage Hauler System

The app basically connects a client and a vendor, promoting conveniency and reducing garbage waste in our streets.

1. A client, the person who wants garbage to be disposed
2. A vendor, who collects the waste
3. An admin

### Features to be implemented

1. Login/signup for both vendor and client.
2. Garbage collection requests by clients (post request)
3. Request acceptance by vendors.
4. payments and acceptance by both vendors and clients.
5. CRUD operations by admin.

### Customer journey

1. On the landing page, get started and a login/signup screen will be shown.
2. Create an account either as a vendor or customer.
3. If a client, a list of available vendors will be shown in the screen.
4. Make a booking for garbage collection.
5. A vendor may accept the request or decline it.
6. Upon acceptance the client will be prompted to make a payment.
7. The garbage collector will receive the payment upon collection.

### Technologies

1. The app has a nodeJs backend hosted in google cloud app engine, hence only the api is visible in the code (as per content).
2. The frontend is a reactJS frontend, mainly using functional components, and modern react such as lazy loading to help in optimization of the application.
