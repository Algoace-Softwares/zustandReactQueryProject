import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import {GlobalStyles, COLORS} from '../../assets';

const CELL_COUNT = 6;

interface oTPFieldInputType {
  textLable: string;
  mainOtpStyle?: ViewStyle;
  textLabelStyle?: ViewStyle;
  mianViewStyle?: ViewStyle;
  onChangeText: (text: string) => void;
  cellStyle?: ViewStyle;
}

export default function OTPFieldInput(properties: oTPFieldInputType): JSX.Element {
  /*
   ** Props
   */
  const {
    textLable = '',
    mainOtpStyle = {},
    textLabelStyle = {},
    mianViewStyle = {},
    onChangeText,
    cellStyle = {},
  } = properties;
  /*
   ** States
   */
  const [value, setValue] = useState<string>('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  /*
   ** Refs
   */
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  return (
    <View style={[styles.viewStyle, mianViewStyle]}>
      <Text style={[styles.upperTextStyle, textLabelStyle]}>{textLable}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={text => {
          onChangeText(text);
          setValue(text);
        }}
        cellCount={CELL_COUNT}
        rootStyle={[styles.codeFieldRoot, mainOtpStyle]}
        keyboardType={'number-pad'}
        textContentType={'oneTimeCode'}
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, cellStyle, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    borderColor: COLORS.seconday,
    borderRadius: 5,
    borderWidth: 1,
    color: COLORS.seconday,
    fontSize: 24,
    height: 40,
    lineHeight: 38,
    textAlign: 'center',
    width: 40,
  },
  codeFieldRoot: {
    marginTop: 10,
  },
  focusCell: {
    borderColor: COLORS.black,
  },
  upperTextStyle: {
    color: COLORS.seconday,
    ...GlobalStyles.b1,
  },
  viewStyle: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
