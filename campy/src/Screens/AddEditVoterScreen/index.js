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

import {userLoggedOut} from '../../Redux/Actions/userAction';
import CustomHeader from '../../Components/customHeader';
import {string} from '../../Config/string';

import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';

const AddEditVoterScreen = ({navigation}) => {

  const gotoVoterData = () => {
    navigation.navigate("VoterDataScreen");
  };

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [voters, setVoters] = useState([]); // Initial empty array of users
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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


  useEffect(() => {
    const subscriber = firestore()
      .collection('voters')
      .onSnapshot(querySnapshot => {
        const voters = [];
  
        querySnapshot.forEach(documentSnapshot => {
          voters.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setVoters(voters);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <CustomHeader screenName="Home" navigation={navigation} /> 
      <SafeAreaView style={styles.safearea}>
        <ScrollView>
          <View style={styles.details}>
              <Text style={styles.textBold}>First Name : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Last Name : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Booth No : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>House No : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation First Name : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation Last Name : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation Type : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Religion : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Marital Status : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Gender : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Age : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Date of Birth : </Text>
              <TextInput style={styles.textInput} />
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Mobile No : </Text>
              <TextInput style={styles.textInput} />
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
          <TouchableOpacity style={styles.button} onPress={() => gotoVoterData()}>
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
