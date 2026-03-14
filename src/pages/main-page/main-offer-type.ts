
type apartmentType = 'apartment' | 'room' | 'house' | 'hotel';
type locationType = {
      'latitude': number;
      'longitude': number;
      'zoom': number;
    };


export type mainOfferType = {
    'id': string;
    'title': string;
    'type': apartmentType;
    'price': number;
    'city': {
      'name': string;
      'location': locationType;
    };
    'location': locationType;
    'isFavorite': boolean;
    'isPremium': boolean;
    'rating': 0|1|2|3|4|5;
    'previewImage': string;
  }
