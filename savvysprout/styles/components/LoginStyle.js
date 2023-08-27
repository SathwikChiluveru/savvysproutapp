import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start", // Start from the top
      paddingTop: '23%', // Add paddingTop to push content down
    },
    image: {
      marginBottom: 10,
      width: 200,
      height: 250,
    },
    inputView: {
      borderRadius: 30,
      borderWidth: 4, // Add border
      borderColor: "#ffcc15", // Yellow border color
      backgroundColor: "white", // White background color
      width: "75%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      width: '80%',
      flex: 1,
      padding: 10,
      backgroundColor: "white",
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    signupBtn: {
      width: "40%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#ffcc15",
    },
    loginBtn: {
      width: "40%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#ffcc15",
      
    },

    btnText:{
      fontSize: 20,
      
    }
  });

export default styles