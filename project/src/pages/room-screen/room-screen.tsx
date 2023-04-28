import { useParams } from 'react-router-dom';
import Map from '../../components/map/map';
import Offers from '../../components/offers/offers';
import Rating from '../../components/rating/rating';
import ReviewList from '../../components/review-list/review-list';
import RoomGalery from '../../components/room-galery/room-galery';
import {Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { memo, useEffect } from 'react';
import { AuthorizationStatus, compareByDate } from '../../const';
import CommentSubmissionForm from '../../components/comment-submission-form/comment-submission-form';
import { getNearbyOffers, getOffer, getReviews} from '../../store/main-data/main-data.selectors';
import Layout from '../../components/layout/layout';
import Bookmark from '../../components/bookmark/bookmark';
import { fetchNearbyOffersAction, fetchOfferAction } from '../../store/api-actions/offers-api-actions/offers-api-actions';
import { fetchReviewsAction } from '../../store/api-actions/coments-api-actions/coments-api-actions';
import Features from '../../components/features/features';
import { useIsLoggedIn } from '../../hooks/use-is-logged-in/use-is-logged-in';
import useFilteredAndSortedOffers from '../../hooks/use-filtered-and-sorted-offers/use-filtered-and-sorted-offers';

function RoomScreen(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const offer = useAppSelector(getOffer);
  const isLoggedIn = useIsLoggedIn(AuthorizationStatus.Auth);
  const nearbyOffers: Offer[] = useAppSelector(getNearbyOffers);
  const offerReviews: Review[] = useAppSelector(getReviews);
  const latestReviews = offerReviews.slice(-10).sort(compareByDate);
  const filteredAndSortedOffers = useFilteredAndSortedOffers();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [dispatch, id,]);

  if (offer) {
    const { title, price, rating, type, isPremium, bedrooms, maxAdults, host, description, goods, city, isFavorite}: Offer = offer;
    const offerId = offer.id;
    const nearbyOffersWithCurrent: Offer[] = [
      ...nearbyOffers,
      ...(offer ? [offer] : []),
    ];
    const MemoizedOffers = memo(Offers);
    return(
      <Layout className="page">
        <main className="page__main page__main--property">
          <section className="property">
            <RoomGalery offer={offer}/>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <Bookmark isProperty offerId={offerId} isFavorite={isFavorite}/>
                </div>
                <div className="property__rating rating">
                  <Rating rating={rating}/>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <Features type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li key={good} className="property__inside-item">{good}</li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    <span className="property__user-status">
                      {host.isPro ? 'Pro' : ''}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewList reviews={latestReviews}/>
                  {isLoggedIn && <CommentSubmissionForm/>}
                </section>
              </div>
            </div>
            <Map city={city} activeOfferId={offerId} offers={nearbyOffersWithCurrent} wrapperClassName={'property__map'}/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <MemoizedOffers isNearby filteredAndSortedOffers={filteredAndSortedOffers}/>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    );
  }else{
    return null;
  }
}
export default RoomScreen;
