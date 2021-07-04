import {UserTaskInterface} from './userTask.interface';

export interface UserInterface {
  Id: number;
  FirstName: string;
  LastName: string;
  Username: string;
  Email: string;
  Role: number;
  UserTasks: UserTaskInterface[];
}
