# CAPSTONE BACKEND

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
