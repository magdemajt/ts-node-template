import { expect, use } from 'chai';
// import sinon, { stubInterface } from 'ts-sinon';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

use(chaiAsPromised);
use(sinonChai);

describe('MockTest', () => {
  it('should simply pass', function () {
    expect(true).to.be.true;
  });
})
