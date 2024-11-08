import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantDbSource {
  static async getRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default RestaurantDbSource;
