# CAPSTONE BACKEND

## Introduction

- The Marketplace Rental Web Application is a platform where users can list, discover, and book rental properties. The application aims to facilitate seamless interactions between property owners and potential renters, providing a user-friendly interface and robust backend to handle property listings, booking, and payments.

***

## Features

- **User Authentication:** Secure sign-up, login, and authentication processes.
  
- **Property Listings:** Users can list their properties with detailed descriptions, photos, and pricing.

- **Search and Filter:** Advanced search and filtering options for renters to find properties that meet their criteria.
  
- **Notifications:** Email and in-app notifications for booking confirmations, reminders, and updates.

***

## Tech Stack

- **Frontend:** React, Redux, HTML, CSS, JavaScript
  
- **Backend:** Node.js, Express

- **Database:** MongoDB

- **Authentication:** JWT (JSON Web Tokens)

- **Deployment:** render

*** 

## The Backend contains API endpoints and Search Queries

1.User Registration 

>https://backendcapstone10.onrender.com/api/auth/register-user

2.User Login

>https://backendcapstone10.onrender.com/api/auth/login-user

3.Update User

>https://backendcapstone10.onrender.com/api/user/update/${currentuser.rest._id}

4.Delete User

>https://backendcapstone10.onrender.com/api/user/delete/${currentuser.rest._id}

5.Create Listings

>https://backendcapstone10.onrender.com/api/listing/create

6.Delted User Listings

>https://backendcapstone10.onrender.com/api/listing/delete/${listingId}

7.update Listing

>https://backendcapstone10.onrender.com/api/listing/update/${params.listingId}

8.Get User Listings

>https://backendcapstone10.onrender.com/api/user/listings/${currentuser.rest._id}

9.Get User

>https://backendcapstone10.onrender.com/api/listing/get/${params.listingId}

10.Search Query

>https://backendcapstone10.onrender.com/api/listing/get?${searchQuery}

***
## Deployment

- Here to view the Backend Deployed URL:https://backendcapstone10.onrender.com

