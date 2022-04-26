import { Component } from '@angular/core';
import { formatInTimeZone } from 'date-fns-tz'
import enAU from 'date-fns/locale/en-AU'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'date-fns-test';

  // dateRaw = '2022-04-26T07:11:06.151078';
  dateRaw = '2022-04-26T07:11:06.151078Z';
  dateFormatted = formatInTimeZone(this.dateRaw, 'Australia/Sydney', 'yyyy-MM-dd h:mm aa (zzz)', { locale: enAU })
  
}
