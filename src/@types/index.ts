import { ColumnType } from 'antd/es/table';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import dayjs from 'dayjs';
export interface InputTypeInterface {
  width: number;
  height: number;
  placeholder: string;
  border: string;
  HandleChangeInput(event: React.ChangeEvent<HTMLInputElement>): void;
}
export interface ButtonTypeInterface {
  HandleChangeButton(): void;
}
export interface AccountInferface {
  key: string;
  myFullName: string;
  userName: string;
  phoneNumber: string;
  password: string;
  email: string;
  role: string;
  img: string;
  status: boolean;
}
export interface AddDataAccountInferface {
  myFullName: string;
  userName: string;
  phoneNumber: string;
  password: string;
  email: string;
  role: string;
  img?: string;
  status: boolean;
}
export interface UpdateDataAccountInferface {
  key: string;
  myFullName: string;
  userName: string;
  phoneNumber: string;
  password: string;
  email: string;
  role: string;
  img?: string;
  status: boolean;
}
export interface ListAccountInterface {
  Account: AccountInferface[];
  Device: DeviceInterface[];
  Service: ServiceInterface[];
  ServiceDetail: DataServiceDetailInterface[];
  History: HistoryInterface[];
}
export interface AccountLoginInterface {
  userName: string;
  password: string;
}
export interface ForgetPasswordType {
  activeBorder: boolean;
  message: string;
  HandleClickContinue: (emailInput: string) => void;
}
export interface ResetPasswordType {
  AccountId: string;
}
export interface ResetPasswordInterface {
  AccountId: string;
  password: string;
}

export interface BDCapSoType {
  icons: number;
  activeColor: string;
  text: string;
  percent: number;
  percentStatus: boolean;
  data: number;
}
export interface TextNavbarType {
  textLv1: string;
  textLv2: string;
  textLv3: string;
}
export interface CustomSelectType {
  width: number;
  height: number;
  data: string[];
  HandleChooseSelect: (select: string) => void;
}
//Device
export interface DeviceInterface {
  key: string;
  addressIP: string;
  connect?: boolean;
  deviceId: string;
  deviceName: string;
  deviceType: string;
  online?: boolean;
  password: string;
  userName: string;
  userService: string;
}
//add
export interface AddDeviceModalInterface {
  addressIP: string;
  deviceId: string;
  deviceName: string;
  deviceType: string;
  password: string;
  userName: string;
  userService: string;
}

//Type DS thiet bi
export interface ListDeviceInterface {
  HandleClickAddDevice: () => void;
  HandleClickDescription: (key: string) => void;
  HandleClickUpdate: (key: string) => void;
}
export interface AddDeviceInterface {
  HandleClickCancelAddDevice: () => void;
  HandleClickOkAddDevice: (
    deviceId: string,
    deviceType: string,
    deviceName: string,
    userName: string,
    addressIP: string,
    password: string,
    userDevice: string,
  ) => void;
}
//type chi tiet thiet bi
export interface DescriptionDeviceInterface {
  id: string;
  HandleClickUpdateDevice: (key: string) => void;
  HandleClickGoBackDevice: () => void;
}
//type cap nhap thiet bi
export interface UpdateDeviceInterface {
  id: string;
  HandleClickCancelUpdateDevice: () => void;
  HandleClickOkUpdateDevice: (
    deviceId: string,
    deviceType: string,
    deviceName: string,
    userName: string,
    addressIP: string,
    password: string,
    userDevice: string,
    listUserDevice: string[],
  ) => void;
  // HandleClickUpdateDevice: (key: string) => void;
}
//services
export interface ServiceInterface {
  key: string;
  serviceId: string;
  serviceName: string;
  online?: boolean;
  describe: string;
  rule: string[];
}
export interface ListServiceInterface {
  HandleClickAddService: () => void;
  HandleClickDescriptionService: (id: string) => void;
  HandleClickUpdateService: (id: string) => void;
}
export interface AddServiceInterface {
  HandleClickCancelAddService: () => void;
  HandleClickOkAddService: (
    serviceId: string,
    serviceName: string,
    describe: string,
    rule: string[],
  ) => void;
}
export interface DetailServiceInterface {
  HandleClickUpdate: () => void;
  HandleClickGoBack: () => void;
  id: string;
}
//update service
export interface UpdateServiceInterface {
  HandleClickCancelUpdateService: () => void;
  HandleClickOkUpdateService: (
    serviceId: string,
    serviceName: string,
    describe: string,
    rule: string[],
  ) => void;
  id: string;
}
//////////////////My profile & bell
export interface MyProfileInterface {
  HandleClickMyProfile: () => void;
  HandleClickBell: () => void;
  myFullName: string | undefined;
}
//data update service
export interface UpdateDataServiceInterface {
  key: string;
  serviceId: string;
  serviceName: string;
  describe: string;
  rule: string[];
}
//data add service
export interface AddDataServiceInterface {
  serviceId: string;
  serviceName: string;
  describe: string;
  rule: string[];
  online?: boolean;
}
//cap so
//service detail
export interface DataServiceDetailInterface {
  key: string;
  serviceId: string;
  serviceName: string;
  status: string;
  stt: string;
  date: string;
  toDate: string;
  customerName: string;
  email: string;
  phoneNumber: string;
  source: string;
  time: string;
  toTime: string;
}
export interface DataAddServiceDetailInterface {
  serviceId: string;
  serviceName: string;
  status?: string;
  stt: string;
  date: Date;
  toDate: Date;
  customerName: string;
  email: string;
  phoneNumber: string;
  source: string;
}
export interface AddCapSoInterface {
  HandleClickAddCapSo: () => void;
  HandleClickChiTietCapSo: (id: string) => void;
}
export interface AddDataCapSoInterface {
  HandleClickAddCapSo: (
    capso: string,
    dateTimeNow: Date,
    serviceId: string,
    serviceName: string,
  ) => void;
  HandleClickCancelCapSo: () => void;
}
export interface AddProfileCustomerInterface {
  HandleClickContinue: (customerName: string, email: string, phoneNumber: string) => void;
  HandleClickCancel: () => void;
  customerName: string;
  email: string;
  phoneNumber: string;
}
//history
export interface HistoryInterface {
  key: string;
  userName: string;
  date: string;
  time: string;
}
export interface AddHistoryInterface {
  userName: string;
  dateTime: Date;
}
//modal in so
export interface ModalInSoInterface {
  open: boolean;
  HandleClickCacel: () => void;
  stt: string;
  dateTime: Date | undefined;
  toDateTime: Date | undefined;
  servicerName: string;
  couter: string;
}
export interface DetailCapSoInterface {
  id: string;
  HandleClickGoBack: () => void;
}

///role
export interface RoleInterface {
  key: string;
  roleName: string;
  describe: string;
  authorization: string[];
  authorization2: string[];
}
export interface AddRoleInterface {
  roleName: string;
  describe: string;
  authorization: string[];
  authorization2: string[];
}
export interface DSVaiTroInterface {
  HandleClickAddRole: () => void;
  HandleClickUpdateRole: (id: string) => void;
}
export interface AddModalRoleInterface {
  HandleClickOkAddRole: (
    roleName: string,
    describe: string,
    authorization: string[],
    authorization2: string[],
  ) => void;
  HandleClickCancelAddRole: () => void;
}
export interface UpdateModalRoleInterface {
  HandleClickOkUpdateRole: (
    roleName: string,
    describe: string,
    authorization: string[],
    authorization2: string[],
  ) => void;
  HandleClickCancelUpdateRole: () => void;
  id: string;
}
//account
export interface DSTaiKhoanInterface {
  HandleClickAddAccount: () => void;
  HandleClickUpdateAccount: (id: string) => void;
}
export interface AddTaiKhoanInterface {
  HandleClickCancelAddAccount: () => void;
  HandleClickOkAddAccount: (
    myFullName: string,
    userName: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string,
    email: string,
    role: string,
    status: string,
  ) => void;
}
export interface UpdateTaiKhoanInterface {
  HandleClickCancelUpdateAccount: () => void;
  HandleClickOkUpdateAccount: (
    myFullName: string,
    userName: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string,
    email: string,
    role: string,
    status: string,
  ) => void;
  id: string;
}
//history users
export interface UserHistoryInterface {
  key: string;
  userName: string;
  addressIP: string;
  operation: string;
  date: string;
  time: string;
}
export interface AddUserHistoryInterface {
  userName: string;
  addressIP: string;
  operation: string;
  dateTime: Date;
}
///bell
export interface BellInterface {
  open: boolean;
  HandleClickCancel: () => void;
}
export interface ModalFilterInterface {
  open: boolean;
  title: string;
  data: string[];
  text: string;
  HandleClickCancel: () => void;
  HandleClickSetValue: (event: string) => void;
}
export interface ModalCheckedInterface {
  open: boolean;
  title: string;
  data: string[];
  text: string[];
  HandleClickCancel: () => void;
  HandleClickSetValue: (event: CheckboxValueType[]) => void;
}
export interface ChartInterface {
  select: string;
}
export interface CustomDoughutInterface {
  percent: number;
  colorOne: string;
  colorTwo: string;
}
export interface CustomDoughutThreeInterface {
  percent: number;
  percentTwo: number;
  colorOne: string;
  colorTwo: string;
  colorThree: string;
}
export interface DatePicketInterface {
  HandleClickDate: (value: dayjs.Dayjs) => void;
  setDate: string;
}
