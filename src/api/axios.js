import axios from "axios";

// export default axios.create({
    
//     baseURL: 'http://app.autointelli.com:10480/otrs/customer.pl?Action=CustomerTicketOverview;Subaction=MyTickets'
    
// });

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = 'AIzaSyAGz7ElHq2uuWlVQyR72bitgKq2K3us2jQ';
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;

export const RegisterAPI = (inputs) => {
    const data = {displayName: inputs.users, email: inputs.email, password: inputs.pwd}
    return axios.post(REGISTER_URL, data)
}