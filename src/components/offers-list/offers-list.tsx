import { mainOfferType } from '../../pages/main-page/main-offer-type';
// import {useState} from 'react';
import CitiesCard from '../cities-card/cities-card';

type offersListProps = {
  offers: mainOfferType[];
}


function OffersList({ offers }: offersListProps): JSX.Element {
  // const [onHoverCard, setOnHoverCard] = useState({id:offers[0].id});
  return (
    <>
      {offers.map((offer) => <CitiesCard key={offer.id} offer={offer} />)}
    </>
  );
}

export default OffersList;
