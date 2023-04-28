import { mockOffers, mockReviews, mockUser} from '../../../utils/mocks';
import { APIRoute } from '../../../const';
import { ReviewData } from '../../../types/review-data';
import { mockAPI, mockReviewData, mockStore } from '../../../utils/mocks';
import { fetchReviewsAction, postReviewAction } from '../coments-api-actions/coments-api-actions';
import { Review } from '../../../types/review';

describe('API Actions: comment actions', () => {
  afterEach(() => {
    mockAPI.reset();
  });
  describe('post a new comment', () => {

    it('should successfully post a new review and return the generated review', async () => {
      const store = mockStore();
      const expectedReview: Review = {
        comment: mockReviewData.comment,
        id: Number(mockReviewData.id),
        rating: Number(mockReviewData.rating),
        date: mockReviewData.date,
        user: mockUser
      };

      const newReviewData: ReviewData = {
        id: String(expectedReview.id),
        hotelId: String(mockOffers[0].id),
        comment: expectedReview.comment,
        rating: expectedReview.rating,
        user: expectedReview.user
      };

      mockAPI.onPost(`${APIRoute.Comments}/${mockReviewData.hotelId}`).reply(200, expectedReview);

      const result = await store.dispatch(postReviewAction(newReviewData));
      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        postReviewAction.pending.type,
        postReviewAction.fulfilled.type
      ]);
      expect(result.payload).toEqual(expectedReview);
    });

    it('should fetch reviews from API and return array of reviews', async () => {
      const hotelId = mockReviewData.hotelId;
      const store = mockStore();

      mockAPI
        .onGet(`${APIRoute.Comments}/${hotelId}`)
        .reply(200, mockReviews);

      const result = await store.dispatch(fetchReviewsAction(hotelId));

      const actions = store.getActions();
      expect(actions).toHaveLength(2);
      expect(actions[0].type).toEqual(fetchReviewsAction.pending.type);
      expect(actions[1].type).toEqual(fetchReviewsAction.fulfilled.type);
      expect(result.payload).toEqual(mockReviews);
    });

  });
});
