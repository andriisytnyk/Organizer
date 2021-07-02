import {UserTaskInterface} from './userTask.interface';

export interface CurrentUserInterface {
  id: number;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  userTasks: UserTaskInterface | null;
  jwtToken: string;
  expiresIn: number;
}
