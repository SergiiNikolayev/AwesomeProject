import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  pageContainer: {
    height: 55,
    paddingHorizontal: 3,
    paddingTop: 10,
    backgroundColor: '#40beff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rightItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 20,
    color: '#000',
  },
  titlePageText: {
    fontSize: 20,
    color: '#000',
  },
  touchIconLeft: {
    paddingLeft: 15,
    paddingRight: 30,
    paddingVertical: 10,
  },
  touchIconRight: {
    paddingRight: 15,
    paddingLeft: 30,
    paddingVertical: 10,
  },
  leftItem: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rotate: {
    transform: [{ rotate: '180deg' }],
  },
});
