import axios from "axios";
export async function fetchDateQuery() {
    try {
      const resp = await axios.get("http://vindev.cx.ua/dashboard");
      return resp
    } catch (error) {
      console.error(error);
    }
  }