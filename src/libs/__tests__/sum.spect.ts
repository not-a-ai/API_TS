import { sum } from '../sum'

describe('libs suite', () => {
  it('deve somar d2 números e receber 3 como resposta', () => {
    expect(sum(1,2)).toBe(3)
  })
})