import {
  IsString,
  IsNumber,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isPhoneNumber', async: false })
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
  SortedBy: string;
  @IsNumber()
  @Validate(ValidOrderConstraint)
  Order: number;
}

export { QueryBase };
