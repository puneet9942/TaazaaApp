import React, { useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import 'react-native-gesture-handler';
import { FlatGrid } from 'react-native-super-grid';
import FastImage from 'react-native-fast-image';
import useMyUserData from '../../component/user/hook/index';
import style from './styles';
import {
  USER_COUNT_PLACEHOLDER,
  LABEL_USER_COUNT,
  NAVIGATION_DETAILS,
} from '../../constants/index';

const HomeScreen = ({ navigation }) => {
  const { data } = useMyUserData(50);

  const [number, onChangeNumber] = React.useState(50);
  let clonedArray = JSON.parse(JSON.stringify(data));
  const [listData, setListData] = React.useState(null);

  useEffect(() => {
    if (number) {
      clonedArray = clonedArray?.slice(0, number);
      setListData(clonedArray);
    }
  }, [number]);

  useEffect(() => {
    setListData(data);
  }, [data]);

  return (
    <>
      <Text style={style.textStyle} numberOfLines={1}>
        {LABEL_USER_COUNT}
      </Text>
      <View style={style.containerStyleTextInput}>
        <TextInput
          style={style.textInputStyle}
          placeholder={USER_COUNT_PLACEHOLDER}
          defaultValue={50}
          value={number}
          onChangeText={onChangeNumber}
          keyboardType="numeric"
        />
      </View>
      {data && listData ? (
        <FlatGrid
          itemDimension={150}
          data={listData}
          style={style.gridView}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { itemData: item })}
            >
              <View style={[style.itemContainer]}>
                <FastImage
                  style={style.itemContainerImage}
                  source={{
                    uri: item.picture.medium,
                  }}
                />
                <Text style={style.itemName} numberOfLines={1}>
                  {`${item.name.first} ${item.name.last}`}
                </Text>
                <Text style={style.itemCode}>{item.phone} </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <ActivityIndicator size="large" style={style.indicator} />
      )}
    </>
  );
};

export default HomeScreen;
