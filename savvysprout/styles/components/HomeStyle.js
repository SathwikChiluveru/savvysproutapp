import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
    
    titleText: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 20,
    },
    cardStyle: {
      width: '85%',
      height: '95%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderRadius: 7,
    },
    cardTitleStyle: {
      color: '#fff',
      fontSize: 22,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set the background color
      paddingLeft: 5,
      paddingBottom: 3,
      paddingTop:5

    },
    swipeText: {
      fontSize: 18,
      textAlign: 'center',
    },
})

export default styles