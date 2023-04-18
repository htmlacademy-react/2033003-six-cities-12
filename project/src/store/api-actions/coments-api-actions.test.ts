import { createApi } from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { State } from '../../types/state';
import {Action} from 'redux';
import { APIRoute } from '../../const';
import {  mockReviewData,} from '../../utils/mocks';
import { postCommentAction } from './coments-api-actions';
import { ReviewData } from '../../types/review-data';


const api = createApi();
const mockAPI = new MockAdapter(api);
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

describe('API Actions: comment actions', () => {
  afterEach(() => {
    mockAPI.reset();
  });
  describe('post a new comment', () => {

    it('should post a new comment and return a new review', async () => {
      const store = mockStore();
      const expectedReviewData = {
        name: mockReviewData.name,
        avatarUrl: mockReviewData.avatarUrl,
        rating: String(mockReviewData.rating),
        comment: mockReviewData.comment,
      }
      mockAPI.onPost(`${APIRoute.Comments}/1`).reply(200, expectedReviewData);
      const newReviewData: ReviewData = {
        hotelId: '1',
        comment: mockReviewData.comment,
        rating: String(mockReviewData.rating),
        avatarUrl: mockReviewData.avatarUrl,
        name: mockReviewData.name,
      };
      const result = await store.dispatch(postCommentAction(newReviewData));
      //expect(result.payload).toEqual(expectedReviewData);
      expect(result.type).toEqual(postCommentAction.fulfilled.type);
    });

  });
});
