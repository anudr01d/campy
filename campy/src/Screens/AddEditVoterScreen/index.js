import React, { useState, useEffect } from 'react';
import { 
  ActivityIndicator, 
  TextInput, 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-simple-toast';

import {userLoggedOut} from '../../Redux/Actions/userAction';
import CustomHeader from '../../Components/customHeader';
import {string} from '../../Config/string';

import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';

const AddEditVoterScreen = ({route, navigation}) => {

  var voterprop = route.params;
  if(undefined!==voterprop) console.log("VOTERS IN ADD EDIT SCREEN : " + voterprop[0].FirstName);

  const updateVoterData = () => {
    firestore()
    .collection('Voters')
    .doc(voterprop[0].key)
    .update({
      "MandalName": mandalName,
      "VillageName" : villageName,
      "BoothNo": boothNo,
      "HouseNum" : houseNum,
      "FirstName": firstName,
      "LastName" : lastName,
      "Religion" : religion,
      "Married": married,
      "Gender": gender,
      "Age" : age,
      "DOB": DOB,
      "Mobile" : mobile,
      "RelationType" : relationType,
      "RelationFirstName" : relationFirstName,
      "RelationLastName" : relationLastName,
      "Schemes": value
    })
    .then(() => {
      console.log('Voter data updated successfully!');
      Toast.show('Voter data updated successfully!');
    });
  };

  const gotoVoterData = () => {
    navigation.navigate("VoterDataScreen");
  };

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [voters, setVoters] = useState([]); // Initial empty array of users
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [firstName, setFirstName] = useState(voterprop[0].FirstName);
  const [lastName, setLastName] = useState(voterprop[0].LastName);
  const [mandalName, setMandalName] = useState(voterprop[0].MandalName);
  const [villageName, setVillageName] = useState(voterprop[0].VillageName);
  const [boothNo, setBoothNo] = useState(voterprop[0].BoothNo);
  const [houseNum, setHouseNum] = useState(voterprop[0].HouseNum);
  const [religion, setReligion] = useState(voterprop[0].Religion);
  const [married, setMarried] = useState(voterprop[0].Married);
  const [gender, setGender] = useState(voterprop[0].Gender);
  const [age, setAge] = useState(voterprop[0].Age);
  const [DOB, setDOB] = useState(voterprop[0].DOB);
  const [mobile, setMobile] = useState(voterprop[0].Mobile);
  const [relationType, setRelationType] = useState(voterprop[0].RelationType);
  const [relationFirstName, setRelationFirstName] = useState(voterprop[0].RelationFirstName);
  const [relationLastName, setRelationLastName] = useState(voterprop[0].RelationLastName);
  const [schemes, setSchemes] = useState([]);
  

  const [items, setItems] = useState([
    {label: 'Kanti Velugu', value: 'K_VELUGU'},
    {label: 'Rythu Bandhu', value: 'R_BANDHU'},
    {label: 'Amma Odi & KCR Kit', value: 'AMMAODI_KCRKIT'},
    {label: 'Kalyana Lakshmi/ Shaadi Mubarak', value: 'KALYANAL_SHAADIM'},
    {label: 'Arogya Lakshmi', value: 'AROGYA_L'},
    {label: 'Aasara  pensions', value: 'AASARA_PEN'},
    {label: 'Housing for the poor', value: 'POOR_HOUSE'},
    {label: 'Land distribution to Dalits', value: 'DALIT_LAND_DIST'},
    {label: 'Rice distribution', value: 'RICE_DIST'}
  ]);

  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collection('voters')
  //     .onSnapshot(querySnapshot => {
  //       const voters = [];
  
  //       querySnapshot.forEach(documentSnapshot => {
  //         voters.push({
  //           ...documentSnapshot.data(),
  //           key: documentSnapshot.id,
  //         });
  //       });
  
  //       setVoters(voters);
  //       setLoading(false);
  //     });
  //   return () => subscriber();
  // }, []);

  // if (loading) {
  //   return <ActivityIndicator />;
  // }

  return (
    <>
      <CustomHeader screenName="Home" navigation={navigation} /> 
      <SafeAreaView style={styles.safearea}>
        <ScrollView>
          <View style={styles.details}>
              <Text style={styles.textBold}>First Name : </Text>
              <TextInput style={styles.textInput} onChangeText = {setFirstName} value={firstName}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Last Name : </Text>
              <TextInput style={styles.textInput} onChangeText = {setLastName} value={lastName}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Booth No : </Text>
              <TextInput style={styles.textInput} onChangeText = {setBoothNo} value={boothNo ? boothNo.toString() : ""}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Mandal Name : </Text>
              <TextInput style={styles.textInput} onChangeText = {setMandalName} value={mandalName}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>VillageName : </Text>
              <TextInput style={styles.textInput} onChangeText = {setVillageName} value={villageName}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>House No : </Text>
              <TextInput style={styles.textInput} onChangeText = {setHouseNum} value={houseNum}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation First Name : </Text>
              <TextInput style={styles.textInput} onChangeText = {setRelationFirstName} value={relationFirstName}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation Last Name : </Text>
              <TextInput style={styles.textInput} onChangeText = {setRelationLastName} value={relationLastName}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation Type : </Text>
              <TextInput style={styles.textInput} onChangeText = {setRelationType} value={relationType}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Religion : </Text>
              <TextInput style={styles.textInput} onChangeText = {setReligion} value={religion}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Marital Status : </Text>
              <TextInput style={styles.textInput} onChangeText = {setMarried} value={married}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Gender : </Text>
              <TextInput style={styles.textInput} onChangeText = {setGender} value={gender}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Age : </Text>
              <TextInput style={styles.textInput} onChangeText = {setAge} value={age.toString()}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Date of Birth : </Text>
              <TextInput style={styles.textInput} onChangeText = {setDOB} value={DOB}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Mobile No : </Text>
              <TextInput style={styles.textInput} onChangeText = {setMobile} value={mobile.toString()}/>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Schemes : </Text>
              <View style={{padding: 10}}>
                <DropDownPicker
                  listItemContainer={{
                    height: 40
                  }}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  listMode="MODAL" 
                  multiple={true}
                  mode="BADGE"
                />
              </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => updateVoterData()}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGray} onPress={() => gotoVoterData()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddEditVoterScreen;
