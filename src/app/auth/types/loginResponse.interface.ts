import {UserTaskInterface} from '../../shared/types/userTask.interface';

export interface LoginResponseInterface {
  id: number;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  userTasks: UserTaskInterface | null;
  jwtToken: string;
  expiresIn: number;
}
