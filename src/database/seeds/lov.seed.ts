import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { LovType } from '../../api/lov/enum';
import { Lov } from '../../api/lov/lov.entity';

export default class LovSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('lovs')
      .values([
        // Priorities
        { text: 'Low', type: LovType.TaskPriority, value: '0' },
        { text: 'Medium', type: LovType.TaskPriority, value: '1' },
        { text: 'Urgent', type: LovType.TaskPriority, value: '2' },
        // Types
        { text: 'Task', type: LovType.TaskType, value: '0' },
        { text: 'Bug', type: LovType.TaskType, value: '1' },
        { text: 'Story', type: LovType.TaskType, value: '2' },
      ] as Lov[])
      .execute();
  }
}
