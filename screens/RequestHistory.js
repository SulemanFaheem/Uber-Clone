import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
function RequestHistory() {
return (
<View  style={styles.textcontainer}>
<Text style={styles.text}>All your previous requests will be shown here within 24 hours</Text>
</View>
)
}

const styles = StyleSheet.create({
textcontainer:{
    flex:1,
    justifyContent:'center',
},
text:{
    paddingLeft:'auto',
    fontSize:35,
    fontWeight:'bold'
}
})
export default RequestHistory