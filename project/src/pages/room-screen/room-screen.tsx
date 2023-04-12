import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Offers from '../../components/offers/offers';
import Rating from '../../components/rating/rating';
import ReviewList from '../../components/review-list/review-list';
import RoomGalery from '../../components/room-galery/room-galery';
import {Offer } from '../../types/offer';
import { Review, Review as ReviewType } from '../../types/review';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';

function RoomScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [dispatch, id]);

  const offers = useAppSelector((state) => state.offers);
  const nearbyOffers: Offer[] = useAppSelector((state) => state.nearbyOffers);
  const offer: Offer | null | undefined = useAppSelector((state) => state.selectedOffer);
  const { title, price, rating, type, isPremium, bedrooms, maxAdults, host, description, goods, city } = offer ?? {};

  const nearbyOffersWithCurrent: Offer[] = [
    ...nearbyOffers,
    ...(offer ? [offer] : []),
  ];
  
  const offerReviews: Review[] = useAppSelector((state) => state.reviews);

  return (
    <div className="page">
      <Header offers={offers}/>
      <main className="page__main page__main--property">
        <section className="property">
          {offer && <RoomGalery offer={offer}/>}
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
              {rating && <Rating rating={rating}/>}
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods && goods.map((good) => (
                    <li key={good} className="property__inside-item">{good}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${host && host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host && host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host && host.name}
                  </span>
                  <span className="property__user-status">
                    {host && host.isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewList reviews={offerReviews}/>
            </div>
          </div>
          {city && <Map city={city} activeOfferId={Number(id)} offers={nearbyOffersWithCurrent} wrapperClassName={'property__map'}/>}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <Offers offers={nearbyOffers} isNearby/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );

}
export default RoomScreen;
