import { useEffect, useState } from 'react';
import DanhSachDichVu from '../pack/DSDichVu';
import ThemDichVu from '../pack/ThemDichVu';
import ChiTietDichVu from '../pack/ChiTietDichVu';
import CapNhapDichVu from '../pack/CapNhapDichVu';
import {
  AccountInferface,
  AddDataServiceInterface,
  AddUserHistoryInterface,
  UpdateDataServiceInterface,
} from '../../../../@types';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/customRedux';
import {
  AccountLogin,
  AddDataServices,
  AddDataUserHistory,
  GetDataRoles,
  UpdateDataServices,
} from '../../../../core/redux';
import { isAuthorization1 } from '../../../../shared/isLogin';

export default function ViewDichVu() {
  const dateTimeNow = new Date();

  const [userName, setUserName] = useState<string>('');
  const dispatch = useAppDispatch();

  //check authorization
  const InfoAccount = useAppSelector(state => state.Account.Account);
  const DataRole = useAppSelector(state => state.Role.Role);
  useEffect(() => {
    dispatch(AccountLogin());
    dispatch(GetDataRoles());
  }, [dispatch]);
  const [account, setAccount] = useState<AccountInferface>();
  const [checkAuth, setCheckAuth] = useState<boolean>();
  useEffect(() => {
    const token = localStorage.getItem('tokenUser');
    const findAccount = InfoAccount.find(acc => acc.key === token);
    if (findAccount) {
      setAccount(findAccount);
    }
  }, [InfoAccount]);
  useEffect(() => {
    if (account) {
      const check = isAuthorization1('2', account, DataRole);
      setCheckAuth(check);
    }
  }, [account, DataRole]);
  //end

  useEffect(() => {
    const token = localStorage.getItem('tokenUser');
    const findAccount = InfoAccount.find(acc => acc.key === token);
    if (findAccount) {
      setUserName(findAccount.userName);
    }
  }, [InfoAccount]);

  const [page, setPage] = useState<string>('0');
  const [id, setId] = useState<string>('');

  if (checkAuth) {
    return (
      <>
        {page === '0' ? (
          <DanhSachDichVu
            HandleClickAddService={() => setPage('1')}
            HandleClickDescriptionService={(id: string) => {
              setId(id);
              setPage('2');
            }}
            HandleClickUpdateService={(id: string) => {
              setId(id);
              setPage('3');
            }}
          />
        ) : page === '1' ? (
          <ThemDichVu
            HandleClickCancelAddService={() => setPage('0')}
            HandleClickOkAddService={(
              serviceId: string,
              serviceName: string,
              describe: string,
              rule: string[],
            ) => {
              if (serviceId || serviceName || describe || rule) {
                const newData: AddDataServiceInterface = {
                  serviceId: serviceId,
                  serviceName: serviceName,
                  describe: describe,
                  rule: rule,
                };
                const newDataHistory: AddUserHistoryInterface = {
                  userName: userName,
                  addressIP: '192.168.1.1',
                  operation: `Đã thêm dịch vụ ${serviceId}`,
                  dateTime: dateTimeNow,
                };
                dispatch(AddDataUserHistory(newDataHistory));
                dispatch(AddDataServices(newData));
                alert('Add success');
                setPage('0');
              } else {
                alert('Vui lòng nhập đầy đủ thông tin');
              }
            }}
          />
        ) : page === '2' ? (
          <ChiTietDichVu
            id={id}
            HandleClickGoBack={() => setPage('0')}
            HandleClickUpdate={() => setPage('3')}
          />
        ) : (
          <CapNhapDichVu
            HandleClickCancelUpdateService={() => setPage('0')}
            HandleClickOkUpdateService={(
              serviceId: string,
              serviceName: string,
              describe: string,
              rule: string[],
            ) => {
              if (serviceId || serviceName || describe || rule) {
                const newData: UpdateDataServiceInterface = {
                  key: id,
                  serviceId: serviceId,
                  serviceName: serviceName,
                  describe: describe,
                  rule: rule,
                };
                const newDataHistory: AddUserHistoryInterface = {
                  userName: userName,
                  addressIP: '192.168.1.1',
                  operation: `Đã cập nhập thông tin dịch vụ ${serviceId}`,
                  dateTime: dateTimeNow,
                };
                dispatch(AddDataUserHistory(newDataHistory));
                dispatch(UpdateDataServices(newData));
                alert('Update success');
                setPage('0');
              } else {
                alert('Vui lòng nhập đầy đủ thông tin');
              }
            }}
            id={id}
          />
        )}
      </>
    );
  } else {
    return (
      <div
        style={{
          width: 800,
          marginTop: 400,
          marginLeft: 300,
          textAlign: 'center',
        }}
      >
        <h1 className="fw-bold">Đăng nhập bằng tài khoản khác để sử dụng dịch vụ này</h1>
      </div>
    );
  }
}
