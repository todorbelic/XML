export class Flight {
    takeOffCity: string = ''
    landingCity: string = ''
    takeOffTime: string=''
    landingTime : string = ''

    public constructor(obj?: Flight) {
        if (obj) {
          this.takeOffCity = obj.takeOffCity
          this.landingCity = obj.landingCity
          this.takeOffTime = obj.takeOffTime
          this.landingTime = obj.landingTime
        }
      }
}