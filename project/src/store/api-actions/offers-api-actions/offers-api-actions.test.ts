import { mockAPI, mockOffers, mockStore } from '../../../utils/mocks';
import { fetchOfferAction } from '../offers-api-actions/offers-api-actions';
import { APIRoute } from '../../../const';

describe('fetchOfferAction', () => {

  afterEach(() => {
    mockAPI.reset();
  });

  it('should fetch offer successfully', async () => {
    const store = mockStore();
    const mockOffer = mockOffers[0];
    const mockOfferId = String(mockOffer.id);
    mockAPI.onGet(`${APIRoute.Hotels}/${mockOfferId}`).reply(200, mockOffer);

    const result = await store.dispatch(fetchOfferAction(mockOfferId));

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchOfferAction.pending.type);
    expect(actions[1].type).toEqual(fetchOfferAction.fulfilled.type);
    expect(result.payload).toEqual(mockOffer);
  });

});
