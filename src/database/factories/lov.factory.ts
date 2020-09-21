import { define } from 'typeorm-seeding';
import { Lov } from '../../api/lov/lov.entity';

define(Lov, () => {
  const lov = new Lov();
  lov.id = 6;
  lov.text = 'test';
  return lov;
});
