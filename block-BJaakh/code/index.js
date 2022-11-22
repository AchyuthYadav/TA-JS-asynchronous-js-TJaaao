fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) /
  });

  {
    "todo": {
      "title": "abc",
      "isCompleted": true
    }
  }

  {
    "todos": [
      {
        "isCompleted": false,
        "_id": "6036099201c9a39658f33787",
        "title": "Learn Node",
        "createdAt": "2021-02-24T08:08:50.687Z",
        "updatedAt": "2021-02-24T08:08:50.687Z",
        "__v": 0
      },
      {
        "isCompleted": false,
        "_id": "60360d088c1327d639a525d1",
        "title": "Learn Express",
        "createdAt": "2021-02-24T08:23:36.465Z",
        "updatedAt": "2021-02-24T08:25:09.868Z",
        "__v": 0
      }
    ],
    "noOfTodos": 2
  }