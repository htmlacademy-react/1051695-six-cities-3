import { mainOfferType } from '../../pages/main-page/main-offer-type';
import { useState, useEffect } from 'react';
import CitiesCard from '../cities-card/cities-card';
import { Nullable } from 'vitest';
import { NEAR_PLACES_MAX_LENGTH } from '../../consts';

type offersListProps = {
  offers: mainOfferType[];
  isOfferPage?: boolean;
}


function OffersList({ offers, isOfferPage = false }: offersListProps): JSX.Element {
  const [onHoverCard, setOnHoverCard] = useState<Nullable<string>>(null);
  const handleHover = (offer?: string) => {
    setOnHoverCard(offer || null);
  };

  if (isOfferPage) {
    offers.splice(NEAR_PLACES_MAX_LENGTH);
  }

  useEffect(() => {
    //   console.log('component did update');
    // },[offers]);
    // useEffect(()=>{
    //   console.warn(onHoverCard);

    //   return ()=>{
    //     console.log('compt will unmount');
    //   };
  }, []);

  return (
    <>
      {offers.map((offer) => <CitiesCard handleHover={handleHover} key={offer.id} offer={offer} page="cities" />)}
    </>
  );
}

export default OffersList;
