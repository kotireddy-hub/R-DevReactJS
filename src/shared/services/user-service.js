import axios from 'axios';


 class UserService {

  getUser() {
    // Axios call to get data from API
   const userPromise = axios.get('https://demo6902547.mockable.io/dashboard-list')
    .then(res => res.data)
    .catch(err => console.log("Error:", err.res))
    return userPromise;
  }

}

export default UserService