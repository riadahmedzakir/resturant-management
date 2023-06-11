/* eslint-disable @typescript-eslint/no-inferrable-types */

import {
  IsString,
  IsNumber,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsValidQueryOrder', async: false })
class ValidOrderConstraint implements ValidatorConstraintInterface {
  validate(value: number) {
    if (!value) {
      return true;
    }
    return value === -1 || value === 1;
  }

  defaultMessage() {
    return 'Order should be 1 or -1';
  }
}

class QueryBase {
  @IsString()
  SortedBy = '_id';

  @IsNumber()
  @Validate(ValidOrderConstraint)
  Order: number = 1;

  @IsNumber()
  Skip = 0;

  @IsNumber()
  Limit = 10;
}

export { QueryBase };
