# [Bike Mania](https://voluble-crumble-66a6bc.netlify.app/) – 

a bike resale website (MERN stack Based project)

## Technologies

React, MongoDB, Node, Express, Firebase,Tailwind CSS, Daisy UI, Vercel , JWT, Stripe, Tan stack query.

### Features
*	User can sign up with a buyer/seller account. Firebase Authentication is implemented with email and password based login and login with google pop up. If the user joins with google pop up their role is set as buyer as default. Only buyer account can explore and buy products from different categories product.
*	For database mongoDb is used for storing all the data like users, products, categories and bookings collections.
*	Different Custom Hooks are created to check user roles from the database. If the user is Admin, then they can delete sellers or buyers, he can verify the sellers which will show a blue tick beside their name when they post an item. An admin can make another admin by clicking make admin.
*	Buyer can book an item and pay for their booked items. Payment Method is implemented using Stripe. Sellers can add an item, they can delete their added items. Sellers can also advertise their unsold items which will be shown in the advertisement section of the home page.
