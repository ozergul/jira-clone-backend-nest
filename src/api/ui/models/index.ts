import { Lov } from '../../lov/lov.entity';
import { Project } from '../../project/project.entity';

export interface CreateTaskConfig {
  priorities: Lov[];
  types: Lov[];
  projects: Project[];
}
