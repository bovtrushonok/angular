import { Injectable } from '@angular/core';
import { daysInYear, msInHour, hoursInDay, monthsArr } from '../constants/data';

@Injectable({
  providedIn: 'root'
})

export class BirthdayService {

  public getDaysToBirthday(date: string): number {
    const currentDate: any = new Date();
    const thisYearBirthday: any = new Date(new Date().getFullYear(), new Date(date).getMonth(),
      new Date(date).getDate());

    const daysLeft =
      ((thisYearBirthday - currentDate) > 0) ?
      Math.trunc((thisYearBirthday - currentDate) / msInHour / hoursInDay) :
      daysInYear + Math.trunc((thisYearBirthday - currentDate) / msInHour / hoursInDay);

    return daysLeft;
  }

  public getMonthAndDay(date: string): string {
    const month = new Date(date).getUTCMonth();
    const day = new Date(date).getUTCDate();

    return `${monthsArr[month]} ${day}`;
  }
}
