export class Request {

  title: string;
  imageSrc: string;
  description: string;
  requester: number;
  requestDate: string;
  donationsAccepted: string;
  donationsOutstanding: string;

  constructor(title: string, imageSrc: string, description: string, requester: number, requestDate: string, donationsAccepted: string, donationsOutstanding: string) {
    this.title = title;
    this.imageSrc = imageSrc;
    this.description = description;
    this.requester = requester;
    this.requestDate = requestDate;
    this.donationsAccepted = donationsAccepted;
    this.donationsOutstanding = donationsOutstanding;
  }

}
