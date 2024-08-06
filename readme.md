# CAPSTONE BACKEND

## The Backend contains API endpoints and Search Queries

1.User Registration 

>http://localhost:5000/api/auth/register-user

2.User Login

>http://localhost:5000/api/auth/login-user

3.Google Login

>http://localhost:5000/api/auth/google

4.Update User

> http://localhost:5000/api/user/update/${currentuser.rest._id}

5.Delete User

>http://localhost:5000/api/user/delete/${currentuser.rest._id}

6.Create Listings

>http://localhost:5000/api/listing/create

7.Delted User Listings

>http://localhost:5000/api/listing/delete/${listingId}

8.update Listing

>http://localhost:5000/api/listing/update/${params.listingId}

9.Get User Listings

>http://localhost:5000/api/user/listings/${currentuser.rest._id}

10.Get User

>http://localhost:5000/api/listing/get/${params.listingId}

11.Search Query

>http://localhost:5000/api/listing/get?${searchQuery}
