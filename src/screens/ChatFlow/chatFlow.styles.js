import { StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';
import { Fonts } from '../../assets/fonts';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    //width: '100%',
    backgroundColor: 'rgb(247, 247, 247)',
    elevation: 2,
  },
  // typeContainerMain: {
  //   //flex: 1,
  //   //flexDirection: 'column-reverse',
  // },
  typeBoxContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(226, 241, 255)',
    height: normalize(65),
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 75,
    right: 10,
  },

  circleButton: {
    width: normalize(42),
    height: normalize(42),
    borderRadius: normalize(30),
    backgroundColor: 'rgb(33, 36, 41)',
    marginHorizontal: normalize(4),
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    resizeMode: 'contain',
    //tintColor: 'black',
    //width: normalize(20),
  },
  typeContainer: {
    backgroundColor: 'white',
    borderRadius: normalize(50),
    // height: normalize(40),
    paddingVertical: normalize(10),
    marginRight:10,
    width: '80%',
    //marginLeft: normalize(10),
  },
  textInput: {
    // fontFamily: 'System Font',
    fontSize: normalize(16),
    paddingLeft: normalize(15),
    textAlignVertical: 'center',
  },
  modalBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    height: 420,
    width: 100 + '%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: { width: normalize(210) },
  propsal: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: normalize(100),
    height: normalize(42),
    borderRadius: normalize(30),
    backgroundColor: 'rgb(33, 36, 41)',
    marginHorizontal: normalize(4),
    paddingHorizontal: 6,
    justifyContent: 'center',
  },
  proposalText: {
    fontSize: 13,
    color: '#fff',
    marginLeft: 4,
  },
});
