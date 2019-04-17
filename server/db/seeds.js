use buckets_hub;
db.dropDatabase();

db.buckets.insertMany([{
    activity: "motorbike journey",
    date: "2020-01-22",
    location: "Route66",
    status: "incomplete"
  },
  {
    activity: "establish running club for people with Mental Health Ilness",
    date: "2020-01-22",
    location: "Edinburgh",
    status: "incompleted"
  },
  {
    activity: "get a cottage and goat",
    date: "2021-01-01",
    location: "Highlands",
    status: "incompleted"
  },
  {
    activity: "clubbing in Japan",
    date: "2020-01-22",
    location: "Japan",
    status: "incompleted"
  }

]);
