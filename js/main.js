// Write the Code to check if the endpoint is working or not

// const options = {
//   method: 'POST',
//   headers: {Authorization: 'Bearer sk-721170e3cd914bd08a2f77113815d38e'}
// };
//
// fetch('https://api.worqhat.com/authentication', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// Process to Handle the API Sending Simple Responses to the User

// const options = {
//   method: 'POST',
//   headers: {
//     Authorization: 'Bearer sk-721170e3cd914bd08a2f77113815d38e',
//     'Content-Type': 'application/json'
//   },
//   body: '{"question":"Hello how are you"}'
// };
//
// fetch('https://api.worqhat.com/api/ai/content/v2', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// Process to Handle the API Sending Fixed Responses to the User based on the Training Data
// const content = {
//   question: "Hi there",
//   randomness: 0.2,
//   training_data:
//     "Your name is Sagnik. Answer your name while introducing yourself everytime",
// };

// const options = {
//   method: "POST",
//   headers: {
//     Authorization: "Bearer sk-721170e3cd914bd08a2f77113815d38e",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(content),
// };

// fetch("https://api.worqhat.com/api/ai/content/v2", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// Process to Handle the API Sending Fixed Responses to the User based on Conversation History
// const body = {
//   question: "What was her age when she won it?",
//   randomness: 0.2,
//   preserve_history: true,
//   history_object: {
//     "Hi, who was the first person to win a nobel prize twice?": "Marie Curie",
//   },
// };

// const options = {
//   method: "POST",
//   headers: {
//     Authorization: "Bearer sk-721170e3cd914bd08a2f77113815d38e",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(body),
// };

// fetch("https://api.worqhat.com/api/ai/content/v2", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

// Process to Handle the API Sending Fixed Responses to Stream Data

// let decodedContent = "";
// fetch("https://api.worqhat.com/api/ai/content/v2", {
//   method: "POST",
//   mode: "cors",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer sk-721170e3cd914bd08a2f77113815d38e",
//   },
//   body: JSON.stringify({
//     question: "Write the definition of photosynthesis in 5 lines",
//     randomness: 0.2,
//     stream_data: true,
//   }),
// })
//   .then((res) => {
//     var content;

//     const reader = res.body.getReader();
//     const decoder = new TextDecoder();

//     const read = () => {
//       reader.read().then(({ done, value }) => {
//         if (done) {
//           console.log("[end]");
//           console.log(decodedContent);
//           return;
//         }
//         const decodedValue = decoder.decode(value);
//         decodedContent += decodedValue; // Append the decoded value
//         console.log(decodedContent); // Log the updated content
//         content = decodedContent.replace(/(?:\r\n|\r|\n)/g, "<br>");
//         // get the last bubble
//         read();
//       });
//     };

//     read();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Use the prompt feature to take input from the user

// Process to Handle the API to get the Web Extract

// const body = {
//   url_path: "https://worqhat.com",
//   headline: true,
//   code_blocks: true,
//   inline_code: true,
//   references: true,
//   tables: true,
// };
// const options = {
//   method: "POST",
//   headers: {
//     Authorization: "Bearer sk-721170e3cd914bd08a2f77113815d38e",
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(body),
// };

// fetch("https://api.worqhat.com/api/ai/v2/web-extract", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

