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
      width: '75%',
      height: '45%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderRadius: 7,
    },
    cardTitleStyle: {
      color: '#fff',
      fontSize: 24,
    },
    swipeText: {
      fontSize: 18,
      textAlign: 'center',
    },
})

export default styles