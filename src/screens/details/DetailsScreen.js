import React from 'react';
import { Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import style from './styles';

const DetailsScreen = ({ route }) => {
  const { itemData } = route.params;
  const userName = `${itemData.name.title} ${itemData.name.first} ${itemData.name.last}`;
  const { gender, phone, cell, email } = itemData;
  const { age } = itemData.dob;

  return (
    <>
      <FastImage
        style={style.imageContainer}
        source={{
          uri: itemData.picture.large,
        }}
      />
      <Text style={style.textStyle1} numberOfLines={1}>
        {' '}
        Name : {userName}
      </Text>
      <Text style={style.textStyle2} numberOfLines={1}>
        {' '}
        Gender : {gender}
      </Text>
      <Text style={style.textStyle1} numberOfLines={1}>
        {' '}
        Age : {age} years
      </Text>
      <Text style={style.textStyle2} numberOfLines={1}>
        {' '}
        Phone : {phone}
      </Text>
      <Text style={style.textStyle1} numberOfLines={1}>
        {' '}
        Cell : {cell}
      </Text>
      <Text style={style.textStyle2} numberOfLines={1}>
        {' '}
        Email : {email}
      </Text>
    </>
  );
};

export default DetailsScreen;
