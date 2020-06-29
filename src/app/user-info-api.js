import axios from 'axios';
import auth from './auth';


export default{
    getUserInfo(){
        var jwtToken = auth.auth.getSignInUserSession().getAccessToken().jwtToken;
        var idToken = auth.auth.getSignInUserSession().getAccessToken().idToken;
        localStorage.setItem("cognitoIdentityToken", idToken);
        const USERINFO_URL = 'https://'+auth.auth.getAppWebDomain() + '/oauth2/userInfo';
        var requestData = {
            headers: {
                'Authorization': 'Bearer '+ jwtToken
            }
        }
        return axios.get(USERINFO_URL, requestData).then(response => {
            return response.data;
        });
    }
}
