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

- **Deployment:** rendor

*** 

## The Backend contains API endpoints and Search Queries

1.User Registration 

>http://localhost:5000/api/auth/register-user

2.User Login

>http://localhost:5000/api/auth/login-user

3.Update User

> http://localhost:5000/api/user/update/${currentuser.rest._id}

4.Delete User

>http://localhost:5000/api/user/delete/${currentuser.rest._id}

5.Create Listings

>http://localhost:5000/api/listing/create

6.Delted User Listings

>http://localhost:5000/api/listing/delete/${listingId}

7.update Listing

>http://localhost:5000/api/listing/update/${params.listingId}

8.Get User Listings

>http://localhost:5000/api/user/listings/${currentuser.rest._id}

9.Get User

>http://localhost:5000/api/listing/get/${params.listingId}

10.Search Query

>http://localhost:5000/api/listing/get?${searchQuery}

***
## Deployment

- Here to view the Backend Deployed URL:

