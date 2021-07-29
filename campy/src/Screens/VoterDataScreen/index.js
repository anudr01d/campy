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

import {userLoggedOut} from '../../Redux/Actions/userAction';
import CustomHeader from '../../Components/customHeader';
import {string} from '../../Config/string';

import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';

const VoterDataScreen = ({navigation}) => {

  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [voters, setVoters] = useState([]); // Initial empty array of users


  const gotoAddEdit = () => {
    navigation.navigate('AddEditVoterScreen')
  };

  const fetchVoterData = () => {
    setHidden(false);
  };

  const resetPage = () => {
    setHidden(true);
  };

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
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            maxLength={10}
            placeholder="Please enter 10 Digit EPIC NUMBER"
          />
          <TouchableOpacity style={styles.gobutton} onPress = {() => fetchVoterData()}> 
            <Text>GO</Text>
          </TouchableOpacity>
        </View>
        { (!hidden)? 
        <ScrollView style={{visibility : 'hidden', height: 0}}>
          <View style={styles.details}>
              <Text style={styles.textBold}>First Name : </Text>
              <Text style={styles.textNormal}>Anudeep</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Last Name : </Text>
              <Text style={styles.textNormal}>K</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Booth No : </Text>
              <Text style={styles.textNormal}>1</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>House No : </Text>
              <Text style={styles.textNormal}>Anudeep</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation First Name : </Text>
              <Text style={styles.textNormal}>Krishnadas</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation Last Name : </Text>
              <Text style={styles.textNormal}>Aithal</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Relation Type : </Text>
              <Text style={styles.textNormal}>F</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Religion : </Text>
              <Text style={styles.textNormal}>Hindu</Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Marital Status : </Text>
              <Text style={styles.textNormal}></Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Gender : </Text>
              <Text style={styles.textNormal}></Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Age : </Text>
              <Text style={styles.textNormal}></Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Date of Birth : </Text>
              <Text style={styles.textNormal}></Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Mobile No : </Text>
              <Text style={styles.textNormal}></Text>
              <View style={styles.separator}/>
              <Text style={styles.textBold}>Schemes : </Text>
              <Text style={styles.textNormal}></Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => gotoAddEdit()}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGray} onPress={() => resetPage()}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
        : 
        <View style={{
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center'}}>
          <Text style={styles.textNormal}>Please enter the 10 digit EPIC Number.</Text>
        </View>
        }
      </SafeAreaView>
    </>
  );

  // return (
  //   <>
  //     <CustomHeader screenName="Home" navigation={navigation} /> 
  //     <View style={styles.container}>
  //       <Text style={styles.text}>Voter Data</Text>
        
  //       <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
  //         <Text style={styles.buttonText}>{string.logout.toUpperCase()}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </>
  // );
  {/* <FlatList
          data={voters}
          renderItem={({ item }) => (
            <View style= {styles.item}>
              <Text style={styles.text}>Voter Name: {item.voter_name}</Text>
              <Text>Voter Age: {item.voter_age}</Text>
            </View>
          )}
        /> */}
};

export default VoterDataScreen;
