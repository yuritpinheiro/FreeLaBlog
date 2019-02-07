/**
 * Created by ryuga on 23/06/18.
 */

export class Comment {
  status: string[];
  id: string;
  name: string;
  email: string;
  message: string;
  ip: string;
  commentDatetime: string;
  postId: string;

  // Assign values from json to properties
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
