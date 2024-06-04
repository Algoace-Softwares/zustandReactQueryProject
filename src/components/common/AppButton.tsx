/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import {ActivityIndicator, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Colors, WIDTH, CustomTheme} from '../../theme';
import {TxKeyPath} from '../../i18n/types';
import AppText from './AppText';

export default function AppButton(props: appBtnType): JSX.Element {
  /*
   ** Props
   */
  const {
    title = '',
    onPress,
    disabled = false,
    loading = false,
    loadingColor,
    btnStyle = {},
    textStyle = {},
    activeOpacity = 0.8,
    RightChild = null,
    leftChild = null,
    smallBtn = false,
  } = props;

  /*
   ** Hooks
   */
  const {colors} = useTheme() as CustomTheme;
  const styles = createStyles(colors);

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={[smallBtn ? styles.smallBtn : styles.largeBtn, btnStyle]}>
      {RightChild && <View style={styles.childrenViewStyle}>{RightChild}</View>}
      {title && (
        <AppText
          style={[styles.title, textStyle]}
          numberOfLines={1}
          presetStyle={'button'}
          transText={title}
          textColor={colors.buttonTextPrimary}
        />
      )}
      {leftChild && <View style={styles.childrenViewStyle}>{leftChild}</View>}

      {loading && <ActivityIndicator color={loadingColor || colors.background} style={styles.loading} size={'small'} />}
    </TouchableOpacity>
  );
}

const createStyles = (colors: Colors) =>
  StyleSheet.create({
    childrenViewStyle: {
      marginRight: 20,
    },
    largeBtn: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: colors.button,
      borderColor: colors.buttonBorder,
      borderRadius: 8,
      borderWidth: 0.5,
      flexDirection: 'row',
      height: 45,
      justifyContent: 'center',
      marginTop: 20,
      width: WIDTH - 40,
    },
    loading: {
      marginLeft: 10,
    },
    smallBtn: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: colors.button,
      borderColor: colors.buttonBorder,
      borderRadius: 8,
      borderWidth: 0.5,
      flexDirection: 'row',
      height: 45,
      justifyContent: 'center',
      marginTop: 20,
      width: WIDTH * 0.4,
    },
    title: {
      color: colors.buttonTextPrimary,
    },
  });

interface appBtnType {
  title: TxKeyPath;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: string;
  btnStyle?: ViewStyle;
  textStyle?: TextStyle;
  activeOpacity?: number;
  RightChild?: JSX.Element | null;
  leftChild?: JSX.Element | null;
  smallBtn?: boolean;
}
