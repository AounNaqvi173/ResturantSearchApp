import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer JwqipW5Fr3FcghCC_uuz9XWYwLxUEfaRy1jBqxdUGqvAnM_fZhqv2Gpo2UoiqYPE6qdn1XhfX6sAXPbiJDNcQ-GuwcBfcI3zcN10wM29-MjUNcTcCmEO8OQodmZpYnYx'
    }

});

