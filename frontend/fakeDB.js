const fakeDBinfo = [
  {
    _id: "61c915ee2aa547cc7dc0ac2b",
    orderNumber: 1000000001,
    pickupLocation: "Canberra",
    notes: "from react",
    orderedItems: [
      {
        sendingStore: "Canberra",
        item: "whole",
        qty: 1,
        status: "",
      },
      {
        sendingStore: "Syd",
        item: "whole",
        qty: 1,
        status: "",
      },
    ],
    date: "2021-12-27T01:25:02.603Z",
    __v: 0,
    customerName: "Frank Smith",
    fourHour: "No",
  },
  {
    _id: "61cb86d06a9e816fb9713b09",
    orderNumber: 1000000002,
    pickupLocation: "Canberra",
    notes: "test",
    orderedItems: [
      {
        sendingStore: "Parramatta",
        item: "whole",
        status: "awaiting sending store action",
        qty: 1,
      },
    ],
    date: "2021-12-28T21:51:12.807Z",
    __v: 0,
    customerName: "Billy Bob",
  },
  {
    _id: "61cb86d06a9e816fb9713b09",
    orderNumber: 1000000003,
    pickupLocation: "Parramatta",
    notes: "test",
    orderedItems: [
      {
        sendingStore: "Parramatta",
        item: "everyting!",
        status: "Posted out on DATE",
        qty: 1,
      },
      {
        sendingStore: "Canberra",
        item: "one other item",
        qty: 1,
        status: "Out of stock",
      },
    ],
    date: "2021-12-28T21:51:12.807Z",
    __v: 0,
    customerName: "Bob Burger",
  },

  {
    _id: "61cbc2ec9f42d4f287c1131d",
    orderNumber: 200,
    orderStatus: "not sent",
    pickupLocation: "Syd",
    notes: "hello from postpan",
    orderedItems: [
      {
        sendingStore: "Canberra",
        item: "atmos ag",
      },
      {
        sendingStore: "Sydney",
        item: "a different item",
      },
    ],
    date: "2021-12-29T02:07:40.377Z",
    __v: 0,
    customerName: "Bob",
  },
  {
    _id: "61cd95880b2770c12bfa0678",
    orderNumber: 2,
    orderStatus: "waiting to be sent",
    pickupLocation: "Parramatta",
    orderedItems: [
      {
        sendingStore: "Parramatta",
        item: "whole",
      },
    ],
    date: "2021-12-30T11:18:32.568Z",
    __v: 0,
  },
  {
    _id: "61cd95b1028edb25fcea819f",
    orderNumber: 3,
    orderStatus: "waiting to be sent",
    pickupLocation: "Canberra",
    orderedItems: [
      {
        sendingStore: "Canberra",
        item: "w",
      },
    ],
    date: "2021-12-30T11:19:13.755Z",
    __v: 0,
  },
  {
    _id: "61cd95f0ac71ad4ddcf6d3d9",
    orderNumber: 5,
    orderStatus: "waiting to be sent",
    pickupLocation: "Canberra",
    orderedItems: [
      {
        sendingStore: "Canberra",
      },
    ],
    date: "2021-12-30T11:20:16.013Z",
    __v: 0,
  },
  {
    _id: "61cd96568c4e39ca425a4c28",
    orderNumber: 6,
    orderStatus: "waiting to be sent",
    pickupLocation: "Canberra",
    notes: "test",
    orderedItems: [
      {
        sendingStore: "Canberra",
        item: "test",
      },
    ],
    date: "2021-12-30T11:21:58.046Z",
    __v: 0,
  },
  {
    _id: "61cd96ab638506039d5a86b7",
    orderNumber: 7,
    orderStatus: "waiting to be sent",
    pickupLocation: "Canberra",
    orderedItems: [
      {
        sendingStore: "Canberra",
      },
    ],
    fourHour: false,
    date: "2021-12-30T11:23:23.055Z",
    __v: 0,
  },
  {
    _id: "61cd970e66f42280711e9063",
    orderNumber: 8,
    orderStatus: "waiting to be sent",
    pickupLocation: "Fortitude Valley",
    notes: "test",
    orderedItems: [
      {
        sendingStore: "Fortitude Valley",
      },
    ],
    fourHour: false,
    date: "2021-12-30T11:25:02.462Z",
    __v: 0,
  },
  {
    _id: "61cd97863b0179d98d3dd03c",
    orderNumber: 9,
    customerName: "test2",
    orderStatus: "waiting to be sent",
    pickupLocation: "Sydney",
    notes: "test2",
    orderedItems: [
      {
        sendingStore: "Sydney",
        item: "test2",
      },
    ],
    fourHour: false,
    date: "2021-12-30T11:27:02.405Z",
    __v: 0,
  },
];

export default fakeDBinfo;
