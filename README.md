# wheelee

Wheelee currently has the fundamental functionality of a CRUD application.  If you'd like to test and poke around in the application feel free to fork the repo.

![](wheelee-demo.gif)

1. You're going to want some kind of data to work with.  You can simply create a JSON file for testing.  You're welcome to use this:

```
{
  "users": [
    {
      "id": 1,
      "email": "driver1@email.com",
      "password": "driver1",
      "name": "Kelly",
      "imageURL": "https://randomuser.me/api/portraits/women/90.jpg",
      "phoneNumber": "555-123-4567",
      "bio": "Grateful everyday for the opportunity to make someone smile!",
      "isMechanic": false,
      "isManager": false,
      "isActive": false
    },
    {
      "id": 2,
      "email": "mechanic1@email.com",
      "password": "mechanic1",
      "name": "Kyle",
      "imageURL": "https://randomuser.me/api/portraits/men/3.jpg",
      "phoneNumber": "555-987-6543",
      "bio": "Hey there!  I have 2 cats and a dog.  I absolutely love animals :)",
      "isMechanic": true,
      "isManager": false,
      "isActive": false
    },
    {
      "id": 3,
      "email": "manager@email.com",
      "password": "manager",
      "name": "Brittany",
      "imageURL": "https://randomuser.me/api/portraits/women/9.jpg",
      "phoneNumber": "555-867-5300",
      "bio": "Hey :) I'm all about teamwork and communication. Ask me anything!",
      "isMechanic": true,
      "isManager": true,
      "isActive": false
    },
    {
      "id": 4,
      "email": "driver2@email.com",
      "password": "driver2",
      "name": "Luke",
      "imageURL": "https://randomuser.me/api/portraits/men/67.jpg",
      "phoneNumber": "555-545-4545",
      "bio": "I ry to live in the present at all times.  How about you?",
      "isMechanic": false,
      "isManager": false,
      "isActive": false
    },
    {
      "id": 5,
      "email": "driver3@email.com",
      "password": "driver3",
      "name": "Devon",
      "imageURL": "https://randomuser.me/api/portraits/men/70.jpg",
      "phoneNumber": "555-555-5555",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "isMechanic": false,
      "isManager": false,
      "isActive": false
    },
    {
      "id": 6,
      "email": "driver4@email.com",
      "password": "driver4",
      "name": "Joseph",
      "imageURL": "https://randomuser.me/api/portraits/men/61.jpg",
      "phoneNumber": "555-777-9999",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "isMechanic": false,
      "isManager": false,
      "isActive": false
    },
    {
      "id": 7,
      "email": "mechanic2@email.com",
      "password": "mechanic2",
      "name": "Alex",
      "imageURL": "https://randomuser.me/api/portraits/men/85.jpg",
      "phoneNumber": "555-555-5555",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "isMechanic": true,
      "isManager": false,
      "isActive": false
    },
    {
      "id": 8,
      "email": "driver5@email.com",
      "password": "driver5",
      "name": "Suri",
      "imageURL": "https://randomuser.me/api/portraits/women/26.jpg",
      "phoneNumber": "555-555-5555",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "isMechanic": false,
      "isManager": false,
      "isActive": false
    },
    {
      "id": 9,
      "email": "driver6@email.com",
      "password": "driver6",
      "name": "Collin",
      "imageURL": "https://randomuser.me/api/portraits/men/37.jpg",
      "phoneNumber": "555-555-5555",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "isMechanic": true,
      "isManager": false,
      "isActive": false
    }
  ],
  "pedicabs": [
    {
      "id": 1,
      "cabNumber": 1,
      "isAvailable": true
    },
    {
      "id": 2,
      "cabNumber": 2,
      "isAvailable": true
    },
    {
      "id": 3,
      "cabNumber": 3,
      "isAvailable": true
    },
    {
      "id": 4,
      "cabNumber": 4,
      "isAvailable": false
    },
    {
      "id": 5,
      "cabNumber": 5,
      "isAvailable": true
    },
    {
      "id": 6,
      "cabNumber": 6,
      "isAvailable": true
    },
    {
      "id": 7,
      "cabNumber": 7,
      "isAvailable": true
    },
    {
      "id": 8,
      "cabNumber": 8,
      "isAvailable": true
    },
    {
      "id": 9,
      "cabNumber": 9,
      "isAvailable": false
    },
    {
      "id": 10,
      "cabNumber": 10,
      "isAvailable": true
    },
    {
      "id": 11,
      "cabNumber": 11,
      "isAvailable": true
    },
    {
      "id": 12,
      "cabNumber": 12,
      "isAvailable": true
    }
  ],
  "driverShifts": [
    {
      "userId": 2,
      "pedicabId": 3,
      "amShift": false,
      "pmShift": true,
      "shiftDay": "Thu Oct 20",
      "id": 61
    }
  ],
  "tips": [
    {
      "id": 1,
      "userId": 1,
      "text": "If I'm starting a shift and I'm not in the best mood I'll offer my first ride for free.  It's really easy to get a ride that way, and hearing a yes right off the bat really turns my mood around and gets me in the right headspace for interacting with people.  You'd be suprised what a difference it can make!"
    },
    {
      "id": 2,
      "userId": 4,
      "text": "I started to get frustrated with people asking about free rides.  At first I thought 'haha, very silly' but then it got annoying.  I'm freaking working here!  But at some point I just decided to say yes.  And guess what?  Turns out 90% of the time they'll give you money anyway.  So if someone asks for a free ride, just consider doing it.  You really have nothing to lose."
    },
    {
      "id": 3,
      "userId": 6,
      "text": "Never assume who might want a ride and who doesn't.  There's been lots of times when I'll encounter a group of 6 people and assume they're all together.  Sometimes they are, but sometimes they're not and two of them will hop in my cab.  Or maybe they are together but two of them are simply over walking and happy to take a ride.  Even if you think it's obvious they'll say no for whatever reason, ask them anyway.  The more 'no' you get the more 'yes' you get too.  It's all about the law of averages.  Ask everyone!"
    }
  ],
  "repairRequests": [
    {
      "userId": 2,
      "pedicabId": 4,
      "mechanicId": null,
      "description": "Front breaks need tightened.",
      "repairTypeId": 7,
      "isComplete": false,
      "dateSubmitted": 1666298604485,
      "id": 41
    }
  ],
  "repairTypes": [
    {
      "id": 1,
      "type": "No Issues"
    },
    {
      "id": 2,
      "type": "Battery/Electrical"
    },
    {
      "id": 3,
      "type": "Wheel/Tire"
    },
    {
      "id": 4,
      "type": "Frame/Fiberglass"
    },
    {
      "id": 5,
      "type": "Chain/Shifting/Gears"
    },
    {
      "id": 6,
      "type": "Handlebars/Headset"
    },
    {
      "id": 7,
      "type": "Brakes"
    },
    {
      "id": 8,
      "type": "Bench Seat/Upholstry"
    },
    {
      "id": 9,
      "type": "Other"
    }
  ]
}
```

2.  In git bash/terminal/etc. navigate to the folder with your JSON file and run this: 
```
json-server (filename.json) -p 8088 -w
```

3. Then, in another window navigate to the src folder of the repo and run:
```
npm start
```

It should open your default browser with the wheelee log-in page.  All testing emails and passwords are above.  If you have any questions please contact me!
