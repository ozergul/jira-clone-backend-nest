import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { LovType, TaskPriority, TaskType } from '../../api/lov/enum';
import { Lov } from '../../api/lov/lov.entity';

export default class LovSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('lovs')
      .values([
        // Priorities
        { text: 'Low', type: LovType.TASK_PRIORITY, value: TaskPriority.LOW },
        { text: 'Medium', type: LovType.TASK_PRIORITY, value: TaskPriority.MEDIUM },
        { text: 'Urgent', type: LovType.TASK_PRIORITY, value: TaskPriority.URGENT },
        // Types
        { text: 'Task', type: LovType.TASK_TYPE, value: TaskType.TASK },
        { text: 'Bug', type: LovType.TASK_TYPE, value: TaskType.BUG },
        { text: 'Story', type: LovType.TASK_TYPE, value: TaskType.STORY },
      ] as Lov[])
      .execute();
  }
}
