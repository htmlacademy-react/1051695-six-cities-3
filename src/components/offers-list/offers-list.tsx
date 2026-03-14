import { mainOfferType } from '../../pages/main-page/main-offer-type';
import CitiesCard from '../cities-card/cities-card';

type offersListProps = {
  offers: mainOfferType[];
}


function OffersList({ offers }: offersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => <CitiesCard key={offer.id} offer={offer} />)}
    </>
  );
}

export default OffersList;
