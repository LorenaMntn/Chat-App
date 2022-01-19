import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#ff1",
    flex: 1,
  },

  //personal info

  personalInfoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "stretch",
  },

  logo: { width: "auto", resizeMode: "contain" },

  enterYourName: {
    alignSelf: "center",
  },

  nameText: {
    fontSize: 20,
  },

  avatarSmall: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 2,
  },
});
