const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [{title: "FIRST", background: "white", initial: "white"},
             {title: "SECOND", background: "white", initial: "white"}]
    },
    actions: {
      // Use getActions to call a function within a fuction
      getMessage: async () => {
        try {
          // Fetching data from the backend
          const url = "https://upgraded-space-umbrella-r46ggv7wx7q3x6wv-3001.app.github.dev/api/hello";
          const options = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          const response = await fetch(url, options)
          const data = await response.json()
          setStore({ message: data.message })
          return data;  // Don't forget to return something, that is how the async resolves
        } catch (error) {
          console.log("Error loading message from backend", error)
        }
      },
      addUser: async (newUser)=>{
        const url = 'https://upgraded-space-umbrella-r46ggv7wx7q3x6wv-3001.app.github.dev/api/users'
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser),
        };
        const response = await fetch(url, options);
        if(!response.ok){
          console.log(response.status, response.statusText);
          return response.statusText;
        };
        const data = await response.json();
        console.log(data);
        return data
      },
      addTrainer: async (newTrainer) => {
        const url= 'https://upgraded-space-umbrella-r46ggv7wx7q3x6wv-3001.app.github.dev/api/trainers'
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newTrainer),
        };
        const response = await fetch(url, options);
        if(!response.ok){
          console.log(response.status, response.statusText);
          return response.statusText;
        };
        const data = await response.json();
        console.log(data);
        return data
      }
      }
    }
};

export default getState;
