import { mockOffers } from './../../utils/mocks';
import { APIRoute, commentDate, commentId, userId } from '../../const';
import { ReviewData } from '../../types/review-data';
import { mockAPI, mockReviewData, mockStore } from '../../utils/mocks';
import { postCommentAction } from './coments-api-actions';
import { Review } from '../../types/review';

describe('API Actions: comment actions', () => {
  afterEach(() => {
    mockAPI.reset();
  });
  describe('post a new comment', () => {

    it('should successfully post a new review and return the generated review', async () => {
      const store = mockStore();
      const expectedReview: Review = {
        comment: mockReviewData.comment,
        id: commentId,
        rating: Number(mockReviewData.rating),
        date: commentDate,
        user: {
          avatarUrl: mockReviewData.avatarUrl,
          id: userId,
          isPro: false,
          name: mockReviewData.name,
        }
      };

      mockAPI.onPost(`${APIRoute.Comments}/${mockReviewData.hotelId}`).reply(200);
      const newReviewData: ReviewData = {
        hotelId: String(mockOffers[0].id),
        comment: expectedReview.comment,
        rating: String(expectedReview.rating),
        avatarUrl: expectedReview.user.avatarUrl,
        name: expectedReview.user.name,
      };

      const result = await store.dispatch(postCommentAction(newReviewData));
      const actions = store.getActions().map(({type}) => type);

      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.fulfilled.type
      ]);
      expect(result.payload).toEqual(expectedReview);
    });

  });
});
