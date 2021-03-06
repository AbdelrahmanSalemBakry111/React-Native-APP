import React , {Component} from 'react';
import {View , Image , Button , StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
class PickImage extends  Component{
    state = {
        pickedImage: null,
    };
    //maxWidth and maxHiehgt = decraise the size because when upload we need it to much faster because its smaller
    pickImageHandler=()=>{
        ImagePicker.showImagePicker({title:"Pick an Image" , maxWidth:800 , maxHeight:600}, res=>{
            console.log('Response = ', res);
            this.setState({
                pickedImage:{uri: res.uri}
            });
            if(res.didCancel) {
                console.log('User Cancel: ', res.error);
            }else if(res.error){
                console.log('ImagePicker Error: ', res.error);
            }else{
                this.setState({
                    pickedImage:{uri: res.uri}
                });
            }
                    this.props.onImagePicked(res);
            console.log(res.error);
        });

          };
        render(){
            return(



                <View style={styles.container}>
        <View style={styles.placeholder}>
        <Image source={this.state.pickedImage} style={styles.previewImage}/>

        </View>
               <View style={styles.button}>
                <Button color="#841584" title="Pick Image" onPress={this.pickImageHandler}/>
                </View>
            </View>

            );
        }
}
const styles = StyleSheet.create({
        container:{
          width:"100%",
          alignItems :"center",
        },
       placeholder:{
        borderWidth:1,
        borderColor:"black",
        backgroundColor:"#eee",
        width:"80%",
        height: 150,

      },
      previewImage:{
        width:"100%",
        height:"100%",
     },
    button:{
        margin:8,
    },
});
export default PickImage;