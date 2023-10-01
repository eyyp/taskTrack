import react from "react";
import {LocaleConfig} from 'react-native-calendars';
export const dateSettings = () =>{
    LocaleConfig.locales['tr'] = {
        monthNames: [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz',
          'Ağustos',
          'Eylül',
          'Ekim',
          'Kasım',
          'Aralık'
        ],
        monthNamesShort: ['Oca.', 'Şub.', 'Mar.', 'Nis', 'May', 'Haz', 'Tem.', 'Agu.', 'Eyl.', 'Ekm.', 'Kas.', 'Ara.'],
        dayNames: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
        dayNamesShort: ['Prts.', 'Sal.', 'Çar.', 'Per.', 'Cum.', 'Cmrt.', 'Pzr.'],
        today: "Bugün"
      };
      LocaleConfig.defaultLocale = 'tr';
}
