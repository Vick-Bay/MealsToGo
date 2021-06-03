const liveHost = "https://us-central1-mealstogo-d389d.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-d389d/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
