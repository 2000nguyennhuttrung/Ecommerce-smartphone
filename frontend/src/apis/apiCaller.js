import axios from "axios";
import { API_ENDPOINT } from "../constants/index";

// -----------------------backup------------------------
// export default function callApi(endpoint, method = "GET", body) {
//   return axios({
//     method: method,
//     url: `${API_ENDPOINT}/${endpoint}`,
//     data: body,
//   }).catch((err) => {
//     console.error(err);
//   });
// }

export default function callApi(endpoint, method = "GET", body) {
  let csrftoken = getCookie("csrftoken");
  return axios({
    method: method,
    url: `${API_ENDPOINT}/${endpoint}`,
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    data: body,
  }).catch((err) => {
    console.error(err);
  });
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
};
