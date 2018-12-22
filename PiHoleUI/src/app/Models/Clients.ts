export class Client {
  public name: string;

  private ip: string;

  // https://stackoverflow.com/questions/25548351/how-to-validate-an-ip-in-a-text-field-angularjs
  private validateIp(ip: string): boolean {
    let valid = false;

    if (
      ip != '0.0.0.0' &&
      ip != '255.255.255.255' &&
      ip.match(
        /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/
      )
    ) {
      valid = true;
    }

    return valid;
  }

  public getIp() {
    return this.ip;
  }

  public setIp(ip: string) {
    if(this.validateIp(ip)) {
      this.ip = ip;
    }
  }
}
