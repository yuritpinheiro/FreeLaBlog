/**
 * Created by ryuga on 23/06/18.
 */

export class Category {
  id: string;
  name: string;
  description: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
