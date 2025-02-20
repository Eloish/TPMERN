const PostsApi = {
    /**
     * Fonction permetant d'appeler mon API post "./services/PostsApi.js"
     * @returns Liste de posts
     */
    getProducts: () => {
      return fetch("http://localhost:8080/products")
        .then((response) => response.json())
    },
    getcateories:()=>{

    },
  
    getProductById: (id) => {
      return fetch(`http://localhost:8080/products/${id}`)
        .then((response) => response.json())
    },
    
//   addUser: (user) => {
//     return fetch('http://localhost:8080/products', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user)
//     }).then((response) => response.json())
//   },

//   deleteUser: (user) => {
//     return fetch(`http://localhost:8080/products/${user}`, {
//       method: 'DELETE',
//       headers: { "content-type": "application/json" }
//     }).then(() => {
//       console.log(`Post ${user} supprimé`)
//     }).catch((error) => {
//       console.error(`Erreur lors de la suppression :`, error);
//     })
//   }
  }
  
  export default PostsApi