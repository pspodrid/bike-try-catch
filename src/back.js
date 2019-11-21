export class BikeService {

  async apiCall(city,color,manufacturer) {
    try {
      let response = await fetch(`http://bikeindex.org/api/v3/search/close_serial?distance=${city}&color=${color}&manufacturer=${manufacturer}`);
      if(response.ok) {
        let jsonifiedResponse = await response.json();
        console.log("are you seeing this?");
        return jsonifiedResponse;
      }else {
        throw new Error('myError');
      };
    } catch(error) {
        const myError = new Error('sorry, something went wrong');
        console.log(myError.message);
        return myError.message;
    }
  }
}
