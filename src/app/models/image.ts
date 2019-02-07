/**
 * Created by ryuga on 23/06/18.
 */
export class Image {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;

  // Assign values from json to properties
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
