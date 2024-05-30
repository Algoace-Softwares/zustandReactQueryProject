import {StyleSheet, Text, View, Modal, TouchableOpacity, Platform} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {useTranslation} from 'react-i18next';
import {COLORS, GlobalStyles, HEIGHT} from '../../theme';

interface datePickerModalType {
  visible: boolean;
  setVisible: (data: boolean) => void;
  clickAnywhere?: boolean;
  onSelectedDate: (data: Date) => void;
  value: Date;
}

export default function DatePickerModal(props: datePickerModalType): JSX.Element {
  /*
   ** Props
   */
  const {visible = false, setVisible, clickAnywhere = false, onSelectedDate, value = new Date()} = props;
  /*
   ** States
   */
  const [androidDate, setAndroidDate] = useState<Date>(new Date());
  /*
   ** Hooks
   */
  const {t} = useTranslation();
  /*
   ** Functions
   */
  /*
   ** refactory date getting day, month and yaer from that date
   */
  const refactorDate = (selectedDate: Date) => {
    onSelectedDate(selectedDate);
    setVisible(false);
  };

  return (
    <Modal transparent={true} animationType={'slide'} visible={visible} onRequestClose={() => setVisible(false)}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.centeredView}
        onPress={() => clickAnywhere && setVisible(false)}>
        <View style={styles.modalView}>
          {/* header start */}
          <View style={styles.iPhoneStyle} />
          <View style={styles.titleViewStyle}>
            <TouchableOpacity onPress={() => refactorDate(androidDate)}>
              <Text style={styles.title1Style}>{t('selectDate')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={styles.title2Style}>{t('cancel')}</Text>
            </TouchableOpacity>
          </View>
          {Platform.OS === 'android' ? (
            <DatePicker
              open={visible}
              date={androidDate}
              mode={'date'}
              minimumDate={new Date()}
              onDateChange={setAndroidDate}
            />
          ) : (
            <DatePicker
              modal
              open={visible}
              date={value}
              minimumDate={new Date()}
              mode={'date'}
              onConfirm={refactorDate}
              onCancel={() => setVisible(false)}
            />
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  iPhoneStyle: {
    alignSelf: 'center',
    backgroundColor: COLORS.palette.secondary400,
    borderRadius: 2.5,
    height: 5,
    position: 'absolute',
    top: 10,
    width: 85,
  },
  modalView: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderWidth: 0.5,
    height: HEIGHT * 0.35,
    paddingHorizontal: 20,
    width: '100%',
  },

  title1Style: {
    color: COLORS.separator,
    fontWeight: 'bold',
    ...GlobalStyles.h5,
  },

  title2Style: {
    color: COLORS.text,
    fontWeight: 'bold',
    ...GlobalStyles.l1,
  },

  titleViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    width: '100%',
  },
});
