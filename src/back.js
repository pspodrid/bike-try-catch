export class BikeService {

  async apiCall(city,color,manufacturer) {
    try {
      let response = await fetch(`http://bikeindex.org/api/v3/search/count?distance=${city}&color=${color}&manufacturer=${manufacturer}`);
      if(response.ok) {
        let jsonifiedResponse = await response.json();
        // console.log("are you seeing this?");
        return jsonifiedResponse;
      }else {
        throw new Error('myError');
      };
    } catch(error) {
        // const myError = new Error('sorry, something went wrong');
        // console.log(myError.message);
        let response = await fetch(`http://bikeindex.org/api/v3/search/count?distance=${city}&color=${color}&manufacturer=${manufacturer}`);
        if(!response.ok) {
          let jsonifiedResponse = await response.json();
          console.log(jsonifiedResponse);
          return jsonifiedResponse;
        }else {
          console.log("here");
        };
    }
  }
}
