import MainPage from '../pages/main/main-page';

type MainPageProps = {
  rentOffersCount: number;
}


function App({rentOffersCount}:MainPageProps): JSX.Element {
  return (
    <MainPage rentOffersCount={rentOffersCount}/>
  );
}

export default App;
