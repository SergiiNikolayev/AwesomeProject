import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  img: {
    width: 20,
    height: 20,
    borderRadius: 10,
  }
});