import { Lov } from '../../lov/lov.entity';
import { Project } from '../../project/project.entity';
import { UserInfo } from './user-info';

export interface CreateTaskConfig {
  priorities: Lov[];
  types: Lov[];
  projects: Project[];
  users: UserInfo[];
}
