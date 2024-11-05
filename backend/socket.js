// backend/socket.js
const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("New WebSocket connection:", socket.id);

    // Event listener for a new post creation
    socket.on("newPost", (post) => {
      console.log("Broadcasting new post:", post);
      io.emit("newPost", post); // Broadcast to all connected clients
    });

    // Handle client disconnect
    socket.on("disconnect", (reason) => {
      console.log(`Client disconnected: ${socket.id}, Reason: ${reason}`);
    });

    // Handle errors on the socket connection
    socket.on("error", (error) => {
      console.error(`Socket error on ${socket.id}:`, error);
    });
  });
};

module.exports = setupSocket;
