import {ICONS, IMAGES} from '../assets';
import {LABELS} from '../labels';
import BottomTab from '../routes/BottomTab';
import {
  ConfirmSignupScreen,
  ForgotChangePassScreen,
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  ProfileScreen,
  SettingScreen,
  SignupScreen,
} from '../screens';
import ContactScreen from '../screens/ContactScreen/ContactScreen';

/*
 ** Authentication screen
 */
export const authScreens = [
  {
    id: 1,
    screenName: 'OnBoardingScreen',
    component: OnBoardingScreen,
  },
  {
    id: 2,
    screenName: 'ConfirmSignupScreen',
    component: ConfirmSignupScreen,
  },
  {
    id: 3,
    screenName: 'LoginScreen',
    component: LoginScreen,
  },
  {
    id: 4,
    screenName: 'ForgotPasswordScreen',
    component: ForgotPasswordScreen,
  },
  {
    id: 5,
    screenName: 'SignupScreen',
    component: SignupScreen,
  },
  {
    id: 6,
    screenName: 'ForgotChangePassScreen',
    component: ForgotChangePassScreen,
  },
  {
    id: 7,
    screenName: 'ContactScreen',
    component: ContactScreen,
  },
];

/*
 ** Home stack screen
 */
export const homeScreen = [
  {
    id: 1,
    screenName: 'BottomTab',
    component: BottomTab,
  },
  {
    id: 2,
    screenName: 'SettingScreen',
    component: SettingScreen,
  },
];

/*
 **  Bottom tab screens
 */

export const TabScreens = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    tabBarIcon: ICONS.HomeBottomIcon,
    tabBarLabel: LABELS.home,
  },

  {
    name: 'Profilescreen',
    component: ProfileScreen,
    tabBarIcon: ICONS.ProfileBottomIcon,
    tabBarLabel: LABELS.profile,
  },
];

export const countryStates = [
  {
    title: 'Alabama',
    code: 1,
    id: 1,
  },
  {
    title: 'Alaska',
    code: 1,
    id: 2,
  },
  {
    title: 'American Samoa',
    code: 1,
    id: 3,
  },
  {
    title: 'Arizona',
    code: 1,
    id: 4,
  },
  {
    title: 'Arkansas',
    code: 1,
    id: 5,
  },
  {
    title: 'California',
    code: 1,
    id: 6,
  },
  {
    title: 'Colorado',
    code: 1,
    id: 7,
  },
  {
    title: 'Connecticut',
    code: 1,
    id: 8,
  },
  {
    title: 'Delaware',
    code: 1,
    id: 9,
  },
  {
    title: 'District Of Columbia',
    code: 1,
    id: 10,
  },
  {
    title: 'Federated States Of Micronesia',
    code: 1,
    id: 11,
  },
  {
    title: 'Florida',
    code: 1,
    id: 12,
  },
  {
    title: 'Georgia',
    code: 1,
    id: 13,
  },
  {
    title: 'Guam',
    code: 1,
    id: 14,
  },
  {
    title: 'Hawaii',
    code: 1,
    id: 15,
  },
  {
    title: 'Idaho',
    code: 1,
    id: 16,
  },
  {
    title: 'Illinois',
    code: 1,
    id: 17,
  },
  {
    title: 'Indiana',
    code: 1,
    id: 18,
  },
  {
    title: 'Iowa',
    code: 1,
    id: 19,
  },
  {
    title: 'Kansas',
    code: 1,
    id: 20,
  },
  {
    title: 'Kentucky',
    code: 1,
    id: 21,
  },
  {
    title: 'Louisiana',
    code: 1,
    id: 22,
  },
  {
    title: 'Maine',
    code: 1,
    id: 23,
  },
  {
    title: 'Marshall Islands',
    code: 1,
    id: 24,
  },
  {
    title: 'Maryland',
    code: 1,
    id: 25,
  },
  {
    title: 'Massachusetts',
    code: 1,
    id: 26,
  },
  {
    title: 'Michigan',
    code: 1,
    id: 27,
  },
  {
    title: 'Minnesota',
    code: 1,
    id: 28,
  },
  {
    title: 'Mississippi',
    code: 1,
    id: 29,
  },
  {
    title: 'Missouri',
    code: 1,
    id: 30,
  },
  {
    title: 'Montana',
    code: 1,
    id: 31,
  },
  {
    title: 'Nebraska',
    code: 1,
    id: 32,
  },
  {
    title: 'Nevada',
    code: 1,
    id: 33,
  },
  {
    title: 'New Hampshire',
    code: 1,
    id: 34,
  },
  {
    title: 'New Jersey',
    code: 1,
    id: 35,
  },
  {
    title: 'New Mexico',
    code: 1,
    id: 36,
  },
  {
    title: 'New York',
    code: 1,
    id: 37,
  },
  {
    title: 'North Carolina',
    code: 1,
    id: 39,
  },
  {
    title: 'North Dakota',
    code: 1,
    id: 40,
  },
  {
    title: 'Northern Mariana Islands',
    code: 1,
    id: 41,
  },
  {
    title: 'Ohio',
    code: 1,
    id: 42,
  },
  {
    title: 'Oklahoma',
    code: 1,
    id: 43,
  },
  {
    title: 'Oregon',
    code: 1,
    id: 44,
  },
  {
    title: 'Palau',
    code: 1,
    id: 45,
  },
  {
    title: 'Pennsylvania',
    code: 1,
    id: 46,
  },
  {
    title: 'Puerto Rico',
    code: 1,
    id: 47,
  },
  {
    title: 'Rhode Island',
    code: 1,
    id: 48,
  },
  {
    title: 'South Carolina',
    code: 1,
    id: 49,
  },
  {
    title: 'South Dakota',
    code: 1,
    id: 50,
  },
  {
    title: 'Tennessee',
    code: 1,
    id: 51,
  },
  {
    title: 'Texas',
    code: 1,
    id: 52,
  },
  {
    title: 'Utah',
    code: 1,
    id: 53,
  },
  {
    title: 'Vermont',
    code: 1,
    id: 54,
  },
  {
    title: 'Virgin Islands',
    code: 1,
    id: 55,
  },
  {
    title: 'Virginia',
    code: 1,
    id: 56,
  },
  {
    title: 'Washington',
    code: 1,
    id: 57,
  },
  {
    title: 'West Virginia',
    code: 1,
    id: 58,
  },
  {
    title: 'Wisconsin',
    code: 1,
    id: 59,
  },
  {
    title: 'Wyoming',
    code: 1,
    id: 60,
  },
];

export const countriesData = [
  {
    countryName: 'Afghanistan',
    countryDialCode: '+93',
    emoji: '🇦🇫',
    code: 'AF',
  },
  {
    countryName: 'Aland Islands',
    countryDialCode: '+358',
    emoji: '🇦🇽',
    code: 'AX',
  },
  {
    countryName: 'Albania',
    countryDialCode: '+355',
    emoji: '🇦🇱',
    code: 'AL',
  },
  {
    countryName: 'Algeria',
    countryDialCode: '+213',
    emoji: '🇩🇿',
    code: 'DZ',
  },
  {
    countryName: 'AmericanSamoa',
    countryDialCode: '+1684',
    emoji: '🇦🇸',
    code: 'AS',
  },
  {
    countryName: 'Andorra',
    countryDialCode: '+376',
    emoji: '🇦🇩',
    code: 'AD',
  },
  {
    countryName: 'Angola',
    countryDialCode: '+244',
    emoji: '🇦🇴',
    code: 'AO',
  },
  {
    countryName: 'Anguilla',
    countryDialCode: '+1264',
    emoji: '🇦🇮',
    code: 'AI',
  },
  {
    countryName: 'Antarctica',
    countryDialCode: '+672',
    emoji: '🇦🇶',
    code: 'AQ',
  },
  {
    countryName: 'Antigua and Barbuda',
    countryDialCode: '+1268',
    emoji: '🇦🇬',
    code: 'AG',
  },
  {
    countryName: 'Argentina',
    countryDialCode: '+54',
    emoji: '🇦🇷',
    code: 'AR',
  },
  {
    countryName: 'Armenia',
    countryDialCode: '+374',
    emoji: '🇦🇲',
    code: 'AM',
  },
  {
    countryName: 'Aruba',
    countryDialCode: '+297',
    emoji: '🇦🇼',
    code: 'AW',
  },
  {
    countryName: 'Australia',
    countryDialCode: '+61',
    emoji: '🇦🇺',
    code: 'AU',
  },
  {
    countryName: 'Austria',
    countryDialCode: '+43',
    emoji: '🇦🇹',
    code: 'AT',
  },
  {
    countryName: 'Azerbaijan',
    countryDialCode: '+994',
    emoji: '🇦🇿',
    code: 'AZ',
  },
  {
    countryName: 'Bahamas',
    countryDialCode: '+1242',
    emoji: '🇧🇸',
    code: 'BS',
  },
  {
    countryName: 'Bahrain',
    countryDialCode: '+973',
    emoji: '🇧🇭',
    code: 'BH',
  },
  {
    countryName: 'Bangladesh',
    countryDialCode: '+880',
    emoji: '🇧🇩',
    code: 'BD',
  },
  {
    countryName: 'Barbados',
    countryDialCode: '+1246',
    emoji: '🇧🇧',
    code: 'BB',
  },
  {
    countryName: 'Belarus',
    countryDialCode: '+375',
    emoji: '🇧🇾',
    code: 'BY',
  },
  {
    countryName: 'Belgium',
    countryDialCode: '+32',
    emoji: '🇧🇪',
    code: 'BE',
  },
  {
    countryName: 'Belize',
    countryDialCode: '+501',
    emoji: '🇧🇿',
    code: 'BZ',
  },
  {
    countryName: 'Benin',
    countryDialCode: '+229',
    emoji: '🇧🇯',
    code: 'BJ',
  },
  {
    countryName: 'Bermuda',
    countryDialCode: '+1441',
    emoji: '🇧🇲',
    code: 'BM',
  },
  {
    countryName: 'Bhutan',
    countryDialCode: '+975',
    emoji: '🇧🇹',
    code: 'BT',
  },
  {
    countryName: 'Bolivia, Plurinational State of',
    countryDialCode: '+591',
    emoji: '🇧🇴',
    code: 'BO',
  },
  {
    countryName: 'Bosnia and Herzegovina',
    countryDialCode: '+387',
    emoji: '🇧🇦',
    code: 'BA',
  },
  {
    countryName: 'Botswana',
    countryDialCode: '+267',
    emoji: '🇧🇼',
    code: 'BW',
  },
  {
    countryName: 'Brazil',
    countryDialCode: '+55',
    emoji: '🇧🇷',
    code: 'BR',
  },
  {
    countryName: 'British Indian Ocean Territory',
    countryDialCode: '+246',
    emoji: '🇮🇴',
    code: 'IO',
  },
  {
    countryName: 'Brunei Darussalam',
    countryDialCode: '+673',
    emoji: '🇧🇳',
    code: 'BN',
  },
  {
    countryName: 'Bulgaria',
    countryDialCode: '+359',
    emoji: '🇧🇬',
    code: 'BG',
  },
  {
    countryName: 'Burkina Faso',
    countryDialCode: '+226',
    emoji: '🇧🇫',
    code: 'BF',
  },
  {
    countryName: 'Burundi',
    countryDialCode: '+257',
    emoji: '🇧🇮',
    code: 'BI',
  },
  {
    countryName: 'Cambodia',
    countryDialCode: '+855',
    emoji: '🇰🇭',
    code: 'KH',
  },
  {
    countryName: 'Cameroon',
    countryDialCode: '+237',
    emoji: '🇨🇲',
    code: 'CM',
  },
  {
    countryName: 'Canada',
    countryDialCode: '+1',
    emoji: '🇨🇦',
    code: 'CA',
  },
  {
    countryName: 'Cape Verde',
    countryDialCode: '+238',
    emoji: '🇨🇻',
    code: 'CV',
  },
  {
    countryName: 'Cayman Islands',
    countryDialCode: '+345',
    emoji: '🇰🇾',
    code: 'KY',
  },
  {
    countryName: 'Central African Republic',
    countryDialCode: '+236',
    emoji: '🇨🇫',
    code: 'CF',
  },
  {
    countryName: 'Chad',
    countryDialCode: '+235',
    emoji: '🇹🇩',
    code: 'TD',
  },
  {
    countryName: 'Chile',
    countryDialCode: '+56',
    emoji: '🇨🇱',
    code: 'CL',
  },
  {
    countryName: 'China',
    countryDialCode: '+86',
    emoji: '🇨🇳',
    code: 'CN',
  },
  {
    countryName: 'Christmas Island',
    countryDialCode: '+61',
    emoji: '🇨🇽',
    code: 'CX',
  },
  {
    countryName: 'Cocos (Keeling) Islands',
    countryDialCode: '+61',
    emoji: '🇨🇨',
    code: 'CC',
  },
  {
    countryName: 'Colombia',
    countryDialCode: '+57',
    emoji: '🇨🇴',
    code: 'CO',
  },
  {
    countryName: 'Comoros',
    countryDialCode: '+269',
    emoji: '🇰🇲',
    code: 'KM',
  },
  {
    countryName: 'Congo',
    countryDialCode: '+242',
    emoji: '🇨🇬',
    code: 'CG',
  },
  {
    countryName: 'Congo, The Democratic Republic of the Congo',
    countryDialCode: '+243',
    emoji: '🇨🇩',
    code: 'CD',
  },
  {
    countryName: 'Cook Islands',
    countryDialCode: '+682',
    emoji: '🇨🇰',
    code: 'CK',
  },
  {
    countryName: 'Costa Rica',
    countryDialCode: '+506',
    emoji: '🇨🇷',
    code: 'CR',
  },
  {
    countryName: "Cote d'Ivoire",
    countryDialCode: '+225',
    emoji: '🇨🇮',
    code: 'CI',
  },
  {
    countryName: 'Croatia',
    countryDialCode: '+385',
    emoji: '🇭🇷',
    code: 'HR',
  },
  {
    countryName: 'Cuba',
    countryDialCode: '+53',
    emoji: '🇨🇺',
    code: 'CU',
  },
  {
    countryName: 'Cyprus',
    countryDialCode: '+357',
    emoji: '🇨🇾',
    code: 'CY',
  },
  {
    countryName: 'Czech Republic',
    countryDialCode: '+420',
    emoji: '🇨🇿',
    code: 'CZ',
  },
  {
    countryName: 'Denmark',
    countryDialCode: '+45',
    emoji: '🇩🇰',
    code: 'DK',
  },
  {
    countryName: 'Djibouti',
    countryDialCode: '+253',
    emoji: '🇩🇯',
    code: 'DJ',
  },
  {
    countryName: 'Dominica',
    countryDialCode: '+1767',
    emoji: '🇩🇲',
    code: 'DM',
  },
  {
    countryName: 'Dominican Republic',
    countryDialCode: '+1849',
    emoji: '🇩🇴',
    code: 'DO',
  },
  {
    countryName: 'Ecuador',
    countryDialCode: '+593',
    emoji: '🇪🇨',
    code: 'EC',
  },
  {
    countryName: 'Egypt',
    countryDialCode: '+20',
    emoji: '🇪🇬',
    code: 'EG',
  },
  {
    countryName: 'El Salvador',
    countryDialCode: '+503',
    emoji: '🇸🇻',
    code: 'SV',
  },
  {
    countryName: 'Equatorial Guinea',
    countryDialCode: '+240',
    emoji: '🇬🇶',
    code: 'GQ',
  },
  {
    countryName: 'Eritrea',
    countryDialCode: '+291',
    emoji: '🇪🇷',
    code: 'ER',
  },
  {
    countryName: 'Estonia',
    countryDialCode: '+372',
    emoji: '🇪🇪',
    code: 'EE',
  },
  {
    countryName: 'Ethiopia',
    countryDialCode: '+251',
    emoji: '🇪🇹',
    code: 'ET',
  },
  {
    countryName: 'Falkland Islands (Malvinas)',
    countryDialCode: '+500',
    emoji: '🇫🇰',
    code: 'FK',
  },
  {
    countryName: 'Faroe Islands',
    countryDialCode: '+298',
    emoji: '🇫🇴',
    code: 'FO',
  },
  {
    countryName: 'Fiji',
    countryDialCode: '+679',
    emoji: '🇫🇯',
    code: 'FJ',
  },
  {
    countryName: 'Finland',
    countryDialCode: '+358',
    emoji: '🇫🇮',
    code: 'FI',
  },
  {
    countryName: 'France',
    countryDialCode: '+33',
    emoji: '🇫🇷',
    code: 'FR',
  },
  {
    countryName: 'French Guiana',
    countryDialCode: '+594',
    emoji: '🇬🇫',
    code: 'GF',
  },
  {
    countryName: 'French Polynesia',
    countryDialCode: '+689',
    emoji: '🇵🇫',
    code: 'PF',
  },
  {
    countryName: 'Gabon',
    countryDialCode: '+241',
    emoji: '🇬🇦',
    code: 'GA',
  },
  {
    countryName: 'Gambia',
    countryDialCode: '+220',
    emoji: '🇬🇲',
    code: 'GM',
  },
  {
    countryName: 'Georgia',
    countryDialCode: '+995',
    emoji: '🇬🇪',
    code: 'GE',
  },
  {
    countryName: 'Germany',
    countryDialCode: '+49',
    emoji: '🇩🇪',
    code: 'DE',
  },
  {
    countryName: 'Ghana',
    countryDialCode: '+233',
    emoji: '🇬🇭',
    code: 'GH',
  },
  {
    countryName: 'Gibraltar',
    countryDialCode: '+350',
    emoji: '🇬🇮',
    code: 'GI',
  },
  {
    countryName: 'Greece',
    countryDialCode: '+30',
    emoji: '🇬🇷',
    code: 'GR',
  },
  {
    countryName: 'Greenland',
    countryDialCode: '+299',
    emoji: '🇬🇱',
    code: 'GL',
  },
  {
    countryName: 'Grenada',
    countryDialCode: '+1473',
    emoji: '🇬🇩',
    code: 'GD',
  },
  {
    countryName: 'Guadeloupe',
    countryDialCode: '+590',
    emoji: '🇬🇵',
    code: 'GP',
  },
  {
    countryName: 'Guam',
    countryDialCode: '+1671',
    emoji: '🇬🇺',
    code: 'GU',
  },
  {
    countryName: 'Guatemala',
    countryDialCode: '+502',
    emoji: '🇬🇹',
    code: 'GT',
  },
  {
    countryName: 'Guernsey',
    countryDialCode: '+44',
    emoji: '🇬🇬',
    code: 'GG',
  },
  {
    countryName: 'Guinea',
    countryDialCode: '+224',
    emoji: '🇬🇳',
    code: 'GN',
  },
  {
    countryName: 'Guinea-Bissau',
    countryDialCode: '+245',
    emoji: '🇬🇼',
    code: 'GW',
  },
  {
    countryName: 'Guyana',
    countryDialCode: '+595',
    emoji: '🇬🇾',
    code: 'GY',
  },
  {
    countryName: 'Haiti',
    countryDialCode: '+509',
    emoji: '🇭🇹',
    code: 'HT',
  },
  {
    countryName: 'Holy See (Vatican City State)',
    countryDialCode: '+379',
    emoji: '🇻🇦',
    code: 'VA',
  },
  {
    countryName: 'Honduras',
    countryDialCode: '+504',
    emoji: '🇭🇳',
    code: 'HN',
  },
  {
    countryName: 'Hong Kong',
    countryDialCode: '+852',
    emoji: '🇭🇰',
    code: 'HK',
  },
  {
    countryName: 'Hungary',
    countryDialCode: '+36',
    emoji: '🇭🇺',
    code: 'HU',
  },
  {
    countryName: 'Iceland',
    countryDialCode: '+354',
    emoji: '🇮🇸',
    code: 'IS',
  },
  {
    countryName: 'India',
    countryDialCode: '+91',
    emoji: '🇮🇳',
    code: 'IN',
  },
  {
    countryName: 'Indonesia',
    countryDialCode: '+62',
    emoji: '🇮🇩',
    code: 'ID',
  },
  {
    countryName: 'Iran, Islamic Republic of Persian Gulf',
    countryDialCode: '+98',
    emoji: '🇮🇷',
    code: 'IR',
  },
  {
    countryName: 'Iraq',
    countryDialCode: '+964',
    emoji: '🇮🇷',
    code: 'IQ',
  },
  {
    countryName: 'Ireland',
    countryDialCode: '+353',
    emoji: '🇮🇪',
    code: 'IE',
  },
  {
    countryName: 'Isle of Man',
    countryDialCode: '+44',
    emoji: '🇮🇲',
    code: 'IM',
  },
  {
    countryName: 'Israel',
    countryDialCode: '+972',
    emoji: '🇮🇱',
    code: 'IL',
  },
  {
    countryName: 'Italy',
    countryDialCode: '+39',
    emoji: '🇮🇹',
    code: 'IT',
  },
  {
    countryName: 'Jamaica',
    countryDialCode: '+1876',
    emoji: '🇯🇲',
    code: 'JM',
  },
  {
    countryName: 'Japan',
    countryDialCode: '+81',
    emoji: '🇯🇵',
    code: 'JP',
  },
  {
    countryName: 'Jersey',
    countryDialCode: '+44',
    emoji: '🇯🇪',
    code: 'JE',
  },
  {
    countryName: 'Jordan',
    countryDialCode: '+962',
    emoji: '🇯🇴',
    code: 'JO',
  },
  {
    countryName: 'Kazakhstan',
    countryDialCode: '+77',
    emoji: '🇰🇿',
    code: 'KZ',
  },
  {
    countryName: 'Kenya',
    countryDialCode: '+254',
    emoji: '🇰🇪',
    code: 'KE',
  },
  {
    countryName: 'Kiribati',
    countryDialCode: '+686',
    emoji: '🇰🇮',
    code: 'KI',
  },
  {
    countryName: "Korea, Democratic People's Republic of Korea",
    countryDialCode: '+850',
    emoji: '🇰🇵',
    code: 'KP',
  },
  {
    countryName: 'Korea, Republic of South Korea',
    countryDialCode: '+82',
    emoji: '🇰🇷',
    code: 'KR',
  },
  {
    countryName: 'Kuwait',
    countryDialCode: '+965',
    emoji: '🇰🇼',
    code: 'KW',
  },
  {
    countryName: 'Kyrgyzstan',
    countryDialCode: '+996',
    emoji: '🇰🇬',
    code: 'KG',
  },
  {
    countryName: 'Laos',
    countryDialCode: '+856',
    emoji: '🇱🇦',
    code: 'LA',
  },
  {
    countryName: 'Latvia',
    countryDialCode: '+371',
    emoji: '🇱🇻',
    code: 'LV',
  },
  {
    countryName: 'Lebanon',
    countryDialCode: '+961',
    emoji: '🇱🇧',
    code: 'LB',
  },
  {
    countryName: 'Lesotho',
    countryDialCode: '+266',
    emoji: '🇱🇸',
    code: 'LS',
  },
  {
    countryName: 'Liberia',
    countryDialCode: '+231',
    emoji: '🇱🇷',
    code: 'LR',
  },
  {
    countryName: 'Libyan Arab Jamahiriya',
    countryDialCode: '+218',
    emoji: '🇱🇾',
    code: 'LY',
  },
  {
    countryName: 'Liechtenstein',
    countryDialCode: '+423',
    emoji: '🇱🇮',
    code: 'LI',
  },
  {
    countryName: 'Lithuania',
    countryDialCode: '+370',
    emoji: '🇱🇹',
    code: 'LT',
  },
  {
    countryName: 'Luxembourg',
    countryDialCode: '+352',
    emoji: '🇱🇺',
    code: 'LU',
  },
  {
    countryName: 'Macao',
    countryDialCode: '+853',
    emoji: '🇲🇴',
    code: 'MO',
  },
  {
    countryName: 'Macedonia',
    countryDialCode: '+389',
    emoji: '🇲🇰',
    code: 'MK',
  },
  {
    countryName: 'Madagascar',
    countryDialCode: '+261',
    emoji: '🇲🇬',
    code: 'MG',
  },
  {
    countryName: 'Malawi',
    countryDialCode: '+265',
    emoji: '🇲🇼',
    code: 'MW',
  },
  {
    countryName: 'Malaysia',
    countryDialCode: '+60',
    emoji: '🇲🇾',
    code: 'MY',
  },
  {
    countryName: 'Maldives',
    countryDialCode: '+960',
    emoji: '🇲🇻',
    code: 'MV',
  },
  {
    countryName: 'Mali',
    countryDialCode: '+223',
    emoji: '🇲🇱',
    code: 'ML',
  },
  {
    countryName: 'Malta',
    countryDialCode: '+356',
    emoji: '🇲🇹',
    code: 'MT',
  },
  {
    countryName: 'Marshall Islands',
    countryDialCode: '+692',
    emoji: '🇲🇭',
    code: 'MH',
  },
  {
    countryName: 'Martinique',
    countryDialCode: '+596',
    emoji: '🇲🇶',
    code: 'MQ',
  },
  {
    countryName: 'Mauritania',
    countryDialCode: '+222',
    emoji: '🇲🇷',
    code: 'MR',
  },
  {
    countryName: 'Mauritius',
    countryDialCode: '+230',
    emoji: '🇲🇺',
    code: 'MU',
  },
  {
    countryName: 'Mayotte',
    countryDialCode: '+262',
    emoji: '🇾🇹',
    code: 'YT',
  },
  {
    countryName: 'Mexico',
    countryDialCode: '+52',
    emoji: '🇲🇽',
    code: 'MX',
  },
  {
    countryName: 'Micronesia, Federated States of Micronesia',
    countryDialCode: '+691',
    emoji: '🇫🇲',
    code: 'FM',
  },
  {
    countryName: 'Moldova',
    countryDialCode: '+373',
    emoji: '🇲🇩',
    code: 'MD',
  },
  {
    countryName: 'Monaco',
    countryDialCode: '+377',
    emoji: '🇲🇨',
    code: 'MC',
  },
  {
    countryName: 'Mongolia',
    countryDialCode: '+976',
    emoji: '🇲🇳',
    code: 'MN',
  },
  {
    countryName: 'Montenegro',
    countryDialCode: '+382',
    emoji: '🇲🇪',
    code: 'ME',
  },
  {
    countryName: 'Montserrat',
    countryDialCode: '+1664',
    emoji: '🇲🇸',
    code: 'MS',
  },
  {
    countryName: 'Morocco',
    countryDialCode: '+212',
    emoji: '🇲🇦',
    code: 'MA',
  },
  {
    countryName: 'Mozambique',
    countryDialCode: '+258',
    emoji: '🇲🇿',
    code: 'MZ',
  },
  {
    countryName: 'Myanmar',
    countryDialCode: '+95',
    emoji: '🇲🇲',
    code: 'MM',
  },
  {
    countryName: 'Namibia',
    emoji: '🇳🇦',
    countryDialCode: '+264',
    code: 'NA',
  },
  {
    countryName: 'Nauru',
    countryDialCode: '+674',
    emoji: '🇳🇷',
    code: 'NR',
  },
  {
    countryName: 'Nepal',
    countryDialCode: '+977',
    emoji: '🇳🇵',
    code: 'NP',
  },
  {
    countryName: 'Netherlands',
    countryDialCode: '+31',
    emoji: '🇳🇱',
    code: 'NL',
  },
  {
    countryName: 'Netherlands Antilles',
    countryDialCode: '+599',
    emoji: '🇧🇶',
    code: 'AN',
  },
  {
    countryName: 'New Caledonia',
    countryDialCode: '+687',
    emoji: '🇳🇨',
    code: 'NC',
  },
  {
    countryName: 'New Zealand',
    countryDialCode: '+64',
    emoji: '🇳🇿',
    code: 'NZ',
  },
  {
    countryName: 'Nicaragua',
    countryDialCode: '+505',
    emoji: '🇳🇮',
    code: 'NI',
  },
  {
    countryName: 'Niger',
    countryDialCode: '+227',
    emoji: '🇳🇪',
    code: 'NE',
  },
  {
    countryName: 'Nigeria',
    countryDialCode: '+234',
    emoji: '🇳🇬',
    code: 'NG',
  },
  {
    countryName: 'Niue',
    countryDialCode: '+683',
    emoji: '🇳🇺',
    code: 'NU',
  },
  {
    countryName: 'Norfolk Island',
    countryDialCode: '+672',
    emoji: '🇳🇫',
    code: 'NF',
  },
  {
    countryName: 'Northern Mariana Islands',
    countryDialCode: '+1670',
    emoji: '🇲🇵',
    code: 'MP',
  },
  {
    countryName: 'Norway',
    countryDialCode: '+47',
    emoji: '🇳🇴',
    code: 'NO',
  },
  {
    countryName: 'Oman',
    countryDialCode: '+968',
    emoji: '🇴🇲',
    code: 'OM',
  },
  {
    countryName: 'Pakistan',
    countryDialCode: '+92',
    emoji: '🇵🇰',
    code: 'PK',
  },
  {
    countryName: 'Palau',
    countryDialCode: '+680',
    emoji: '🇵🇼',
    code: 'PW',
  },
  {
    countryName: 'Palestinian Territory, Occupied',
    countryDialCode: '+970',
    emoji: '🇵🇸',
    code: 'PS',
  },
  {
    countryName: 'Panama',
    countryDialCode: '+507',
    emoji: '🇵🇦',
    code: 'PA',
  },
  {
    countryName: 'Papua New Guinea',
    countryDialCode: '+675',
    emoji: '🇵🇬',
    code: 'PG',
  },
  {
    countryName: 'Paraguay',
    countryDialCode: '+595',
    emoji: '🇵🇾',
    code: 'PY',
  },
  {
    countryName: 'Peru',
    countryDialCode: '+51',
    emoji: '🇵🇪',
    code: 'PE',
  },
  {
    countryName: 'Philippines',
    countryDialCode: '+63',
    emoji: '🇵🇭',
    code: 'PH',
  },
  {
    countryName: 'Pitcairn',
    countryDialCode: '+872',
    emoji: '🇵🇳',
    code: 'PN',
  },
  {
    countryName: 'Poland',
    countryDialCode: '+48',
    emoji: '🇵🇱',
    code: 'PL',
  },
  {
    countryName: 'Portugal',
    countryDialCode: '+351',
    emoji: '🇵🇹',
    code: 'PT',
  },
  {
    countryName: 'Puerto Rico',
    countryDialCode: '+1939',
    emoji: '🇵🇷',
    code: 'PR',
  },
  {
    countryName: 'Qatar',
    countryDialCode: '+974',
    emoji: '🇶🇦',
    code: 'QA',
  },
  {
    countryName: 'Romania',
    countryDialCode: '+40',
    emoji: '🇷🇴',
    code: 'RO',
  },
  {
    countryName: 'Russia',
    countryDialCode: '+7',
    emoji: '🇷🇺',
    code: 'RU',
  },
  {
    countryName: 'Rwanda',
    countryDialCode: '+250',
    emoji: '🇷🇼',
    code: 'RW',
  },
  {
    countryName: 'Reunion',
    countryDialCode: '+262',
    emoji: '🇷🇪',
    code: 'RE',
  },
  {
    countryName: 'Saint Barthelemy',
    countryDialCode: '+590',
    emoji: '🇧🇱',
    code: 'BL',
  },
  {
    countryName: 'Saint Helena, Ascension and Tristan Da Cunha',
    countryDialCode: '+290',
    emoji: '🇸🇭',
    code: 'SH',
  },
  {
    countryName: 'Saint Kitts and Nevis',
    countryDialCode: '+1869',
    emoji: '🇰🇳',
    code: 'KN',
  },
  {
    countryName: 'Saint Lucia',
    countryDialCode: '+1758',
    emoji: '🇱🇨',
    code: 'LC',
  },
  {
    countryName: 'Saint Martin',
    countryDialCode: '+590',
    emoji: '🇲🇫',
    code: 'MF',
  },
  {
    countryName: 'Saint Pierre and Miquelon',
    countryDialCode: '+508',
    emoji: '🇵🇲',
    code: 'PM',
  },
  {
    countryName: 'Saint Vincent and the Grenadines',
    countryDialCode: '+1784',
    emoji: '🇻🇨',
    code: 'VC',
  },
  {
    countryName: 'Samoa',
    countryDialCode: '+685',
    emoji: '🇼🇸',
    code: 'WS',
  },
  {
    countryName: 'San Marino',
    countryDialCode: '+378',
    emoji: '🇸🇲',
    code: 'SM',
  },
  {
    countryName: 'Sao Tome and Principe',
    countryDialCode: '+239',
    emoji: '🇸🇹',
    code: 'ST',
  },
  {
    countryName: 'Saudi Arabia',
    countryDialCode: '+966',
    emoji: '🇸🇦',
    code: 'SA',
  },
  {
    countryName: 'Senegal',
    countryDialCode: '+221',
    emoji: '🇸🇳',
    code: 'SN',
  },
  {
    countryName: 'Serbia',
    countryDialCode: '+381',
    emoji: '🇷🇸',
    code: 'RS',
  },
  {
    countryName: 'Seychelles',
    countryDialCode: '+248',
    emoji: '🇸🇨',
    code: 'SC',
  },
  {
    countryName: 'Sierra Leone',
    countryDialCode: '+232',
    emoji: '🇸🇱',
    code: 'SL',
  },
  {
    countryName: 'Singapore',
    countryDialCode: '+65',
    emoji: '🇸🇬',
    code: 'SG',
  },
  {
    countryName: 'Slovakia',
    countryDialCode: '+421',
    emoji: '🇸🇰',
    code: 'SK',
  },
  {
    countryName: 'Slovenia',
    countryDialCode: '+386',
    emoji: '🇸🇮',
    code: 'SI',
  },
  {
    countryName: 'Solomon Islands',
    countryDialCode: '+677',
    emoji: '🇸🇧',
    code: 'SB',
  },
  {
    countryName: 'Somalia',
    countryDialCode: '+252',
    emoji: '🇸🇴',
    code: 'SO',
  },
  {
    countryName: 'South Africa',
    countryDialCode: '+27',
    emoji: '🇿🇦',
    code: 'ZA',
  },
  {
    countryName: 'South Sudan',
    countryDialCode: '+211',
    emoji: '🇸🇸',
    code: 'SS',
  },
  {
    countryName: 'South Georgia and the South Sandwich Islands',
    countryDialCode: '+500',
    emoji: '🇬🇸',
    code: 'GS',
  },
  {
    countryName: 'Spain',
    countryDialCode: '+34',
    emoji: '🇪🇸',
    code: 'ES',
  },
  {
    countryName: 'Sri Lanka',
    countryDialCode: '+94',
    emoji: '🇱🇰',
    code: 'LK',
  },
  {
    countryName: 'Sudan',
    countryDialCode: '+249',
    emoji: '🇸🇩',
    code: 'SD',
  },
  {
    countryName: 'Suriname',
    countryDialCode: '+597',
    emoji: '🇸🇷',
    code: 'SR',
  },
  {
    countryName: 'Svalbard and Jan Mayen',
    countryDialCode: '+47',
    emoji: '🇸🇯',
    code: 'SJ',
  },
  {
    countryName: 'Swaziland',
    countryDialCode: '+268',
    emoji: '🇸🇿',
    code: 'SZ',
  },
  {
    countryName: 'Sweden',
    countryDialCode: '+46',
    emoji: '🇸🇪',
    code: 'SE',
  },
  {
    countryName: 'Switzerland',
    countryDialCode: '+41',
    emoji: '🇨🇭',
    code: 'CH',
  },
  {
    countryName: 'Syrian Arab Republic',
    countryDialCode: '+963',
    emoji: '🇸🇾',
    code: 'SY',
  },
  {
    countryName: 'Taiwan',
    countryDialCode: '+886',
    emoji: '🇹🇼',
    code: 'TW',
  },
  {
    countryName: 'Tajikistan',
    countryDialCode: '+992',
    emoji: '🇹🇯',
    code: 'TJ',
  },
  {
    countryName: 'Tanzania, United Republic of Tanzania',
    countryDialCode: '+255',
    emoji: '🇹🇿',
    code: 'TZ',
  },
  {
    countryName: 'Thailand',
    countryDialCode: '+66',
    emoji: '🇹🇭',
    code: 'TH',
  },
  {
    countryName: 'Timor-Leste',
    countryDialCode: '+670',
    emoji: '🇹🇱',
    code: 'TL',
  },
  {
    countryName: 'Togo',
    countryDialCode: '+228',
    emoji: '🇹🇬',
    code: 'TG',
  },
  {
    countryName: 'Tokelau',
    countryDialCode: '+690',
    emoji: '🇹🇰',
    code: 'TK',
  },
  {
    countryName: 'Tonga',
    countryDialCode: '+676',
    emoji: '🇹🇴',
    code: 'TO',
  },
  {
    countryName: 'Trinidad and Tobago',
    countryDialCode: '+1868',
    emoji: '🇹🇹',
    code: 'TT',
  },
  {
    countryName: 'Tunisia',
    countryDialCode: '+216',
    emoji: '🇹🇳',
    code: 'TN',
  },
  {
    countryName: 'Turkey',
    countryDialCode: '+90',
    emoji: '🇹🇷',
    code: 'TR',
  },
  {
    countryName: 'Turkmenistan',
    countryDialCode: '+993',
    emoji: '🇹🇲',
    code: 'TM',
  },
  {
    countryName: 'Turks and Caicos Islands',
    countryDialCode: '+1649',
    emoji: '🇹🇨',
    code: 'TC',
  },
  {
    countryName: 'Tuvalu',
    countryDialCode: '+688',
    emoji: '🇹🇻',
    code: 'TV',
  },
  {
    countryName: 'Uganda',
    countryDialCode: '+256',
    emoji: '🇺🇬',
    code: 'UG',
  },
  {
    countryName: 'Ukraine',
    countryDialCode: '+380',
    emoji: '🇺🇦',
    code: 'UA',
  },
  {
    countryName: 'United Arab Emirates',
    countryDialCode: '+971',
    emoji: '🇦🇪',
    code: 'AE',
  },
  {
    countryName: 'United Kingdom',
    countryDialCode: '+44',
    emoji: '🇬🇧',
    code: 'GB',
  },
  {
    countryName: 'United States',
    countryDialCode: '+1',
    emoji: '🇺🇸',
    code: 'US',
  },
  {
    countryName: 'Uruguay',
    countryDialCode: '+598',
    emoji: '🇺🇾',
    code: 'UY',
  },
  {
    countryName: 'Uzbekistan',
    countryDialCode: '+998',
    emoji: '🇺🇿',
    code: 'UZ',
  },
  {
    countryName: 'Vanuatu',
    countryDialCode: '+678',
    emoji: '🇻🇺',
    code: 'VU',
  },
  {
    countryName: 'Venezuela, Bolivarian Republic of Venezuela',
    countryDialCode: '+58',
    emoji: '🇻🇪',
    code: 'VE',
  },
  {
    countryName: 'Vietnam',
    countryDialCode: '+84',
    emoji: '🇻🇳',
    code: 'VN',
  },
  {
    countryName: 'Virgin Islands, British',
    countryDialCode: '+1284',
    emoji: '🇻🇬',
    code: 'VG',
  },
  {
    countryName: 'Virgin Islands, U.S.',
    countryDialCode: '+1340',
    emoji: '🇻🇮',
    code: 'VI',
  },
  {
    countryName: 'Wallis and Futuna',
    countryDialCode: '+681',
    emoji: '🇼🇫',
    code: 'WF',
  },
  {
    countryName: 'Yemen',
    countryDialCode: '+967',
    emoji: '🇾🇪',
    code: 'YE',
  },
  {
    countryName: 'Zambia',
    countryDialCode: '+260',
    emoji: '🇿🇲',
    code: 'ZM',
  },
  {
    countryName: 'Zimbabwe',
    countryDialCode: '+263',
    emoji: '🇿🇼',
    code: 'ZW',
  },
];

export const onBoardingData = [
  {
    id: 1,
    path: IMAGES.onBoarding1,
  },
  {id: 2, path: IMAGES.onBoarding2},
  {id: 3, path: IMAGES.onBoarding3},
];
