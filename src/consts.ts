const Settings = {
  rentOffersCount: 5,
  isSignedIn: true,
};

const CITIES = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'
];

const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorite: '/favorites',
  Offer: '/offer/:id',
} ;

export { Settings, CITIES, AppRoute };
