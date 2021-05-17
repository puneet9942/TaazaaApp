import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  itemContainer: {
    borderRadius: 5,
    padding: 8,
    height: 150,
    backgroundColor: '#2980b9',
  },
  itemContainerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '75%',
  },
  itemName: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000000',
  },
  indicator: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    fontSize: 16,
    height: 40,
  },
  textStyle: {
    fontSize: 16,
    height: 20,
    marginStart: 12,
    marginEnd: 12,
    marginTop: 12,
    fontWeight: 'bold',
  },
  containerStyleTextInput: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginStart: 12,
    marginEnd: 12,
  },
});

export default style;
