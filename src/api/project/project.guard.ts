import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ProjectService } from './project.service';

@Injectable()
export class ProjectGuard implements CanActivate {
  constructor(private readonly projectService: ProjectService) {}
  canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const id = request.body.id || request.params.id;
    return new Promise<boolean>(resolve => {
      return this.projectService
        .findById(id)
        .then(project => {
          const userId = request.user.id;
          if (!userId) {
            resolve(false);
          } else {
            resolve(project?.createdBy === userId);
          }
        })
        .catch(_ => {
          resolve(false);
        });
    });
  }
}
