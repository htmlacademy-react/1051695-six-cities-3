import { mainOfferType } from '../../pages/main-page/main-offer-type';
import CitiesCard from '../cities-card/cities-card';
import { NEAR_PLACES_MAX_LENGTH } from '../../consts';

type offersListProps = {
  offers: mainOfferType[];
  isOfferPage?: boolean;
  handleHover?: (offer?: string) => void;
  page?: string;
}


function OffersList({ offers, isOfferPage = false, handleHover, page }: offersListProps): JSX.Element {
  if (isOfferPage) {
    return (
      <>
        {offers.slice(0, NEAR_PLACES_MAX_LENGTH).map((offer) => <CitiesCard handleHover={handleHover} key={offer.id} offer={offer} page={page} />)}
      </>
    );
  }

  return (
    <>
      {offers.map((offer) => <CitiesCard handleHover={handleHover} key={offer.id} offer={offer} page={page} />)}
    </>
  );
}

export default OffersList;
