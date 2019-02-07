import "@babel/polyfill/noConflict";
import server from "./server";

// Server
server.start({ port: process.env.PORT || 4000 }, () => {
  console.log(`Graphql is running`);
});
