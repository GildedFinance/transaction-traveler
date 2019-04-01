import { BN } from 'bn.js';

export class BigNumber {
  BNX: any;

  constructor() {
    this.BNX = (mixed: any) => new BN(mixed);
  }

  amountToBN(amount: any, decimals: number) {
    const comps = amount.split('.');

    if (!comps[0]) {
      comps[0] = '0';
    }
    if (!comps[1]) {
      comps[1] = '0';
    }
    while (comps[1].length < decimals) {
      comps[1] += '0';
    }

    comps[0] = this.BNX(comps[0]);
    comps[1] = this.BNX(comps[1]);

    return comps[0].mul(this.BNX(10).pow(this.BNX(decimals))).add(comps[1]);
  }

  BNToAmount(bignumber: BN, decimals: number) {
    const negative = bignumber.lt(new BN(0));

    if (negative) {
      bignumber = bignumber.mul(new BN(-1));
    }

    let fraction = bignumber.mod(new BN(10).pow(new BN(decimals))).toString();
    const whole = bignumber.div(new BN(10).pow(new BN(decimals))).toString(10);

    while (fraction.length < decimals) {
      fraction = `0${fraction}`;
    }
    const matches = fraction.match(/^([0-9]*[1-9]|0)(0*)/);
    fraction = matches && matches[1] ? matches[1] : fraction;

    return `${negative ? '-' : ''}${whole}${fraction === '0' ? '' : `.${fraction}`}`;
  }
}
