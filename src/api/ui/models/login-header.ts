import { Project } from '../../project/project.entity';
import { Task } from '../../task/task.entity';

export interface LoginHeader {
  tasks: Task[];
  projects: Project[];
}
